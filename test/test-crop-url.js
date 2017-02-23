'use strict';

var should  = require('chai').should();
var cropUrl = require('../src/index.js');

describe('cropUrl', function(){
  it('should check input type', function(){
    (function(){
      cropUrl(51,69);
    }).should.throw(TypeError, 'Expected url to be a string');
    (function(){
      cropUrl('foobar',69);
    }).should.not.throw(TypeError, 'Expected url to be a string');

    (function(){
      cropUrl('foobar', undefined);
    }).should.throw(TypeError, 'Expected length to be a number');
    (function(){
      cropUrl('foobar', 69);
    }).should.not.throw(TypeError, 'Expected length to be a number');
  });

  it('should crop url', function(){
    cropUrl('http://www.foobar.com/abc/def/ghi/index.html', 26).should.equal(
      'http://www.foobar.com/…/index.html'
    );
    cropUrl('http://www.foobar.com/abc/def/ghi/jkl/', 26).should.equal(
      'http://www.foobar.com/…/jkl/'
    );
    cropUrl('http://www.foobar.com/abc/def/ghi/jkl/', 1).should.equal(
      'http://www.foobar.com/…/jkl/'
    );
  });
});