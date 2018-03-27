import validator from 'validator';

const required = value => !value.toString().trim().length && 'This filed is required';

const email = value => !validator.isEmail(value) && `${value} is not a valid email.`;

export default {
  required,
  email,
};
