import crypto from 'node:crypto';

export default function md5Hex(data) {
	const hash = crypto.createHash('md5');

	const update = buffer => {
		const inputEncoding = typeof buffer === 'string' ? 'utf8' : undefined;
		hash.update(buffer, inputEncoding);
	};

	if (Array.isArray(data)) {
		for (const element of data) {
			update(element);
		}
	} else {
		update(data);
	}

	return hash.digest('hex');
}
