'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns error message if value is empty and null if it's ok
 *
 * @param {String|Number} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
var required = function required(value) {
  if (_validator2.default.isEmpty(value)) {
    return 'This filed is required';
  }

  return null;
};

/**
 * Returns error message if value is incorrect email address and null if it's ok
 *
 * @param {String} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
var email = function email(value) {
  if (!_validator2.default.isEmail(value)) {
    return value + ' is not a valid email.';
  }

  return null;
};

exports.default = {
  required: required,
  email: email
};