'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var required = function required(value) {
  if (!value.toString().trim().length) {
    return 'This filed is required';
  }

  return null;
};

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