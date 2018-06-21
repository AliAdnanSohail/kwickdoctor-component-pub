'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _styles3 = require('../styles');

var _styles4 = _interopRequireDefault(_styles3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButtonGroup = function (_Component) {
  _inherits(RadioButtonGroup, _Component);

  function RadioButtonGroup() {
    _classCallCheck(this, RadioButtonGroup);

    return _possibleConstructorReturn(this, (RadioButtonGroup.__proto__ || Object.getPrototypeOf(RadioButtonGroup)).apply(this, arguments));
  }

  _createClass(RadioButtonGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          containerClassName = _props.containerClassName,
          className = _props.className,
          id = _props.id,
          input = _props.input,
          label = _props.label,
          meta = _props.meta,
          name = _props.name,
          options = _props.options;


      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles3.fieldset.__scopedHash + ' jsx-' + _styles2.default.__scopedHash + ' ' + ((0, _classnames2.default)('form-field', containerClassName) || '')
        },
        _react2.default.createElement(
          'fieldset',
          {
            className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles3.fieldset.__scopedHash + ' jsx-' + _styles2.default.__scopedHash + ' ' + 'fieldset'
          },
          _react2.default.createElement(
            'legend',
            {
              className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles3.fieldset.__scopedHash + ' jsx-' + _styles2.default.__scopedHash + ' ' + 'legend'
            },
            label
          ),
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles3.fieldset.__scopedHash + ' jsx-' + _styles2.default.__scopedHash + ' ' + 'radio-buttons'
            },
            options.map(function (option) {
              var classes = (0, _classnames2.default)('radio-button', {
                'radio-button--active': input.value === option.value
              });

              var optionId = id + '-' + option.value;

              return _react2.default.createElement(
                'label',
                { htmlFor: optionId, key: option.value, className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles3.fieldset.__scopedHash + ' jsx-' + _styles2.default.__scopedHash + ' ' + (classes || '')
                },
                option.label || option.value,
                _react2.default.createElement('input', _extends({}, input, {
                  id: optionId,
                  onBlur: function onBlur() {},
                  onFocus: function onFocus() {},
                  type: 'radio',
                  value: option.value,
                  className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles3.fieldset.__scopedHash + ' jsx-' + _styles2.default.__scopedHash + ' ' + (className || '')
                }))
              );
            })
          )
        ),
        meta && meta.error && meta.touched ? _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles3.fieldset.__scopedHash + ' jsx-' + _styles2.default.__scopedHash + ' ' + 'error'
          },
          meta.error
        ) : undefined,
        _react2.default.createElement(_style2.default, {
          styleId: _styles4.default.__scopedHash,
          css: _styles4.default.__scoped
        }),
        _react2.default.createElement(_style2.default, {
          styleId: _styles3.label.__scopedHash,
          css: _styles3.label.__scoped
        }),
        _react2.default.createElement(_style2.default, {
          styleId: _styles3.error.__scopedHash,
          css: _styles3.error.__scoped
        }),
        _react2.default.createElement(_style2.default, {
          styleId: _styles3.fieldset.__scopedHash,
          css: _styles3.fieldset.__scoped
        }),
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__scopedHash,
          css: _styles2.default.__scoped
        })
      );
    }
  }]);

  return RadioButtonGroup;
}(_react.Component);

exports.default = RadioButtonGroup;


RadioButtonGroup.propTypes = {
  containerClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  id: _propTypes2.default.string.isRequired,
  input: _propTypes2.default.object,
  label: _propTypes2.default.string,
  meta: _propTypes2.default.object,
  name: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.array.isRequired
};

RadioButtonGroup.defaultProps = {
  containerClassName: '',
  className: '',
  input: { value: '' },
  label: '',
  meta: {}
};