//
// Autogenerated by Thrift Compiler (0.18.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

const thrift = require('thrift');
const Thrift = thrift.Thrift;
const Int64 = require('node-int64');

const uuid_ttypes = require('./uuid_types');


const ttypes = require('./services_types');
//HELPER FUNCTIONS AND STRUCTURES

const Service_about_args = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('Service_about_args');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const Service_about_result = class {
  constructor(args) {
    this.success = null;
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new ttypes.ServiceInfo(args.success);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new ttypes.ServiceInfo();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('Service_about_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const Service_alive_args = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('Service_alive_args');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const Service_alive_result = class {
  constructor(args) {
    this.success = null;
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = args.success;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.BOOL) {
          this.success = input.readBool();
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('Service_alive_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
      output.writeBool(this.success);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const ServiceClient = exports.Client = class ServiceClient {
  constructor(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
  }
  seqid () { return this._seqid; }
  new_seqid () { return this._seqid += 1; }

  about () {
    this._seqid = this.new_seqid();
    const self = this;
    return new Promise((resolve, reject) => {
      self._reqs[self.seqid()] = (error, result) => {
        return error ? reject(error) : resolve(result);
      };
      self.send_about();
    });
  }

  send_about () {
    const output = new this.pClass(this.output);
    const args = new Service_about_args();
    try {
      output.writeMessageBegin('about', Thrift.MessageType.CALL, this.seqid());
      args.write(output);
      output.writeMessageEnd();
      return this.output.flush();
    }
    catch (e) {
      delete this._reqs[this.seqid()];
      if (typeof output.reset === 'function') {
        output.reset();
      }
      throw e;
    }
  }

  recv_about (input, mtype, rseqid) {
    const callback = this._reqs[rseqid] || function() {};
    delete this._reqs[rseqid];
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(input);
      input.readMessageEnd();
      return callback(x);
    }
    const result = new Service_about_result();
    result.read(input);
    input.readMessageEnd();

    if (null !== result.success) {
      return callback(null, result.success);
    }
    return callback('about failed: unknown result');
  }

  alive () {
    this._seqid = this.new_seqid();
    const self = this;
    return new Promise((resolve, reject) => {
      self._reqs[self.seqid()] = (error, result) => {
        return error ? reject(error) : resolve(result);
      };
      self.send_alive();
    });
  }

  send_alive () {
    const output = new this.pClass(this.output);
    const args = new Service_alive_args();
    try {
      output.writeMessageBegin('alive', Thrift.MessageType.CALL, this.seqid());
      args.write(output);
      output.writeMessageEnd();
      return this.output.flush();
    }
    catch (e) {
      delete this._reqs[this.seqid()];
      if (typeof output.reset === 'function') {
        output.reset();
      }
      throw e;
    }
  }

  recv_alive (input, mtype, rseqid) {
    const callback = this._reqs[rseqid] || function() {};
    delete this._reqs[rseqid];
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(input);
      input.readMessageEnd();
      return callback(x);
    }
    const result = new Service_alive_result();
    result.read(input);
    input.readMessageEnd();

    if (null !== result.success) {
      return callback(null, result.success);
    }
    return callback('alive failed: unknown result');
  }
};
const ServiceProcessor = exports.Processor = class ServiceProcessor {
  constructor(handler) {
    this._handler = handler;
  }
  process (input, output) {
    const r = input.readMessageBegin();
    if (this['process_' + r.fname]) {
      return this['process_' + r.fname].call(this, r.rseqid, input, output);
    } else {
      input.skip(Thrift.Type.STRUCT);
      input.readMessageEnd();
      const x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
      output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
      x.write(output);
      output.writeMessageEnd();
      output.flush();
    }
  }
  process_about (seqid, input, output) {
    const args = new Service_about_args();
    args.read(input);
    input.readMessageEnd();
    if (this._handler.about.length === 0) {
      new Promise((resolve) => resolve(this._handler.about.bind(this._handler)(
      ))).then(result => {
        const result_obj = new Service_about_result({success: result});
        output.writeMessageBegin("about", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }).catch(err => {
        let result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("about", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    } else {
      this._handler.about((err, result) => {
        let result_obj;
        if ((err === null || typeof err === 'undefined')) {
          result_obj = new Service_about_result((err !== null || typeof err === 'undefined') ? err : {success: result});
          output.writeMessageBegin("about", Thrift.MessageType.REPLY, seqid);
        } else {
          result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("about", Thrift.MessageType.EXCEPTION, seqid);
        }
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    }
  }
  process_alive (seqid, input, output) {
    const args = new Service_alive_args();
    args.read(input);
    input.readMessageEnd();
    if (this._handler.alive.length === 0) {
      new Promise((resolve) => resolve(this._handler.alive.bind(this._handler)(
      ))).then(result => {
        const result_obj = new Service_alive_result({success: result});
        output.writeMessageBegin("alive", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }).catch(err => {
        let result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("alive", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    } else {
      this._handler.alive((err, result) => {
        let result_obj;
        if ((err === null || typeof err === 'undefined')) {
          result_obj = new Service_alive_result((err !== null || typeof err === 'undefined') ? err : {success: result});
          output.writeMessageBegin("alive", Thrift.MessageType.REPLY, seqid);
        } else {
          result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("alive", Thrift.MessageType.EXCEPTION, seqid);
        }
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    }
  }
};