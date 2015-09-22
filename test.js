import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('unicorn'), '1abcb33beeb811dca15f0ac3e47b88d9');
	t.is(fn(new Buffer('unicorn')), '1abcb33beeb811dca15f0ac3e47b88d9');
	t.end();
});
