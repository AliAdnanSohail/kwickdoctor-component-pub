'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Manager = require('./Manager');

var _Manager2 = _interopRequireDefault(_Manager);

var _Toast = require('./Toast');

var _Toast2 = _interopRequireDefault(_Toast);

var _createUUID = require('./create-UUID');

var _createUUID2 = _interopRequireDefault(_createUUID);

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

    _this.componentDidMount = function () {
      _Manager2.default.addChangeListener(_this.handleStoreChange);
    };

    _this.componentWillUnmount = function () {
      _Manager2.default.removeChangeListener(_this.handleStoreChange);
    };

    _this.handleStoreChange = function (toasts) {
      _this.setState({
        toasts: toasts
      });
    };

    _this.renderToasts = function () {
      var toasts = _this.state.toasts;


      return toasts.map(function (toast) {
        var key = toast.id || (0, _createUUID2.default)();
        return _react2.default.createElement(_Toast2.default, _extends({ key: key }, toast));
      });
    };

    _this.state = { toasts: props.initialToasts };
    return _this;
  }

  _createClass(ToastNotification, [{
    key: 'render',
    value: function render() {
      var className = (0, _classnames2.default)('toast-container', {
        'toast-container-empty': this.state.toasts.length === 0
      });

      return _react2.default.createElement(
        'div',
        { className: className },
        this.state.toasts.length > 0 && this.renderToasts(),
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
  initialToasts: _propTypes2.default.array
};

ToastNotification.defaultProps = {
  initialToasts: []
};