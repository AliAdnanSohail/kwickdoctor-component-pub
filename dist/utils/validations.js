'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns error message if the value is incorrect date and null if it's ok
 *
 * @param {String|moment|Date} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
var date = function date(value) {
  return (0, _moment2.default)(value).isValid() ? undefined : 'This doesn’t look like a valid date. Check up, please!';
};

/**
 * Returns error message if the value is incorrect email address and null if it's ok
 *
 * @param {String} value Value of input for validation
 *
 * @return {String|undefined} [description]
 */
var email = function email(value) {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'This doesn’t look like a valid email address. Please check your email address.' : undefined;
};

/**
 * Returns error message if the value is not equal to the specified
 *
 * @param {String|Number} targetValue Target value
 *
 * @param {String|Number} value Value of input for validation
 *
 * @return {String|undefined} [description]
 */
var equals = function equals(targetValue, name) {
  return function (value) {
    return targetValue === value ? undefined : 'This doesn\u2019t look like value match with ' + name + '. Check up, please!';
  };
};

/**
 * Returns error message if the value must be max characters or less
 *
 * @param {Number} max Max length of value
 *
 * @param {String|undefined} value Value of input for validation
 *
 * @return {String|undefined} [description]
 */
var maxLength = function maxLength(max) {
  return function (value) {
    return value && value.length > max ? 'This field needs to be a maximum of ' + max + ' characters. Please retype value of this field.' : undefined;
  };
};

/**
 * Returns error message if the value must be min characters or more
 *
 * @param {Number} min Min length of value
 *
 * @param {String|undefined} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
var minLength = function minLength(min) {
  return function (value) {
    return value && value.length < min ? 'This field needs to be a minimum of ' + min + ' characters. Please retype value of this field.' : undefined;
  };
};

/**
 * Returns error message if the value isn't a number
 *
 * @param {Number} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
var number = function number(value) {
  return value && Number.isNaN(Number(value)) ? 'This doesn’t look like a valid number. Check up, please!' : undefined;
};

/**
 * Returns error message if the value is empty and null if it's ok
 *
 * @param {String|Number} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
var required = function required(value) {
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    return Object.keys(value) > 0 ? undefined : 'This field is required. Please complete this field.';
  }

  return value ? undefined : 'This field is required. Please complete this field.';
};

exports.default = {
  date: date,
  email: email,
  equals: equals,
  maxLength: maxLength,
  minLength: minLength,
  number: number,
  required: required
};