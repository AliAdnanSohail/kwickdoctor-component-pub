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

var _Close = require('grommet/components/icons/base/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Manager = require('./../Manager');

var _Manager2 = _interopRequireDefault(_Manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toast = function (_Component) {
  _inherits(Toast, _Component);

  function Toast() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toast);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      var timeOut = _this.props.timeOut;

      if (timeOut !== 0) {
        _this.timeoutID = setTimeout(_this.requestHide, timeOut);
      }
      _this.enter();
    }, _this.enter = function () {
      var animationDuration = _this.props.animationDuration;

      var baseClassName = _this.element.className;

      _this.element.className = baseClassName + ' fade-enter';
      setTimeout(function () {
        _this.element.className = baseClassName + ' fade-enter-active';
      }, 0);

      setTimeout(function () {
        _this.element.className = baseClassName;
      }, animationDuration);
    }, _this.exit = function () {
      var animationDuration = _this.props.animationDuration;

      var baseClassName = _this.element.className;

      _this.element.className = baseClassName + ' fade-exit';
      setTimeout(function () {
        _this.element.className = baseClassName + ' fade-exit-active';
      }, 0);

      setTimeout(function () {
        _Manager2.default.remove(_this.props.id);
      }, animationDuration);
    }, _this.closeToast = function () {
      var onHideClick = _this.props.onHideClick;

      if (onHideClick) {
        onHideClick();
      }
      _this.requestHide();
    }, _this.requestHide = function () {
      var onRequestHide = _this.props.onRequestHide;

      if (onRequestHide) {
        onRequestHide();
      }
      clearTimeout(_this.timeoutID);
      _this.exit();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toast, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          primary = _props.primary,
          boxstyle = _props.boxstyle,
          content = _props.content;


      var classes = (0, _classnames2.default)('toast-box', { primary: primary }, boxstyle);

      return _react2.default.createElement(
        'div',
        { ref: function ref(div) {
            _this2.element = div;
          }, className: classes },
        _react2.default.createElement('div', { className: 'circle' }),
        _react2.default.createElement(
          'div',
          { className: 'message' },
          content
        ),
        _react2.default.createElement(
          'div',
          { className: 'icons-close' },
          _react2.default.createElement(
            'button',
            { className: 'icon', onClick: this.closeToast },
            _react2.default.createElement(_Close2.default, null)
          )
        ),
        _react2.default.createElement('div', { className: 'clear' })
      );
    }
  }]);

  return Toast;
}(_react.Component);

exports.default = Toast;


Toast.propTypes = {
  id: _propTypes2.default.string.isRequired,
  content: _propTypes2.default.node.isRequired,
  primary: _propTypes2.default.bool,
  boxstyle: _propTypes2.default.string,
  onHideClick: _propTypes2.default.func,
  timeOut: _propTypes2.default.number,
  animationDuration: _propTypes2.default.number,
  onRequestHide: _propTypes2.default.func
};

Toast.defaultProps = {
  primary: false,
  boxstyle: 'rectangle-22',
  onHideClick: null,
  timeOut: 5000,
  animationDuration: 500,
  onRequestHide: function onRequestHide() {}
};