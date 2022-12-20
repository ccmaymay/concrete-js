#!/usr/bin/env node

const {readFile, writeFile} = require('fs/promises');
const thrift = require("thrift");
const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');

const concrete = require("./concrete");
const {serializeThrift, deserializeThrift} = require("./util");

const argv = yargs(hideBin(process.argv))
  .command('$0 <inputPath> <outputPath>',
    `\
Send file contents to a Concrete Convert service. 

Can convert from a Concrete Communication to another format or vice versa. \
What the other format is depends on the implementation of the service you're connecting to. \
The direction of conversion (from Concrete or to Concrete) is inferred from the provided filenames. \
exactly one file must have a .concrete extension and that file will be interpreted as the \
Concrete Communication. \
`
  )
  .positional('inputPath', {
    type: 'string',
    description: 'Path to input Concrete Communication or non-Concrete file',
  })
  .positional('outputPath', {
    type: 'string',
    description: 'Path to output non-Concrete or Concrete Communication file',
  })
  .option('host', {
    type: 'string',
    default: 'localhost',
    description: 'Convert service host to connect to',
  })
  .option('port', {
    type: 'number',
    default: 9000,
    description: 'Convert service port to connect to',
  })
  .help()
  .alias('help', 'h')
  .parse();

console.log(`Connecting to ${argv.host}:${argv.port}`);
const connection = thrift.createConnection(argv.host, argv.port, {
  transport: thrift.TBufferedTransport,
  protocol: thrift.TBinaryProtocol,
});
connection.on("error", (err) => {
  console.error("Connection error:");
  console.error(err);
});

const client = thrift.createClient(concrete.convert.ConvertCommunicationService, connection);

if (argv.inputPath.endsWith(".concrete") && !argv.outputPath.endsWith(".concrete")) {
  client.about()
    .then((serviceInfo) => console.log(serviceInfo))
    .then(() => readFile(argv.inputPath))
    .then(() => client.fromConcrete(
      deserializeThrift(inputData, concrete.communication.Communication)
    ))
    .then((outputData) => writeFile(argv.outputPath, outputData))
    .finally(() => connection.end());
} else if (!argv.inputPath.endsWith(".concrete") && argv.outputPath.endsWith(".concrete")) {
  client.about()
    .then((serviceInfo) => console.log(serviceInfo))
    .then(() => readFile(argv.inputPath))
    .then(() => client.toConcrete(inputData))
    .then((outputObj) => writeFile(argv.outputPath, serializeThrift(outputObj)))
    .finally(() => connection.end());
} else {
  console.error("Exactly one of inputPath and outputPath must end in a .concrete extension.");
  console.error(`inputPath: ${argv.inputPath}`);
  console.error(`outputPath: ${argv.outputPath}`);
}