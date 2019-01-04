/**
 * Returns normalized date
 *
 * @param {String} value Value of input for normalizing
 *
 * @return {String|undefined} [description]
 */
const date = (value) => {
  if (!value) {
    return value;
  }

  const result = value.replace(/[^\d]/g, '');

  if (result.length <= 2) {
    return result;
  }

  if (result.length <= 4) {
    const day = result.slice(0, 2);
    const month = result.slice(2, 4);

    return `${day}/${month}`;
  }

  const day = result.slice(0, 2);
  const month = result.slice(2, 4);
  const year = result.slice(4, 8);

  return `${day}/${month}/${year}`;
};

/**
 * Returns normalized phone number
 *
 * @param {String} value Value of input for normalizing
 *
 * @return {String|undefined} [description]
 */
const phone = (value) => {
  if (!value) {
    return value;
  }

  const result = value.replace(/[^(\d|+)]/g, '');

  if (result.length <= 4) {
    if (result[0] === '+') {
      return result;
    }

    return `+92${result}`;
  }

  if (result.length <= 8) {
    return `${result.slice(0, 4)}-${result.slice(4)}`;
  }

  return `${result.slice(0, 4)}-${result.slice(4, 8)}-${result.slice(8, 13)}`;
};

export default {
  date,
  phone,
};
