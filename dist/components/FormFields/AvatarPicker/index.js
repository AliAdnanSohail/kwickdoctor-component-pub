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

var _icons = require('grommet/components/icons');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvatarPicker = function (_Component) {
  _inherits(AvatarPicker, _Component);

  function AvatarPicker(props) {
    _classCallCheck(this, AvatarPicker);

    var _this = _possibleConstructorReturn(this, (AvatarPicker.__proto__ || Object.getPrototypeOf(AvatarPicker)).call(this, props));

    _this.handleChange = function (event) {
      var input = _this.props.input;


      _this.setState({ avatar: event.target.files[0] });

      input.onChange(event.target.files[0]);
    };

    _this.handleRemove = function (event) {
      var input = _this.props.input;


      event.preventDefault();

      input.onChange(null);
      _this.setState({ avatar: '' });
    };

    _this.state = { avatar: {} };
    return _this;
  }

  _createClass(AvatarPicker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          borderRadius = _props.borderRadius,
          containerClassName = _props.containerClassName,
          id = _props.id,
          _props$input = _props.input,
          value = _props$input.value,
          inputProps = _objectWithoutProperties(_props$input, ['value']),
          resetKey = _props.resetKey,
          size = _props.size;

      var src = 'none';

      if (this.state.avatar.name) {
        src = URL.createObjectURL(this.state.avatar);
      }

      var avatarContainer = (0, _classnames2.default)('avatar', containerClassName);

      var avatarStyle = {
        backgroundImage: 'url(' + src + ')',
        borderRadius: borderRadius + 'px',
        height: size + 'px',
        width: size + 'px'
      };

      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _styles.avatarCircle.__scopedHash + ' jsx-' + _styles.fileInput.__scopedHash + ' ' + (avatarContainer || '')
        },
        _react2.default.createElement(
          'label',
          { htmlFor: id, 'aria-label': 'Edit image', className: 'jsx-' + _styles.avatarCircle.__scopedHash + ' jsx-' + _styles.fileInput.__scopedHash + ' ' + 'avatar__container'
          },
          _react2.default.createElement('input', _extends({}, inputProps, {
            id: id,
            key: resetKey,
            onBlur: function onBlur() {},
            onChange: this.handleChange,
            ref: function ref(input) {
              _this2.input = input;
            },
            type: 'file',
            className: 'jsx-' + _styles.avatarCircle.__scopedHash + ' jsx-' + _styles.fileInput.__scopedHash + ' ' + 'file-input'
          })),
          _react2.default.createElement(
            'div',
            { style: avatarStyle, className: 'jsx-' + _styles.avatarCircle.__scopedHash + ' jsx-' + _styles.fileInput.__scopedHash + ' ' + 'avatar__thumb'
            },
            !this.state.avatar.name && _react2.default.createElement(_icons.CameraIcon, null),
            _react2.default.createElement(
              'div',
              {
                className: 'jsx-' + _styles.avatarCircle.__scopedHash + ' jsx-' + _styles.fileInput.__scopedHash + ' ' + 'avatar__button--remove'
              },
              this.state.avatar.name && _react2.default.createElement(_.Button, { onClick: this.handleRemove, icon: _react2.default.createElement(_icons.TrashIcon, null), size: 'xs', rounded: true, danger: true })
            )
          )
        ),
        _react2.default.createElement(_style2.default, {
          styleId: _styles.avatarCircle.__scopedHash,
          css: _styles.avatarCircle.__scoped
        }),
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
  borderRadius: _propTypes2.default.number,
  containerClassName: _propTypes2.default.string,
  id: _propTypes2.default.string.isRequired,
  input: _propTypes2.default.object,
  size: _propTypes2.default.number
};

AvatarPicker.defaultProps = {
  borderRadius: 3,
  containerClassName: '',
  input: {
    onChange: function onChange() {},
    value: {}
  },
  size: 40
};