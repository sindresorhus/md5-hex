import {expectType} from 'tsd';
import * as fs from 'fs';
import md5Hex = require('.');

const buffer = fs.readFileSync('unicorn.png');

expectType<string>(md5Hex(buffer));
expectType<string>(md5Hex([buffer]));
expectType<string>(md5Hex('foo'));
expectType<string>(md5Hex(['foo']));
