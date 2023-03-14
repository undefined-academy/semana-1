"use strict";

var x = [];
var y = null;
var data = Object.prototype.toString.call(y);
console.log(data);

try {
  var _data = Object.prototype.toString.call(y);

  console.log('object');
} catch (err) {
  console.error('not object');
}