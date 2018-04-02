import validator from 'validator';

const required = (value) => {
  if (!value.toString().trim().length) {
    return 'This filed is required';
  }

  return null;
};

const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`;
  }

  return null;
};

export default {
  required,
  email,
};
