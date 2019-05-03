import test from 'ava';
import md5Hex from './';

test('main', t => {
	t.is(md5Hex('unicorn'), '1abcb33beeb811dca15f0ac3e47b88d9');
	t.is(md5Hex(new Buffer('unicorn')), '1abcb33beeb811dca15f0ac3e47b88d9');
	t.is(md5Hex(['uni', 'corn']), '1abcb33beeb811dca15f0ac3e47b88d9');
	t.is(md5Hex(['uni', new Buffer('corn')]), '1abcb33beeb811dca15f0ac3e47b88d9');
	t.throws(() => md5Hex('uni', 'corn'), 'Too many arguments. Try specifying an array.');
});
