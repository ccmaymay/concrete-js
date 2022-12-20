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
const metadata_ttypes = require('./metadata_types');


const ttypes = module.exports = {};
const LinkTarget = module.exports.LinkTarget = class {
  constructor(args) {
    this.confidence = null;
    this.targetId = null;
    this.dbId = null;
    this.dbName = null;
    if (args) {
      if (args.confidence !== undefined && args.confidence !== null) {
        this.confidence = args.confidence;
      }
      if (args.targetId !== undefined && args.targetId !== null) {
        this.targetId = new uuid_ttypes.UUID(args.targetId);
      }
      if (args.dbId !== undefined && args.dbId !== null) {
        this.dbId = args.dbId;
      }
      if (args.dbName !== undefined && args.dbName !== null) {
        this.dbName = args.dbName;
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
        case 1:
        if (ftype == Thrift.Type.DOUBLE) {
          this.confidence = input.readDouble();
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.targetId = new uuid_ttypes.UUID();
          this.targetId.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRING) {
          this.dbId = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.STRING) {
          this.dbName = input.readString();
        } else {
          input.skip(ftype);
        }
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
    output.writeStructBegin('LinkTarget');
    if (this.confidence !== null && this.confidence !== undefined) {
      output.writeFieldBegin('confidence', Thrift.Type.DOUBLE, 1);
      output.writeDouble(this.confidence);
      output.writeFieldEnd();
    }
    if (this.targetId !== null && this.targetId !== undefined) {
      output.writeFieldBegin('targetId', Thrift.Type.STRUCT, 2);
      this.targetId.write(output);
      output.writeFieldEnd();
    }
    if (this.dbId !== null && this.dbId !== undefined) {
      output.writeFieldBegin('dbId', Thrift.Type.STRING, 3);
      output.writeString(this.dbId);
      output.writeFieldEnd();
    }
    if (this.dbName !== null && this.dbName !== undefined) {
      output.writeFieldBegin('dbName', Thrift.Type.STRING, 4);
      output.writeString(this.dbName);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const Link = module.exports.Link = class {
  constructor(args) {
    this.sourceId = null;
    this.linkTargetList = null;
    if (args) {
      if (args.sourceId !== undefined && args.sourceId !== null) {
        this.sourceId = new uuid_ttypes.UUID(args.sourceId);
      } else {
        throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field sourceId is unset!');
      }
      if (args.linkTargetList !== undefined && args.linkTargetList !== null) {
        this.linkTargetList = Thrift.copyList(args.linkTargetList, [ttypes.LinkTarget]);
      } else {
        throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field linkTargetList is unset!');
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
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.sourceId = new uuid_ttypes.UUID();
          this.sourceId.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.LIST) {
          this.linkTargetList = [];
          const _rtmp31 = input.readListBegin();
          const _size0 = _rtmp31.size || 0;
          for (let _i2 = 0; _i2 < _size0; ++_i2) {
            let elem3 = null;
            elem3 = new ttypes.LinkTarget();
            elem3.read(input);
            this.linkTargetList.push(elem3);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
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
    output.writeStructBegin('Link');
    if (this.sourceId !== null && this.sourceId !== undefined) {
      output.writeFieldBegin('sourceId', Thrift.Type.STRUCT, 1);
      this.sourceId.write(output);
      output.writeFieldEnd();
    }
    if (this.linkTargetList !== null && this.linkTargetList !== undefined) {
      output.writeFieldBegin('linkTargetList', Thrift.Type.LIST, 2);
      output.writeListBegin(Thrift.Type.STRUCT, this.linkTargetList.length);
      for (let iter4 in this.linkTargetList) {
        if (this.linkTargetList.hasOwnProperty(iter4)) {
          iter4 = this.linkTargetList[iter4];
          iter4.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const Linking = module.exports.Linking = class {
  constructor(args) {
    this.metadata = null;
    this.linkList = null;
    if (args) {
      if (args.metadata !== undefined && args.metadata !== null) {
        this.metadata = new metadata_ttypes.AnnotationMetadata(args.metadata);
      } else {
        throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field metadata is unset!');
      }
      if (args.linkList !== undefined && args.linkList !== null) {
        this.linkList = Thrift.copyList(args.linkList, [ttypes.Link]);
      } else {
        throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field linkList is unset!');
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
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.metadata = new metadata_ttypes.AnnotationMetadata();
          this.metadata.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.LIST) {
          this.linkList = [];
          const _rtmp36 = input.readListBegin();
          const _size5 = _rtmp36.size || 0;
          for (let _i7 = 0; _i7 < _size5; ++_i7) {
            let elem8 = null;
            elem8 = new ttypes.Link();
            elem8.read(input);
            this.linkList.push(elem8);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
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
    output.writeStructBegin('Linking');
    if (this.metadata !== null && this.metadata !== undefined) {
      output.writeFieldBegin('metadata', Thrift.Type.STRUCT, 1);
      this.metadata.write(output);
      output.writeFieldEnd();
    }
    if (this.linkList !== null && this.linkList !== undefined) {
      output.writeFieldBegin('linkList', Thrift.Type.LIST, 2);
      output.writeListBegin(Thrift.Type.STRUCT, this.linkList.length);
      for (let iter9 in this.linkList) {
        if (this.linkList.hasOwnProperty(iter9)) {
          iter9 = this.linkList[iter9];
          iter9.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};