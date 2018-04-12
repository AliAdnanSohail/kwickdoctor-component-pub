'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _styles3 = require('../styles');

var _styles4 = _interopRequireDefault(_styles3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var input = _ref.input,
      meta = _ref.meta,
      label = _ref.label,
      rest = _objectWithoutProperties(_ref, ['input', 'meta', 'label']);

  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles3.fieldset.__scopedHash + ' jsx-' + _styles2.default.__scopedHash + ' ' + ((0, _classnames2.default)('form-field', rest.containerClassName) || '')
    },
    _react2.default.createElement(
      'fieldset',
      {
        className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles3.fieldset.__scopedHash + ' jsx-' + _styles2.default.__scopedHash
      },
      _react2.default.createElement(
        'legend',
        {
          className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles3.fieldset.__scopedHash + ' jsx-' + _styles2.default.__scopedHash
        },
        label
      ),
      rest.options.map(function (option) {
        var classes = (0, _classnames2.default)('radio-button', {
          'radio-button--active': rest.selected === option.value
        });

        return _react2.default.createElement(
          'label',
          { key: option.value, className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles3.fieldset.__scopedHash + ' jsx-' + _styles2.default.__scopedHash + ' ' + (classes || '')
          },
          option.label || option.value,
          _react2.default.createElement('input', _extends({}, input, {
            defaultChecked: rest.selected === option.value,
            name: rest.name,
            type: 'radio',
            value: option.value,
            className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles3.fieldset.__scopedHash + ' jsx-' + _styles2.default.__scopedHash + ' ' + (rest.className || '')
          }))
        );
      })
    ),
    meta && meta.error && meta.touched ? _react2.default.createElement(
      'div',
      {
        className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles3.fieldset.__scopedHash + ' jsx-' + _styles2.default.__scopedHash + ' ' + 'error'
      },
      meta.error
    ) : undefined,
    _react2.default.createElement(_style2.default, {
      styleId: _styles4.default.__scopedHash,
      css: _styles4.default.__scoped
    }),
    _react2.default.createElement(_style2.default, {
      styleId: _styles3.label.__scopedHash,
      css: _styles3.label.__scoped
    }),
    _react2.default.createElement(_style2.default, {
      styleId: _styles3.error.__scopedHash,
      css: _styles3.error.__scoped
    }),
    _react2.default.createElement(_style2.default, {
      styleId: _styles3.fieldset.__scopedHash,
      css: _styles3.fieldset.__scoped
    }),
    _react2.default.createElement(_style2.default, {
      styleId: _styles2.default.__scopedHash,
      css: _styles2.default.__scoped
    })
  );
};