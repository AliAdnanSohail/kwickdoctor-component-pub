'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactValidation = require('react-validation');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _reactValidation.control)(function (_ref) {
  var error = _ref.error,
      isChanged = _ref.isChanged,
      isUsed = _ref.isUsed,
      props = _objectWithoutProperties(_ref, ['error', 'isChanged', 'isUsed']);

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement('input', _extends({}, props, {
      className: 'jsx-' + _styles.error.__scopedHash + ' ' + ((0, _classnames3.default)(props.className, _defineProperty({}, isChanged && isUsed && error, error)) || '')
    })),
    isChanged && isUsed && error && _react2.default.createElement(
      'div',
      {
        className: 'jsx-' + _styles.error.__scopedHash + ' ' + 'input-error'
      },
      error
    ),
    _react2.default.createElement(
      'style',
      null,
      _styles.textInput
    ),
    _react2.default.createElement(_style2.default, {
      styleId: _styles.error.__scopedHash,
      css: _styles.error.__scoped
    })
  );
});