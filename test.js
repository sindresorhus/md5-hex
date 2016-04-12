import test from 'ava';
import m from './';

test(t => {
	t.is(m('unicorn'), '1abcb33beeb811dca15f0ac3e47b88d9');
	t.is(m(new Buffer('unicorn')), '1abcb33beeb811dca15f0ac3e47b88d9');
	t.is(m(['uni', 'corn']), '1abcb33beeb811dca15f0ac3e47b88d9');
	t.is(m(['uni', new Buffer('corn')]), '1abcb33beeb811dca15f0ac3e47b88d9');
	t.throws(() => m('uni', 'corn'), 'Too many arguments. Try specifying an array.');
});
