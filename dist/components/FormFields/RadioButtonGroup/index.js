'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var input = _ref.input,
      meta = _ref.meta,
      label = _ref.label,
      rest = _objectWithoutProperties(_ref, ['input', 'meta', 'label']);

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('form-field', rest.containerClassName) },
    _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        'fieldset',
        null,
        _react2.default.createElement(
          'legend',
          null,
          label
        ),
        rest.options.map(function (option) {
          var classes = (0, _classnames2.default)('radio-button', {
            'radio-button--active': rest.selected === option.value
          });

          return _react2.default.createElement(
            'label',
            { key: option.value, className: classes },
            option.label || option.value,
            _react2.default.createElement('input', _extends({}, input, {
              name: rest.name,
              type: 'radio',
              value: option.value,
              defaultChecked: rest.selected === option.value,
              onChange: rest.onChange
            }))
          );
        })
      ),
      _react2.default.createElement(
        'style',
        null,
        _styles.radioButton
      ),
      _react2.default.createElement(
        'style',
        null,
        _styles.fieldset
      )
    ),
    meta && meta.error && meta.touched ? _react2.default.createElement(
      'div',
      { className: 'error' },
      meta.error
    ) : undefined,
    _react2.default.createElement(
      'style',
      null,
      _styles2.default
    ),
    _react2.default.createElement(
      'style',
      null,
      _styles.label
    ),
    _react2.default.createElement(
      'style',
      null,
      _styles.error
    )
  );
};