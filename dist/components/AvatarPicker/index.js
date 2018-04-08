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

var _icons = require('grommet/components/icons');

var _styles = require('./styles');

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvatarPicker = function (_Component) {
  _inherits(AvatarPicker, _Component);

  function AvatarPicker(props) {
    _classCallCheck(this, AvatarPicker);

    var _this = _possibleConstructorReturn(this, (AvatarPicker.__proto__ || Object.getPrototypeOf(AvatarPicker)).call(this, props));

    _this.handleRemove = function (event) {
      _this.setState({ image: null });

      _this.fileUpload.value = null;

      _this.props.onChange(event);
    };

    _this.handleUpload = function (event) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this.setState({ image: e.target.result });
        };

        reader.readAsDataURL(event.target.files[0]);
      }

      _this.props.onChange(event);
    };

    _this.handleEdit = function (event) {
      _this.fileUpload.click();

      _this.props.onChange(event);
    };

    _this.state = { image: null };
    return _this;
  }

  _createClass(AvatarPicker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          name = _props.name;
      var image = this.state.image;


      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _styles.fileInput.__scopedHash + ' ' + 'avatar'
        },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles.fileInput.__scopedHash + ' ' + 'avatar__button'
          },
          image && _react2.default.createElement(_.Button, { onClick: this.handleRemove, icon: _react2.default.createElement(_icons.TrashIcon, null), size: 32, rounded: true, danger: true })
        ),
        _react2.default.createElement(
          'label',
          { htmlFor: id, 'aria-label': 'Edit image', className: 'jsx-' + _styles.fileInput.__scopedHash + ' ' + 'avatar__container'
          },
          _react2.default.createElement('input', {
            id: id,
            type: 'file',
            name: name,

            ref: function ref(input) {
              _this2.fileUpload = input;
            },
            onChange: this.handleUpload,
            className: 'jsx-' + _styles.fileInput.__scopedHash + ' ' + 'file-input'
          }),
          _react2.default.createElement(
            'div',
            { style: { backgroundImage: 'url(' + image + ')' }, className: 'jsx-' + _styles.fileInput.__scopedHash + ' ' + 'avatar__thumb'
            },
            !image && _react2.default.createElement(_icons.CameraIcon, null)
          )
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles.fileInput.__scopedHash + ' ' + 'avatar__button'
          },
          image && _react2.default.createElement(_.Button, { onClick: this.handleEdit, icon: _react2.default.createElement(_icons.EditIcon, null), size: 32, rounded: true })
        ),
        _react2.default.createElement(
          'style',
          null,
          _styles.avatar
        ),
        _react2.default.createElement(_style2.default, {
          styleId: _styles.fileInput.__scopedHash,
          css: _styles.fileInput.__scoped
        })
      );
    }
  }]);

  return AvatarPicker;
}(_react.Component);

exports.default = AvatarPicker;


AvatarPicker.propTypes = {
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string,
  onChange: _propTypes2.default.func.isRequired
};

AvatarPicker.defaultProps = {
  name: 'input-avatar'
};