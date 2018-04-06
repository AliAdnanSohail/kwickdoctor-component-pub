'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minLength = undefined;

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
  return (0, _moment2.default)(value).isValid() ? undefined : 'Value is not valid date.';
};

/**
 * Returns error message if the value is incorrect email address and null if it's ok
 *
 * @param {String} value Value of input for validation
 *
 * @return {String|undefined} [description]
 */
var email = function email(value) {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
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
var equals = function equals(targetValue) {
  return function (value) {
    return targetValue === value ? undefined : 'Invalid email address';
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
    return value && value.length > max ? 'Must be ' + max + ' characters or less' : undefined;
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
var minLength = exports.minLength = function minLength(min) {
  return function (value) {
    return value && value.length < min ? 'Must be ' + min + ' characters or more' : undefined;
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
  return value && Number.isNaN(Number(value)) ? 'Must be a number' : undefined;
};

/**
 * Returns error message if the value is empty and null if it's ok
 *
 * @param {String|Number} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
var required = function required(value) {
  return value ? undefined : 'Required';
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