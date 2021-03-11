crop-url
========

[![Build Status][github-actions-image]][github-actions-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependencies Status][daviddm-image]][daviddm-url]
[![NPM version][npm-image]][npm-url]

Truncate a url so that it doesn't appear so long visually.

Install
-------

```bash
npm i crop-url
```

Usage
-----

```js
const cropUrl = require('crop-url');

let url = cropUrl('http://www.foobar.com/abc/def/ghi/index.html', 26);
console.log(url) //=> 'foobar.com/…/index.html'

url = cropUrl('https://www.foobar.com/abc/def/ghi/jkl/', 26);
console.log(url) //=> 'foobar.com/abc/def/…/jkl/'

url = cropUrl('http://www.foobar.com/abc/def/ghi/jkl/', 1);
console.log(url) //=> 'foobar.com/…/jkl/'

url = cropUrl('http://www.foobar.com/search/?q=foo&page=bar', 35);
console.log(url) //=> 'foobar.com/search/?q=foo&page=bar'

url = cropUrl('http://www.foobar.com/search/?q=foo&page=bar', 20);
console.log(url) //=> 'foobar.com/…/?q=foo…'

url = cropUrl('http://www.foobar.com/search/?q=foo&page=bar', 12);
console.log(url) //=> 'foobar.com/…/?…'

url = cropUrl('http://www.foobar.com/foo-bar-foo-bar.html', 12);
console.log(url) //=> 'foobar.com/foo…'
```

Contributing
------------

Contributions are always welcome.

See [Contributing](CONTRIBUTING.md).

Developer
---------

* [William Belle](https://github.com/williambelle)

License
-------

The MIT License (MIT)

[npm-image]: https://img.shields.io/npm/v/crop-url.svg
[npm-url]: https://www.npmjs.com/package/crop-url
[github-actions-image]: https://github.com/williambelle/crop-url/workflows/Build/badge.svg
[github-actions-url]: https://github.com/williambelle/crop-url/actions
[coveralls-image]: https://coveralls.io/repos/github/williambelle/crop-url/badge.svg
[coveralls-url]: https://coveralls.io/github/williambelle/crop-url
[daviddm-image]: https://david-dm.org/williambelle/crop-url/status.svg
[daviddm-url]: https://david-dm.org/williambelle/crop-url
