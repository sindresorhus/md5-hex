'use strict';
var crypto = require('crypto');

module.exports = function (buf) {
	return crypto.createHash('md5').update(buf).digest('hex');
};
