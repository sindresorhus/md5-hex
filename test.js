'use strict';
var test = require('ava');
var md5Hex = require('./');

test(function (t) {
	t.assert(md5Hex(new Buffer('unicorn')) === '1abcb33beeb811dca15f0ac3e47b88d9');
	t.end();
});
