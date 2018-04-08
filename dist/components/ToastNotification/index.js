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

var _reactTransitionGroup = require('react-transition-group');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Manager = require('./Manager');

var _Manager2 = _interopRequireDefault(_Manager);

var _Toast = require('./Toast');

var _Toast2 = _interopRequireDefault(_Toast);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToastNotification = function (_Component) {
  _inherits(ToastNotification, _Component);

  function ToastNotification(props) {
    _classCallCheck(this, ToastNotification);

    var _this = _possibleConstructorReturn(this, (ToastNotification.__proto__ || Object.getPrototypeOf(ToastNotification)).call(this, props));

    _this.componentWillMount = function () {
      _Manager2.default.addChangeListener(_this.handleStoreChange);
    };

    _this.componentWillUnmount = function () {
      _Manager2.default.removeChangeListener(_this.handleStoreChange);
    };

    _this.getToasts = function () {
      var toasts = _this.state.toasts;
      var timeout = _this.props.timeout;


      return toasts.map(function (toast) {
        var key = toast.id || new Date().getTime() - Math.random();
        return _react2.default.createElement(
          _reactTransitionGroup.CSSTransition,
          { classNames: 'fade', key: key, timeout: timeout, onExited: function onExited(d) {
              _this.slowTop(d);
            } },
          _react2.default.createElement(_Toast2.default, toast)
        );
      });
    };

    _this.slowTop = function (el) {
      function getHeight(elm) {
        var elmHeight = void 0;
        var elmMargin = void 0;
        if (document.all) {
          elmHeight = parseInt(elm.currentStyle.height, 10);
          elmMargin = parseInt(elm.currentStyle.marginTop, 10) + parseInt(elm.currentStyle.marginBottom, 10) + parseInt(elm.currentStyle.paddingTop, 10) + parseInt(elm.currentStyle.paddingBottom, 10);
        } else {
          elmHeight = parseInt(document.defaultView.getComputedStyle(elm, '').getPropertyValue('height'), 10);
          elmMargin = parseInt(document.defaultView.getComputedStyle(elm, '').getPropertyValue('margin-top'), 10) + parseInt(document.defaultView.getComputedStyle(elm, '').getPropertyValue('margin-bottom'), 10) + parseInt(document.defaultView.getComputedStyle(elm, '').getPropertyValue('padding-bottom'), 10) + parseInt(document.defaultView.getComputedStyle(elm, '').getPropertyValue('padding-top'), 10);
        }

        return elmHeight + elmMargin;
      }

      var height = getHeight(el);
      var newDiv = document.createElement('div');

      newDiv.style.height = height + 'px';
      newDiv.className = 'plug';

      el.parentNode.insertBefore(newDiv, el);

      setTimeout(function () {
        newDiv.className = 'plug plug--zeroHeight';
      });

      setTimeout(function () {
        newDiv.remove();
      }, 220);
    };

    _this.handleStoreChange = function (toasts) {
      _this.setState({
        toasts: toasts
      });
    };

    _this.state = {
      toasts: props.initialToasts
    };
    return _this;
  }

  _createClass(ToastNotification, [{
    key: 'render',
    value: function render() {
      var className = (0, _classnames2.default)('toast-container', { 'toast-container-empty': this.state.toasts.length === 0 });

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          _reactTransitionGroup.TransitionGroup,
          null,
          this.state.toasts.length > 0 && this.getToasts()
        ),
        _react2.default.createElement(
          'style',
          null,
          _styles2.default
        )
      );
    }
  }]);

  return ToastNotification;
}(_react.Component);

exports.default = ToastNotification;


ToastNotification.propTypes = {
  initialToasts: _propTypes2.default.array,
  timeout: _propTypes2.default.number
};

ToastNotification.defaultProps = {
  initialToasts: [],
  timeout: 200
};