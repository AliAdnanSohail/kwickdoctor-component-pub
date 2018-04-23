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

var _base = require('grommet/components/icons/base');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilePicker = function (_Component) {
  _inherits(FilePicker, _Component);

  function FilePicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FilePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FilePicker.__proto__ || Object.getPrototypeOf(FilePicker)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        var _event$target$files$ = event.target.files[0],
            name = _event$target$files$.name,
            type = _event$target$files$.type;


        reader.onload = function (e) {
          var blob = new Blob([e.target.result], { type: type });

          _this.props.onChange(blob, name);
        };

        reader.readAsArrayBuffer(event.target.files[0]);
      }
    }, _this.handleRemove = function (event) {
      event.stopPropagation();
      event.preventDefault();

      _this.input.value = '';
      _this.props.onChange();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FilePicker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          fileName = _props.fileName,
          name = _props.name,
          placeholder = _props.placeholder;


      var classes = (0, _classnames2.default)('upload-file', { 'upload-file--selected': fileName });

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: id, className: 'jsx-' + _styles2.default.__scopedHash + ' ' + (classes || '')
          },
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'upload-file__label-container'
            },
            fileName ? _react2.default.createElement(_base.DocumentIcon, null) : _react2.default.createElement(_base.UploadIcon, null),
            _react2.default.createElement(
              'div',
              {
                className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'upload-file__label'
              },
              fileName || placeholder
            )
          ),
          fileName && _react2.default.createElement(_.Button, {
            className: 'upload-file__close-icon',
            flat: true,
            icon: _react2.default.createElement(_base.CloseIcon, null),
            onClick: this.handleRemove,
            rounded: true,
            size: 'xs'
          }),
          _react2.default.createElement('input', {
            id: id,
            name: name,
            onChange: this.handleChange,
            type: 'file',
            ref: function ref(input) {
              _this2.input = input;
            },
            className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'input-file'
          })
        ),
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
  fileName: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  placeholder: _propTypes2.default.string
};

FilePicker.defaultProps = {
  fileName: '',
  placeholder: 'Upload file'
};