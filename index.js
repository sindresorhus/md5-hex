'use strict';
const crypto = require('crypto');

module.exports = data => {
	const hash = crypto.createHash('md5');

	const update = buffer => {
		const inputEncoding = typeof buffer === 'string' ? 'utf8' : undefined;
		hash.update(buffer, inputEncoding);
	};

	if (Array.isArray(data)) {
		data.forEach(element => {
			update(element);
		});
	} else {
		update(data);
	}

	return hash.digest('hex');
};
