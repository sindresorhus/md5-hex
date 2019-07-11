'use strict';
const blueimp_md5 = require('blueimp-md5');

module.exports = data => {
	if (Array.isArray(data)) {
		data = data.join('');
	}

	return blueimp_md5(data);
};
