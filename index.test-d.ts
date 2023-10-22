import fs from 'node:fs';
import {expectType} from 'tsd';
import md5Hex from './index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const buffer: Uint8Array = fs.readFileSync('unicorn.png');

expectType<string>(md5Hex(buffer));
expectType<string>(md5Hex([buffer]));
expectType<string>(md5Hex('foo'));
expectType<string>(md5Hex(['foo']));
expectType<string>(md5Hex([buffer, 'foo']));
