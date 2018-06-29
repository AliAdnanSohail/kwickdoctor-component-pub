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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _materialIconsReact = require('material-icons-react');

var _materialIconsReact2 = _interopRequireDefault(_materialIconsReact);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

    _this.handleClick = function (event) {
      var _this$button$getBound = _this.button.getBoundingClientRect(),
          top = _this$button$getBound.top,
          left = _this$button$getBound.left;

      _this.setState({
        top: event && event.pageY ? event.pageY - top : top,
        left: event && event.pageX ? event.pageX - left : left,
        clicked: true
      }, function () {
        _this.timeout = setTimeout(function () {
          _this.setState({ clicked: false });
        }, 300);
      });

      var onClick = _this.props.onClick;


      if (onClick) {
        onClick(event);
      }
    };

    _this.state = { top: 0, left: 0, clicked: false };
    return _this;
  }

  _createClass(Button, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _this2 = this;

      var _props = this.props,
          accent = _props.accent,
          className = _props.className,
          children = _props.children,
          danger = _props.danger,
          disabled = _props.disabled,
          flat = _props.flat,
          icon = _props.icon,
          loading = _props.loading,
          rounded = _props.rounded,
          size = _props.size,
          squared = _props.squared,
          transparent = _props.transparent,
          type = _props.type;
      var _state = this.state,
          top = _state.top,
          left = _state.left,
          clicked = _state.clicked;


      var classes = (0, _classnames3.default)('button', className, (_classnames = {}, _defineProperty(_classnames, 'button--' + size, size), _defineProperty(_classnames, 'button--accent', accent), _defineProperty(_classnames, 'button--danger', danger), _defineProperty(_classnames, 'button--disabled', disabled), _defineProperty(_classnames, 'button--flat', flat), _defineProperty(_classnames, 'button--with-icon', icon || loading), _defineProperty(_classnames, 'button--rounded', rounded), _defineProperty(_classnames, 'button--squared', squared), _defineProperty(_classnames, 'button--transparent', transparent), _defineProperty(_classnames, 'has-clicked', clicked), _classnames));

      return _react2.default.createElement(
        'button',
        {
          type: type,
          ref: function ref(button) {
            _this2.button = button;
          },

          onClick: this.handleClick,
          disabled: disabled,
          className: 'jsx-' + _styles2.default.__scopedHash + ' ' + (classes || '')
        },
        loading && _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'button__icon button__loading-icon'
          },
          _react2.default.createElement(_materialIconsReact2.default, { icon: 'loop' })
        ),
        !loading && icon && _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'button__icon'
          },
          _react2.default.createElement(_materialIconsReact2.default, { icon: icon })
        ),
        !rounded && _react2.default.createElement(
          'span',
          {
            className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'button__content'
          },
          children
        ),
        clicked && _react2.default.createElement('span', { style: { top: top, left: left }, className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'button__wave'
        }),
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__scopedHash,
          css: _styles2.default.__scoped
        })
      );
    }
  }]);

  return Button;
}(_react.Component);

exports.default = Button;


Button.propTypes = {
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  children: _propTypes2.default.any,
  icon: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['small', 'xsmall', '']),
  accent: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  flat: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  rounded: _propTypes2.default.bool,
  squared: _propTypes2.default.bool,
  transparent: _propTypes2.default.bool,
  type: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

Button.defaultProps = {
  className: '',
  children: null,
  icon: '',
  size: undefined,
  accent: false,
  danger: false,
  disabled: false,
  flat: false,
  loading: false,
  rounded: false,
  squared: false,
  transparent: false,
  type: 'button',
  onClick: null
};