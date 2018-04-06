import validator from 'validator';
import moment from 'moment';

/**
 * Returns error message if value is incorrect date and null if it's ok
 *
 * @param {String|moment|Date} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
const date = value => (moment(value).isValid() ? undefined : 'Value is not valid date.');

/**
 * Returns error message if value is incorrect email address and null if it's ok
 *
 * @param {String} value Value of input for validation
 *
 * @return {String|undefined} [description]
 */
const email = value => (validator.isEmail(value) ? undefined : `${value} is not a valid email.`);

/**
 * Returns error message if value must be max characters or less
 *
 * @param {Number} max Max length of value
 *
 * @param {String|undefined} value Value of input for validation
 *
 * @return {String|undefined} [description]
 */
const maxLength = max => value =>
  (value && value.length > max ? `Must be ${max} characters or less` : undefined);

/**
 * Returns error message if value must be min characters or more
 *
 * @param {Number} min Min length of value
 *
 * @param {String|undefined} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
export const minLength = min => value =>
  (value && value.length < min ? `Must be ${min} characters or more` : undefined);

/**
 * Returns error message if value isn't a number
 *
 * @param {Number} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
const number = value => (value && validator.isNumeric(value) ? 'Must be a number' : undefined);

/**
 * Returns error message if value is empty and null if it's ok
 *
 * @param {String|Number} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
const required = value => (validator.isEmpty(value) ? 'This filed is required' : undefined);

export default {
  date,
  email,
  maxLength,
  minLength,
  number,
  required,
};
