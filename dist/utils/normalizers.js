'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Returns normalized date
 *
 * @param {String} value Value of input for normalizing
 *
 * @return {String|undefined} [description]
 */
var date = function date(value) {
  if (!value) {
    return value;
  }

  var result = value.replace(/[^\d]/g, '');

  if (result.length <= 2) {
    return result;
  }

  if (result.length <= 4) {
    var _day = result.slice(0, 2);
    var _month = result.slice(2, 4);

    return (_day <= 31 ? _day : 31) + '/' + (_month <= 12 ? _month : 12);
  }

  var day = result.slice(0, 2);
  var month = result.slice(2, 4);
  var year = result.slice(4, 8);

  if (moment(value, 'DD/MM/YYYY').isAfter(moment())) {
    return moment().format('DD/MM/YYYY');
  }

  var numberOfDay = year.length === 4 ? moment(year + '-' + month, 'YYYY-MM').daysInMonth() : 31;
  return (day <= numberOfDay ? day : numberOfDay) + '/' + (month <= 12 ? month : 12) + '/' + year;
};

/**
 * Returns normalized phone number
 *
 * @param {String} value Value of input for normalizing
 *
 * @return {String|undefined} [description]
 */
var phone = function phone(value) {
  if (!value) {
    return value;
  }

  var result = value.replace(/[^(\d|+)]/g, '');

  if (result.length <= 4) {
    if (result[0] === '+') {
      return result;
    }

    return '+' + result;
  }

  if (result.length <= 8) {
    return result.slice(0, 4) + '-' + result.slice(4);
  }

  return result.slice(0, 4) + '-' + result.slice(4, 8) + '-' + result.slice(8, 15);
};

exports.default = {
  date: date,
  phone: phone
};