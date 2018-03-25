'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextInput = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput(props) {
    _classCallCheck(this, TextInput);

    var _this = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props));

    _this.handleChange = function (event) {
      _this.setState({ value: event.target.value });
      _this.props.onChange(event);
    };

    _this.errorMessage = function () {
      var error = _this.props.error;


      return error && _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'input-error'
        },
        error,
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__scopedHash,
          css: _styles2.default.__scoped
        })
      );
    };

    _this.state = { value: props.value };
    return _this;
  }

  _createClass(TextInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          label = _props.label,
          name = _props.name,
          placeholder = _props.placeholder,
          error = _props.error,
          className = _props.className;


      var classes = (0, _classnames2.default)('text-input', className, { error: error });

      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _styles2.default.__scopedHash
        },
        _react2.default.createElement(
          'label',
          { htmlFor: id, className: 'jsx-' + _styles2.default.__scopedHash
          },
          label
        ),
        _react2.default.createElement('input', {
          id: id,
          name: name,
          onChange: this.handleChange,
          placeholder: placeholder,

          value: this.state.value,
          className: 'jsx-' + _styles2.default.__scopedHash + ' ' + (classes || '')
        }),
        this.errorMessage(),
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__scopedHash,
          css: _styles2.default.__scoped
        })
      );
    }
  }]);

  return TextInput;
}(_react.Component);

exports.default = TextInput;


TextInput.propTypes = {
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  onChange: _propTypes2.default.func.isRequired,
  label: _propTypes2.default.string,
  value: _propTypes2.default.string,
  error: _propTypes2.default.string,
  className: _propTypes2.default.string
};

TextInput.defaultProps = {
  name: '',
  placeholder: '',
  label: '',
  value: '',
  error: '',
  className: undefined
};