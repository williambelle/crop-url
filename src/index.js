'use strict';

module.exports = function(url, length) {

  if (typeof url !== 'string') {
    throw new TypeError('Expected url to be a string');
  }

  if (typeof length !== 'number') {
    throw new TypeError('Expected length to be a number');
  }

  if (url.length <= length) {
    return url;
  }

  // Replace /foo/bar/foo/ with /…/…/…/
  var urlLength = url.length;
  while (urlLength > length) {
    url = url.replace(/(.*[^\/])\/[^\/…]+\/([^\/])/, '$1/…/$2');
    if (url.length === urlLength) {
      break;
    } else {
      urlLength = url.length;
    }
  }
  // Replace /…/…/…/ with /…/
  url = url.replace(/\/…\/(?:…\/)+/, '/…/');

  return url;
};