'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _renderer2.default)(function (input, label, _ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'select',
      input,
      children
    ),
    _react2.default.createElement(
      'style',
      null,
      _styles.textInput
    )
  );
});