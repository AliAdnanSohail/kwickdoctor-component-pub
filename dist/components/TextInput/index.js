'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _TextArea = require('./TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextInput = (_temp = _class = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput(props) {
    _classCallCheck(this, TextInput);

    var _this = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = { value: props.value };
    return _this;
  }

  _createClass(TextInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          label = _props.label,
          containerClassName = _props.containerClassName;


      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _styles2.default.__scopedHash + ' jsx-' + _styles.label.__scopedHash + ' ' + ((0, _classnames2.default)('form-field', containerClassName) || '')
        },
        _react2.default.createElement(
          'label',
          { htmlFor: id, className: 'jsx-' + _styles2.default.__scopedHash + ' jsx-' + _styles.label.__scopedHash
          },
          label
        ),
        this.inputElement(),
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__scopedHash,
          css: _styles2.default.__scoped
        }),
        _react2.default.createElement(_style2.default, {
          styleId: _styles.label.__scopedHash,
          css: _styles.label.__scoped
        })
      );
    }
  }]);

  return TextInput;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleChange = function (event) {
    _this2.setState({ value: event.target.value });
    _this2.props.onChange(event);
  };

  this.inputElement = function () {
    var _props2 = _this2.props,
        id = _props2.id,
        name = _props2.name,
        placeholder = _props2.placeholder,
        type = _props2.type,
        className = _props2.className,
        multiline = _props2.multiline,
        validations = _props2.validations;
    var value = _this2.state.value;


    var props = {
      id: id,
      name: name,
      type: type,
      value: value,
      placeholder: placeholder,
      validations: validations,
      className: className,
      onChange: _this2.handleChange
    };

    return multiline ? _react2.default.createElement(_TextArea2.default, _extends({ name: name }, props)) : _react2.default.createElement(_Input2.default, _extends({ name: name }, props));
  };
}, _temp);
exports.default = TextInput;


TextInput.propTypes = {
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string,
  label: _propTypes2.default.string,
  value: _propTypes2.default.string,
  type: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  className: _propTypes2.default.string,
  multiline: _propTypes2.default.bool,
  validations: _propTypes2.default.array,
  onChange: _propTypes2.default.func.isRequired
};

TextInput.defaultProps = {
  name: '',
  label: '',
  value: '',
  type: 'text',
  placeholder: '',
  className: undefined,
  multiline: false,
  validations: []
};