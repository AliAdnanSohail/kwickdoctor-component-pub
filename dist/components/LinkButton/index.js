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

var _reactRouterDom = require('react-router-dom');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkButton = function (_Component) {
  _inherits(LinkButton, _Component);

  function LinkButton() {
    _classCallCheck(this, LinkButton);

    return _possibleConstructorReturn(this, (LinkButton.__proto__ || Object.getPrototypeOf(LinkButton)).apply(this, arguments));
  }

  _createClass(LinkButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          accent = _props.accent,
          className = _props.className,
          children = _props.children,
          danger = _props.danger,
          flat = _props.flat,
          icon = _props.icon,
          to = _props.to,
          rounded = _props.rounded,
          size = _props.size,
          squared = _props.squared,
          transparent = _props.transparent;


      var classes = (0, _classnames3.default)('button', className, _defineProperty({}, 'button--' + size, size), { 'button--accent': accent }, { 'button--danger': danger }, { 'button--flat': flat }, { 'button--with-icon': icon }, { 'button--rounded': rounded }, { 'button--squared': squared }, { 'button--transparent': transparent });

      return _react2.default.createElement(
        _reactRouterDom.NavLink,
        { className: classes, to: to },
        icon && _react2.default.createElement(
          'span',
          { className: 'button__icon' },
          _react2.default.createElement(_materialIconsReact2.default, { icon: icon })
        ),
        !rounded && _react2.default.createElement(
          'span',
          { className: 'button__content' },
          children
        ),
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__hash,
          css: _styles2.default
        })
      );
    }
  }]);

  return LinkButton;
}(_react.Component);

exports.default = LinkButton;


LinkButton.propTypes = {
  accent: _propTypes2.default.bool,
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  danger: _propTypes2.default.bool,
  flat: _propTypes2.default.bool,
  icon: _propTypes2.default.element,
  to: _propTypes2.default.string,
  rounded: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['small', 'xsmall', '']),
  squared: _propTypes2.default.bool,
  transparent: _propTypes2.default.bool
};

LinkButton.defaultProps = {
  accent: false,
  children: null,
  className: '',
  danger: false,
  flat: false,
  icon: null,
  to: '/',
  rounded: false,
  size: undefined,
  squared: false,
  transparent: false
};