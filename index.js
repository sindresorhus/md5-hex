'use strict';
const crypto = require('crypto');

module.exports = function (data) {
	const hash = crypto.createHash('md5');

	const update = buffer => {
		const inputEncoding = typeof buffer === 'string' ? 'utf8' : undefined;
		hash.update(buffer, inputEncoding);
	};

	if (arguments.length > 1) {
		throw new Error('Too many arguments. Try specifying an array.');
	}

	if (Array.isArray(data)) {
		data.forEach(update);
	} else {
		update(data);
	}

	return hash.digest('hex');
};
