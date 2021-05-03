import {expectType} from 'tsd';
import * as fs from 'node:fs';
import md5Hex from './index.js';

const buffer = fs.readFileSync('unicorn.png');

expectType<string>(md5Hex(buffer));
expectType<string>(md5Hex([buffer]));
expectType<string>(md5Hex('foo'));
expectType<string>(md5Hex(['foo']));
expectType<string>(md5Hex([buffer, 'foo']));
