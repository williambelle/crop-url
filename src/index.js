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

};
