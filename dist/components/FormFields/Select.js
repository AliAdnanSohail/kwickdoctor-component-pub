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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _renderer2.default)(function (input, label, _ref) {
  var rest = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'select',
      input,
      rest.children
    ),
    _react2.default.createElement(
      'style',
      null,
      _styles.textInput
    )
  );
});