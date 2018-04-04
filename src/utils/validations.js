import validator from 'validator';
import moment from 'moment';
/**
 * Returns error message if value is empty and null if it's ok
 *
 * @param {String|Number} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
const required = (value) => {
  if (validator.isEmpty(value)) {
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
const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`;
  }

  return null;
};

/**
 * Returns error message if value is incorrect date and null if it's ok
 *
 * @param {String|moment|Date} value Value of input for validation
 *
 * @return {String|Null} [description]
 */
const date = (value) => {
  const momentDate = moment(value);
  if (!momentDate.isValid()) {
    return 'Value is not valid date.';
  }

  return null;
};

export default {
  required,
  email,
  date,
};
