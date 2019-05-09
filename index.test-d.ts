import {expectType} from 'tsd';
import {readFileSync} from 'fs';
import md5Hex = require('.');

const buffer = readFileSync('unicorn.png');

expectType<string>(md5Hex(buffer));
expectType<string>(md5Hex([buffer]));
expectType<string>(md5Hex('foo'));
expectType<string>(md5Hex(['foo']));
expectType<string>(md5Hex([buffer, 'foo']));
