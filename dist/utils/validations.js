'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minLength = undefined;

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns error message if value is incorrect email address and null if it's ok
 *
 * @param {String} value Value of input for validation
 *
 * @return {String|undefined} [description]
 */
var email = function email(value) {
  return _validator2.default.isEmail(value) ? undefined : value + ' is not a valid email.';
};

/**
 * Returns error message if value must be max characters or less
 *
 * @param {Number} max Max length of value
 *
 * @param {String|undefined} value Value of input for validation
 *
 * @return {String|undefined} [description]
 */
var maxLength = function maxLength(max) {
  return function (value) {
    return value && value.length > max ? 'Must be ' + max + ' characters or less' : undefined;
  };
};

/**
 * Returns error message if value must be min characters or more
 *
 * @param {Number} min Min length of value
 *
 * @param {String|undefined} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
var minLength = exports.minLength = function minLength(min) {
  return function (value) {
    return value && value.length < min ? 'Must be ' + min + ' characters or more' : undefined;
  };
};

/**
 * Returns error message if value isn't a number
 *
 * @param {Number} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
var number = function number(value) {
  return value && _validator2.default.isNumeric(value) ? 'Must be a number' : undefined;
};

/**
 * Returns error message if value is empty and null if it's ok
 *
 * @param {String|Number} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
var required = function required(value) {
  return _validator2.default.isEmpty(value) ? 'This filed is required' : undefined;
};

exports.default = {
  email: email,
  maxLength: maxLength,
  minLength: minLength,
  number: number,
  required: required
};