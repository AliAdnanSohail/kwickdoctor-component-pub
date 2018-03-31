'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var required = function required(value) {
  return !value.toString().trim().length && 'This filed is required';
};

var email = function email(value) {
  return !_validator2.default.isEmail(value) && value + ' is not a valid email.';
};

exports.default = {
  required: required,
  email: email
};