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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _base = require('grommet/components/icons/base');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilePicker = function (_Component) {
  _inherits(FilePicker, _Component);

  function FilePicker(props) {
    _classCallCheck(this, FilePicker);

    var _this = _possibleConstructorReturn(this, (FilePicker.__proto__ || Object.getPrototypeOf(FilePicker)).call(this, props));

    _this.handleChange = function (event) {
      var input = _this.props.input;


      var file = event.target.files[0];

      input.onChange(file);

      _this.setState({ filename: file.name });
    };

    _this.handleRemove = function (event) {
      event.preventDefault();

      _this.input.value = null;

      _this.props.input.onChange(null);
    };

    _this.state = { filename: '' };
    return _this;
  }

  _createClass(FilePicker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          _props$input = _props.input,
          value = _props$input.value,
          inputProps = _objectWithoutProperties(_props$input, ['value']),
          placeholder = _props.placeholder,
          resetKey = _props.resetKey;

      var filename = this.state.filename;


      var classes = (0, _classnames2.default)('upload-file', { 'upload-file--selected': value });

      return _react2.default.createElement(
        'label',
        { htmlFor: id, className: 'jsx-' + _styles2.default.__scopedHash + ' ' + (classes || '')
        },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'upload-file__label-container'
          },
          value ? _react2.default.createElement(_base.DocumentIcon, null) : _react2.default.createElement(_base.UploadIcon, null),
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'upload-file__label'
            },
            filename || placeholder
          )
        ),
        value && _react2.default.createElement(_.Button, {
          className: 'upload-file__close-icon',
          flat: true,
          icon: _react2.default.createElement(_base.CloseIcon, null),
          onClick: this.handleRemove,
          rounded: true,
          size: 'xs'
        }),
        _react2.default.createElement('input', _extends({}, inputProps, {
          id: id,
          key: resetKey,
          onBlur: function onBlur() {},
          onChange: this.handleChange,
          ref: function ref(input) {
            _this2.input = input;
          },
          type: 'file',
          className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'input-file'
        })),
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__scopedHash,
          css: _styles2.default.__scoped
        })
      );
    }
  }]);

  return FilePicker;
}(_react.Component);

exports.default = FilePicker;


FilePicker.propTypes = {
  id: _propTypes2.default.string.isRequired,
  input: _propTypes2.default.object,
  placeholder: _propTypes2.default.string
};

FilePicker.defaultProps = {
  input: {
    onChange: function onChange() {},
    value: ''
  },
  placeholder: 'Upload file'
};