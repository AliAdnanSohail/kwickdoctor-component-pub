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

  if (result.length <= 4) {
    return result;
  }

  if (result.length <= 6) {
    const year = result.slice(0, 4);
    const month = result.slice(4, 6);

    return `${year}/${month <= 12 ? month : 12}`;
  }

  const year = result.slice(0, 4);
  const month = result.slice(4, 6);
  const day = result.slice(6, 8);

  return `${year}/${month <= 12 ? month : 12}/${day <= 31 ? day : 31}`;
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

  if (result.length <= 3) {
    if (result[0] === '+') {
      return result;
    }

    return `+${result}`;
  }

  if (result.length <= 8) {
    return `${result.slice(0, 4)}-${result.slice(4)}`;
  }

  return `${result.slice(0, 4)}-${result.slice(4, 8)}-${result.slice(8, 15)}`;
};

export default {
  date,
  phone,
};
