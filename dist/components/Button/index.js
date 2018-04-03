'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.getSize = function () {
      var _this$props = _this.props,
          rounded = _this$props.rounded,
          size = _this$props.size;


      return rounded ? { width: size + 'px', height: size + 'px' } : {};
    }, _this.getIconStyle = function () {
      var size = _this.props.size;
      var _defaultExport = ['button svg{width:' + size / 2 + 'px !important;height:' + size / 2 + 'px !important;}'];
      _defaultExport.__hash = '3358251005';
      _defaultExport.__scoped = ['button.jsx-3205182652 svg.jsx-3205182652{width:' + size / 2 + 'px !important;height:' + size / 2 + 'px !important;}'];
      _defaultExport.__scopedHash = '3205182652';


      return _defaultExport;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          accent = _props.accent,
          children = _props.children,
          danger = _props.danger,
          icon = _props.icon,
          rounded = _props.rounded,
          squared = _props.squared,
          title = _props.title,
          transparent = _props.transparent,
          onClick = _props.onClick;


      var classes = (0, _classnames2.default)('button', { 'button--accent': accent }, { 'button--danger': danger }, { 'button--rounded': rounded }, { 'button--squared': squared }, { 'button--transparent': transparent });

      return _react2.default.createElement(
        'button',
        { className: classes, onClick: onClick, style: this.getSize() },
        rounded && icon ? icon : title || children,
        _react2.default.createElement(
          'style',
          null,
          _styles2.default
        ),
        _react2.default.createElement(
          'style',
          null,
          rounded && icon && this.getIconStyle()
        )
      );
    }
  }]);

  return Button;
}(_react.Component);

exports.default = Button;


Button.propTypes = {
  accent: _propTypes2.default.bool,
  children: _propTypes2.default.element,
  danger: _propTypes2.default.bool,
  icon: _propTypes2.default.element,
  rounded: _propTypes2.default.bool,
  size: _propTypes2.default.number,
  squared: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  transparent: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

Button.defaultProps = {
  accent: false,
  children: null,
  danger: false,
  icon: null,
  rounded: false,
  size: 40,
  squared: false,
  title: null,
  transparent: false,
  onClick: null
};