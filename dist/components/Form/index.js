'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactValidation = require('react-validation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _reactValidation.form)(function (_ref) {
  var getValues = _ref.getValues,
      validate = _ref.validate,
      showError = _ref.showError,
      hideError = _ref.hideError,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['getValues', 'validate', 'showError', 'hideError', 'children']);

  return _react2.default.createElement(
    'form',
    props,
    children
  );
});