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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (render) {
  return function (_ref) {
    var input = _ref.input,
        meta = _ref.meta,
        label = _ref.label,
        rest = _objectWithoutProperties(_ref, ['input', 'meta', 'label']);

    return _react2.default.createElement(
      'div',
      {
        className: 'jsx-' + _styles2.default.__scopedHash + ' jsx-' + _styles.label.__scopedHash + ' jsx-' + _styles.error.__scopedHash + ' ' + ((0, _classnames2.default)('form-field', rest.containerClassName) || '')
      },
      _react2.default.createElement(
        'label',
        { htmlFor: rest.id, className: 'jsx-' + _styles2.default.__scopedHash + ' jsx-' + _styles.label.__scopedHash + ' jsx-' + _styles.error.__scopedHash
        },
        label
      ),
      render(input, label, _extends({}, rest, {
        className: (0, _classnames2.default)({
          invalid: meta && meta.error && meta.touched,
          active: meta && meta.active
        })
      })),
      meta && meta.error && meta.touched ? _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _styles2.default.__scopedHash + ' jsx-' + _styles.label.__scopedHash + ' jsx-' + _styles.error.__scopedHash + ' ' + 'error'
        },
        meta.error
      ) : undefined,
      _react2.default.createElement(_style2.default, {
        styleId: _styles2.default.__scopedHash,
        css: _styles2.default.__scoped
      }),
      _react2.default.createElement(_style2.default, {
        styleId: _styles.label.__scopedHash,
        css: _styles.label.__scoped
      }),
      _react2.default.createElement(_style2.default, {
        styleId: _styles.error.__scopedHash,
        css: _styles.error.__scoped
      })
    );
  };
};