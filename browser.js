'use strict';
const md5OMatic = require('md5-o-matic');

module.exports = data => {
	if (Array.isArray(data)) {
		data = data.join('');
	}

	return md5OMatic(data);
};
