'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _base = require('grommet/components/icons/base');

var _renderer = require('../renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _renderer2.default)(function (input, label, _ref) {
  var className = _ref.className,
      id = _ref.id,
      name = _ref.name,
      options = _ref.options,
      placeholder = _ref.placeholder,
      type = _ref.type,
      value = _ref.value;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'div',
      { className: 'select-container' },
      _react2.default.createElement(
        'select',
        _extends({}, input, {
          className: className,
          id: id,
          name: name,
          type: type,
          placeholder: placeholder,
          value: value
        }),
        options.map(function (option) {
          return _react2.default.createElement(
            'option',
            { key: option.value, value: option.value },
            option.label || option.value
          );
        })
      ),
      _react2.default.createElement(_base.DownIcon, null)
    ),
    _react2.default.createElement(
      'style',
      null,
      _styles.textInput
    ),
    _react2.default.createElement(
      'style',
      null,
      _styles.selectContainer
    )
  );
});