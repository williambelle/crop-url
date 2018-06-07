'use strict';

module.exports = function (url, length) {
  if (typeof url !== 'string') {
    throw new TypeError('Expected url to be a string');
  }

  if (typeof length !== 'number') {
    throw new TypeError('Expected length to be a number');
  }

  if (url.length <= length) {
    return url;
  }

  // Remove http:// or https://
  url = url.replace(/^https?:\/\//, '');

  // Remove www.
  url = url.replace(/^www\./, '');

  // Replace /foo/bar/foo/ with /…/…/…/
  var urlLength = url.length;
  while (urlLength > length) {
    url = url.replace(/(.*[^/])\/[^/…]+\/([^/])/, '$1/…/$2');
    if (url.length === urlLength) {
      break;
    } else {
      urlLength = url.length;
    }
  }
  // Replace /…/…/…/ with /…/
  url = url.replace(/\/…\/(?:…\/)+/, '/…/');

  // Replace all params except first
  var idx;
  while (url.length > length) {
    idx = url.lastIndexOf('&');
    if (idx === -1) {
      break;
    }
    url = url.substring(0, idx) + '…';
  }

  // Replace first param
  if (url.length > length) {
    idx = url.lastIndexOf('?');
    if (idx !== -1) {
      url = url.substring(0, idx) + '?…';
    }
  }

  // Replace endless hyphens
  while (url.length > length) {
    idx = url.lastIndexOf('-');
    if (idx === -1) {
      break;
    }
    url = url.substring(0, idx) + '…';
  }

  return url;
};
