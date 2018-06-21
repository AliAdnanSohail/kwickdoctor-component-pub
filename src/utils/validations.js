import moment from 'moment';

/**
 * Returns error message if the value is incorrect date and undefined if it's ok
 *
 * @param {String|moment|Date} value Value of input for validation
 *
 * @return {String|undefined} [description]
 */
const date = value =>
  (moment(value, 'DD-MM-YYYY').isValid()
    ? undefined
    : 'This doesn’t look like a valid date. Check up, please!');

/**
 * Returns error message if the value is incorrect email address and undefined if it's ok
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
 * Returns error message if file's type isn't compatible
 *
 * @param {Array} types Array of valid types
 *
 * @param {Object} value File for validation
 *
 * @return {String|Null} [description]
 */
const fileType = (types = []) => file =>
  (file && file.type && types.includes(file.type)
    ? undefined
    : `This file's type should be one of valid types (${types.join(', ')}).`);

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
 * @return {String|undefined} [description]
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
 * @return {String|undefined} [description]
 */
const number = value =>
  (value && Number.isNaN(Number(value))
    ? 'This doesn’t look like a valid number. Check up, please!'
    : undefined);

/**
 * Returns error message if the value is incorrect phone number and undefined if it's ok
 *
 * @param {String} value Value of input for validation
 *
 * @return {String|undefined} [description]
 */
const phone = value =>
  (value && !/^[+]?[(]?[0-9]{1,3}[)]?[-s.]?[0-9]{3,4}[-s.]?[0-9]{6,7}$/i.test(value)
    ? 'This doesn’t look like a valid phone number. Please check your phone number.'
    : undefined);

/**
 * Returns error message if the value is empty and undefined if it's ok
 *
 * @param {String|Number} value Value of input for validation
 *
 * @return {String|undefined} [description]
 */
const required = (value) => {
  if (Array.isArray(value)) {
    return value.length > 0 ? undefined : 'This field is required. Please complete the field.';
  }

  return value ? undefined : 'This field is required. Please complete the field.';
};

export default {
  date,
  email,
  equals,
  fileType,
  maxLength,
  minLength,
  number,
  phone,
  required,
};
