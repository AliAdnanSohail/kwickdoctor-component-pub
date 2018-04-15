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

var _icons = require('grommet/components/icons');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.getIconStyle = function () {
      var size = _this.props.size;
      var _defaultExport = ['button svg{width:' + size / 2 + 'px !important;height:' + size / 2 + 'px !important;}'];
      _defaultExport.__hash = '3358251005';
      _defaultExport.__scoped = ['button.jsx-3205182652 svg.jsx-3205182652{width:' + size / 2 + 'px !important;height:' + size / 2 + 'px !important;}'];
      _defaultExport.__scopedHash = '3205182652';


      return _defaultExport;
    };

    _this.handleClick = function (event) {
      var _this$button$getBound = _this.button.getBoundingClientRect(),
          top = _this$button$getBound.top,
          left = _this$button$getBound.left;

      _this.setState({
        top: event ? event.pageY - top : top,
        left: event ? event.pageX - left : left,
        clicked: true
      }, function () {
        _this.timeout = setTimeout(function () {
          _this.setState({ clicked: false });
        }, 300);
      });

      if (_this.props.onClick) {
        _this.props.onClick(event);
      }
    };

    _this.renderContent = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          icon = _this$props.icon,
          loading = _this$props.loading,
          rounded = _this$props.rounded;


      return rounded && icon ? _react2.default.createElement(
        _react.Fragment,
        null,
        loading ? _react2.default.createElement(_icons.SpinningIcon, { size: 'small', className: 'button__loading-icon' }) : icon,
        _react2.default.createElement(
          'style',
          null,
          _this.getIconStyle()
        )
      ) : _react2.default.createElement(
        _react.Fragment,
        null,
        loading ? _react2.default.createElement(_icons.SpinningIcon, { size: 'small', className: 'button__loading-icon' }) : undefined,
        _react2.default.createElement(
          'span',
          { className: 'button__content' },
          children
        )
      );
    };

    _this.state = { top: '50%', left: '50%', clicked: false };
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
      var _this2 = this;

      var _props = this.props,
          accent = _props.accent,
          danger = _props.danger,
          disabled = _props.disabled,
          flat = _props.flat,
          loading = _props.loading,
          rounded = _props.rounded,
          size = _props.size,
          squared = _props.squared,
          transparent = _props.transparent;
      var _state = this.state,
          top = _state.top,
          left = _state.left,
          clicked = _state.clicked;


      var classes = (0, _classnames2.default)('button', 'button--' + size, { 'button--accent': accent }, { 'button--danger': danger }, { 'button--disabled': disabled }, { 'button--flat': flat }, { 'button--loading': loading }, { 'button--rounded': rounded }, { 'button--squared': squared }, { 'button--transparent': transparent }, { 'has-clicked': clicked });

      return _react2.default.createElement(
        'button',
        {
          ref: function ref(button) {
            _this2.button = button;
          },

          onClick: this.handleClick,
          disabled: disabled,
          className: 'jsx-' + _styles2.default.__scopedHash + ' ' + (classes || '')
        },
        this.renderContent(),
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
  children: _propTypes2.default.any,
  icon: _propTypes2.default.element,
  size: _propTypes2.default.oneOf(['s', 'xs', '']),
  accent: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  flat: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  rounded: _propTypes2.default.bool,
  squared: _propTypes2.default.bool,
  transparent: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

Button.defaultProps = {
  children: null,
  icon: null,
  size: undefined,
  accent: false,
  danger: false,
  disabled: false,
  flat: false,
  loading: false,
  rounded: false,
  squared: false,
  transparent: false,
  onClick: null
};