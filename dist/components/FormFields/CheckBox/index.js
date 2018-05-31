'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _renderer = require('../renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _renderer2.default)(function (input, label, _ref) {
  var className = _ref.className,
      defaultValue = _ref.defaultValue,
      id = _ref.id,
      name = _ref.name,
      placeholder = _ref.placeholder,
      type = _ref.type,
      value = _ref.value,
      defaultChecked = _ref.defaultChecked;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement('input', _extends({}, input, {
      className: className,
      id: id,
      name: name,
      placeholder: placeholder,
      type: type,
      value: value,
      defaultValue: defaultValue,
      defaultChecked: defaultChecked
    })),
    _react2.default.createElement(
      'style',
      null,
      _styles.textInput
    )
  );
});