'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialIconsReact = require('material-icons-react');

var _materialIconsReact2 = _interopRequireDefault(_materialIconsReact);

var _renderer = require('../renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _styles3 = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _renderer2.default)(function (input, label, _ref) {
  var className = _ref.className,
      id = _ref.id,
      name = _ref.name,
      options = _ref.options,
      placeholder = _ref.placeholder;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'select-container'
      },
      _react2.default.createElement(
        'select',
        _extends({}, input, { id: id, name: name, placeholder: placeholder, className: 'jsx-' + _styles2.default.__scopedHash + ' ' + (className || '')
        }),
        options.map(function (option) {
          return _react2.default.createElement(
            'option',
            { key: option.value, value: option.value, className: 'jsx-' + _styles2.default.__scopedHash
            },
            option.label || option.value
          );
        })
      ),
      _react2.default.createElement(_materialIconsReact2.default, { icon: 'expand_more' })
    ),
    _react2.default.createElement(
      'style',
      null,
      _styles3.textInput
    ),
    _react2.default.createElement(_style2.default, {
      styleId: _styles2.default.__scopedHash,
      css: _styles2.default.__scoped
    })
  );
});