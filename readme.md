# md5-hex [![Build Status](https://travis-ci.org/sindresorhus/md5-hex.svg?branch=master)](https://travis-ci.org/sindresorhus/md5-hex)

> Create a MD5 hash with hex encoding

*Please don't use a MD5 hash for anything sensitive!*


## Install

```
$ npm install --save md5-hex
```


## Usage

```js
var fs = require('fs');
var md5Hex = require('md5-hex');
var buffer = fs.readFileSync('unicorn.png');

md5Hex(buffer);
//=> '1abcb33beeb811dca15f0ac3e47b88d9'
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
