import test from 'ava';
import md5Hex from './index.js';
import md5HexBrowser from './browser.js';

test('main', t => {
	t.is(md5Hex('unicorn'), '1abcb33beeb811dca15f0ac3e47b88d9');
	t.is(md5Hex(Buffer.from('unicorn')), '1abcb33beeb811dca15f0ac3e47b88d9');
	t.is(md5Hex(['uni', 'corn']), '1abcb33beeb811dca15f0ac3e47b88d9');
	t.is(md5Hex(['uni', Buffer.from('corn')]), '1abcb33beeb811dca15f0ac3e47b88d9');
});

test('ensure the Node.js and browser version match', t => {
	t.is(md5Hex('中文chinese'), md5HexBrowser('中文chinese'));
});
