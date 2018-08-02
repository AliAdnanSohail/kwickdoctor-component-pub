'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _styles3 = require('../styles');

var _styles4 = _interopRequireDefault(_styles3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          containerClassName = _props.containerClassName,
          id = _props.id,
          input = _props.input,
          label = _props.label,
          meta = _props.meta,
          options = _props.options,
          placeholder = _props.placeholder;


      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles2.default.__scopedHash + ' ' + ((0, _classnames2.default)('form-field', containerClassName) || '')
        },
        _react2.default.createElement(
          'label',
          { htmlFor: id, className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles2.default.__scopedHash
          },
          label
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles2.default.__scopedHash + ' ' + 'select-container'
          },
          _react2.default.createElement(
            'select',
            _extends({}, input, {
              id: id,
              placeholder: placeholder,
              className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles2.default.__scopedHash + ' ' + ((0, _classnames2.default)({
                invalid: meta && meta.error && meta.touched,
                active: meta && meta.active
              }) || '')
            }),
            options.map(function (option) {
              return _react2.default.createElement(
                'option',
                { key: option.value, value: option.value, className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles2.default.__scopedHash
                },
                option.label || option.value
              );
            })
          ),
          _react2.default.createElement(
            'i',
            {
              className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles2.default.__scopedHash + ' ' + 'material-icons'
            },
            'expand_more'
          )
        ),
        meta && meta.error && meta.touched && _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' jsx-' + _styles2.default.__scopedHash + ' ' + 'error'
          },
          meta.error
        ),
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
    }
  }]);

  return Input;
}(_react.Component);

exports.default = Input;