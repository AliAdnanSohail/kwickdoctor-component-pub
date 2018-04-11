'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

  return pattern.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0; // eslint-disable-line no-bitwise
    var v = c === 'x' ? r : r & 0x3 | 0x8; // eslint-disable-line no-bitwise
    return v.toString(16);
  });
};