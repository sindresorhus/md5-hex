import blueimpMd5 from 'blueimp-md5';

export default function md5Hex(data) {
	if (Array.isArray(data)) {
		data = data.join('');
	}

	return blueimpMd5(data);
}
