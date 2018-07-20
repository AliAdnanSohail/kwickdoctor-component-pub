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

var _materialIconsReact = require('material-icons-react');

var _materialIconsReact2 = _interopRequireDefault(_materialIconsReact);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _Button = require('../../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvatarPicker = function (_Component) {
  _inherits(AvatarPicker, _Component);

  function AvatarPicker() {
    _classCallCheck(this, AvatarPicker);

    var _this = _possibleConstructorReturn(this, (AvatarPicker.__proto__ || Object.getPrototypeOf(AvatarPicker)).call(this));

    _this.handleChange = function (event) {
      var onChange = _this.props.input.onChange;


      _this.setState({ avatar: event.target.files[0] });

      onChange(event.target.files[0]);
    };

    _this.handleRemove = function (event) {
      var onChange = _this.props.input.onChange;


      event.preventDefault();

      _this.setState({ avatar: null });

      _this.input.value = null;

      onChange(null);
    };

    _this.state = { avatar: null };
    return _this;
  }

  _createClass(AvatarPicker, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var _props = this.props,
          baseURL = _props.baseURL,
          _props$input = _props.input,
          value = _props$input.value,
          onChange = _props$input.onChange;


      if (value && typeof value === 'string') {
        fetch('' + baseURL + value, { method: 'GET' }).then(function (response) {
          return response.blob();
        }).then(function (avatar) {
          _this2.setState({ avatar: avatar }, function () {
            onChange(_this2.state.avatar);
          });
        });
      }

      if (value && value instanceof Blob) {
        this.setState({ avatar: value }, function () {
          onChange(_this2.state.avatar);
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(props) {
      var _this3 = this;

      var _props2 = this.props,
          baseURL = _props2.baseURL,
          _props2$input = _props2.input,
          value = _props2$input.value,
          onChange = _props2$input.onChange;


      if (props.input.value !== value && value && typeof value === 'string') {
        fetch('' + baseURL + value, { method: 'GET' }).then(function (response) {
          return response.blob();
        }).then(function (avatar) {
          _this3.setState({ avatar: avatar }, function () {
            onChange(_this3.state.avatar);
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props3 = this.props,
          borderRadius = _props3.borderRadius,
          className = _props3.className,
          id = _props3.id,
          _props3$input = _props3.input,
          value = _props3$input.value,
          inputProps = _objectWithoutProperties(_props3$input, ['value']),
          size = _props3.size;

      var avatar = this.state.avatar;


      var styles = {
        backgroundImage: avatar ? 'url(' + URL.createObjectURL(avatar) + ')' : '',
        borderRadius: borderRadius + 'px',
        height: size + 'px',
        width: size + 'px'
      };

      var isSelected = avatar && (avatar instanceof Blob || avatar.name);

      return _react2.default.createElement(
        'label',
        {
          'aria-label': 'Edit image',

          htmlFor: id,
          style: styles,
          className: 'jsx-' + _styles.avatar.__scopedHash + ' jsx-' + _styles.fileInput.__scopedHash + ' ' + ((0, _classnames2.default)('avatar', className) || '')
        },
        isSelected && _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles.avatar.__scopedHash + ' jsx-' + _styles.fileInput.__scopedHash + ' ' + 'avatar__button'
          },
          _react2.default.createElement(_Button2.default, {
            onClick: this.handleRemove,
            icon: 'delete_outline',
            size: 'xsmall',
            rounded: true,
            danger: true
          })
        ),
        _react2.default.createElement('input', _extends({}, inputProps, {
          id: id,
          onBlur: function onBlur() {},
          onChange: this.handleChange,
          ref: function ref(input) {
            _this4.input = input;
          },
          type: 'file',
          className: 'jsx-' + _styles.avatar.__scopedHash + ' jsx-' + _styles.fileInput.__scopedHash + ' ' + 'file-input'
        })),
        !isSelected && _react2.default.createElement(_materialIconsReact2.default, { color: '#BBBCCD', icon: 'photo_camera', size: size / 2 }),
        _react2.default.createElement(_style2.default, {
          styleId: _styles.avatar.__scopedHash,
          css: _styles.avatar.__scoped
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
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  id: _propTypes2.default.string.isRequired,
  input: _propTypes2.default.object,
  size: _propTypes2.default.number
};

AvatarPicker.defaultProps = {
  borderRadius: 3,
  className: '',
  input: {
    onChange: function onChange() {},
    value: {}
  },
  size: 40
};