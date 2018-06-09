import moment from 'moment';

/**
 * Returns error message if the value is incorrect date and null if it's ok
 *
 * @param {String|moment|Date} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
const date = value =>
  (moment(value).isValid() ? undefined : 'This doesn’t look like a valid date. Check up, please!');

/**
 * Returns error message if the value is incorrect email address and null if it's ok
 *
 * @param {String} value Value of input for validation
 *
 * @return {String|undefined} [description]
 */
const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'This doesn’t look like a valid email address. Please check your email address.'
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
  (targetValue === value
    ? undefined
    : `This doesn’t look like value match with ${name}. Check up, please!`);

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
  (value && value.length > max
    ? `This field needs to be a maximum of ${max} characters. Please retype value of this field.`
    : undefined);

/**
 * Returns error message if the value must be min characters or more
 *
 * @param {Number} min Min length of value
 *
 * @param {String|undefined} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
const minLength = min => value =>
  (value && value.length < min
    ? `This field needs to be a minimum of ${min} characters. Please retype value of this field.`
    : undefined);

/**
 * Returns error message if the value isn't a number
 *
 * @param {Number} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
const number = value =>
  (value && Number.isNaN(Number(value))
    ? 'This doesn’t look like a valid number. Check up, please!'
    : undefined);

/**
 * Returns error message if the value is empty and null if it's ok
 *
 * @param {String|Number} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
const required = (value) => {
  if (typeof value === 'object') {
    return value && Object.keys(value).length > 0
      ? undefined
      : 'This field is required. Please complete this field.';
  }

  return value ? undefined : 'This field is required. Please complete this field.';
};

export default {
  date,
  email,
  equals,
  maxLength,
  minLength,
  number,
  required,
};
