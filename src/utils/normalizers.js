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

    return `${day <= 31 ? day : 31}/${month <= 12 ? month : 12}`;
  }

  const day = result.slice(0, 2);
  const month = result.slice(2, 4);
  const year = result.slice(4, 8);
  
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  
  if (year >= currentYear) {
    const currentMonth = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const currentDay = ('0' + currentDate.getDate()).slice(-2);

    const monthResult = month <= currentMonth ? month : currentMonth;
    const numberOfDay = new Date(currentYear, monthResult, 0).getDate();
    const dayResult = month >= currentMonth && day >= currentDay ? currentDay : day <= numberOfDay ? day : numberOfDay;

    return `${dayResult}/${monthResult}/${currentYear}`;
  }

  const numberOfDay = year.length === 4 ? new Date(year, month, 0).getDate() : 31;
  return `${day <= numberOfDay ? day : numberOfDay}/${month <= 12 ? month : 12}/${year}`;
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
