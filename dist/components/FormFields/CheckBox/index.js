'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _materialIconsReact = require('material-icons-react');

var _materialIconsReact2 = _interopRequireDefault(_materialIconsReact);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _styles3 = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckBox = function CheckBox(_ref) {
  var className = _ref.className,
      id = _ref.id,
      input = _ref.input,
      label = _ref.label,
      meta = _ref.meta;
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-' + _styles2.default.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' ' + ((0, _classnames2.default)('checkbox', className) || '')
    },
    _react2.default.createElement(
      'label',
      { htmlFor: id, className: 'jsx-' + _styles2.default.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' ' + ((0, _classnames2.default)('label', input.value && 'checked') || '')
      },
      input.value && _react2.default.createElement(_materialIconsReact2.default, { icon: 'check', color: '#ffffff', size: 20 }),
      label
    ),
    _react2.default.createElement('input', _extends({}, input, { id: id, checked: input.value, type: 'checkbox', className: 'jsx-' + _styles2.default.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' ' + (input.className != null && input.className || '')
    })),
    meta && meta.error && meta.touched && _react2.default.createElement(
      'div',
      {
        className: 'jsx-' + _styles2.default.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' ' + 'error'
      },
      meta.error
    ),
    _react2.default.createElement(_style2.default, {
      styleId: _styles2.default.__scopedHash,
      css: _styles2.default.__scoped
    }),
    _react2.default.createElement(_style2.default, {
      styleId: _styles3.error.__scopedHash,
      css: _styles3.error.__scoped
    })
  );
};

CheckBox.propTypes = {
  className: _propTypes2.default.string,
  id: _propTypes2.default.string.isRequired,
  input: _propTypes2.default.object,
  label: _propTypes2.default.string,
  meta: _propTypes2.default.object,
  name: _propTypes2.default.string
};

CheckBox.defaultProps = {
  className: undefined,
  input: {
    value: false
  },
  label: undefined,
  meta: {},
  name: undefined
};

exports.default = CheckBox;