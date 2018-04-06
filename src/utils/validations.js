import moment from 'moment';

/**
 * Returns error message if the value is incorrect date and null if it's ok
 *
 * @param {String|moment|Date} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
const date = value => (moment(value).isValid() ? undefined : 'Value is not valid date.');

/**
 * Returns error message if the value is incorrect email address and null if it's ok
 *
 * @param {String} value Value of input for validation
 *
 * @return {String|undefined} [description]
 */
const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined);

/**
 * Returns error message if the value is not equal to the specified
 *
 * @param {String|Number} targetValue Target value
 *
 * @param {String|Number} value Value of input for validation
 *
 * @return {String|undefined} [description]
 */
const equals = (targetValue, name) => value =>
  (targetValue === value ? undefined : `Must be the same with ${name}`);

/**
 * Returns error message if the value must be max characters or less
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
 * Returns error message if the value must be min characters or more
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
 * Returns error message if the value isn't a number
 *
 * @param {Number} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
const number = value => (value && Number.isNaN(Number(value)) ? 'Must be a number' : undefined);

/**
 * Returns error message if the value is empty and null if it's ok
 *
 * @param {String|Number} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
const required = value => (value ? undefined : 'Required');

export default {
  date,
  email,
  equals,
  maxLength,
  minLength,
  number,
  required,
};
