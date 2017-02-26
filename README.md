Crop Url
========

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependency Status][gemnasium-image]][gemnasium-url]
[![NPM version][npm-image]][npm-url]

Truncate a url so that it doesn't appear so long visually

Install
-------

```bash
$ npm install crop-url --save
```

Usage
-----

```js
var cropUrl = require('crop-url');

cropUrl('http://www.foobar.com/abc/def/ghi/index.html', 26);
//=> 'foobar.com/…/index.html'

cropUrl('https://www.foobar.com/abc/def/ghi/jkl/', 26);
//=> 'foobar.com/abc/def/…/jkl/'

cropUrl('http://www.foobar.com/abc/def/ghi/jkl/', 1);
//=> 'foobar.com/…/jkl/'

cropUrl('http://www.foobar.com/search/?q=foo&page=bar', 35);
//=> 'foobar.com/search/?q=foo&page=bar'

cropUrl('http://www.foobar.com/search/?q=foo&page=bar', 20);
//=> 'foobar.com/…/?q=foo…'

cropUrl('http://www.foobar.com/search/?q=foo&page=bar', 12);
//=> foobar.com/…/?…

cropUrl('http://www.foobar.com/foo-bar-foo-bar.html', 12);
//=> 'foobar.com/foo…'
```

License
-------

The MIT License (MIT)

[npm-image]: https://img.shields.io/npm/v/crop-url.svg
[npm-url]: https://www.npmjs.com/package/crop-url
[travis-image]: https://travis-ci.org/williambelle/crop-url.svg?branch=master
[travis-url]: https://travis-ci.org/williambelle/crop-url
[coveralls-image]: https://coveralls.io/repos/github/williambelle/crop-url/badge.svg
[coveralls-url]: https://coveralls.io/github/williambelle/crop-url
[gemnasium-image]: https://gemnasium.com/badges/github.com/williambelle/crop-url.svg
[gemnasium-url]: https://gemnasium.com/github.com/williambelle/crop-url
