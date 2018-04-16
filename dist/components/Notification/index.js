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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _icons = require('grommet/components/icons');

var _ = require('../');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notification = function (_Component) {
  _inherits(Notification, _Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.getDate = function () {
      var date = _this.props.date;


      return (0, _moment2.default)(date).format('h:mm A, MMM D');
    }, _this.handleClickComplete = function () {
      _this.props.onComplete();
    }, _this.handleClickDelete = function () {
      _this.props.onDelete();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Notification, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          message = _props.message,
          primary = _props.primary,
          read = _props.read;


      var dotClasses = (0, _classnames2.default)('notification__dot', {
        'notification__dot--primary': primary,
        'notification__dot--read': read
      });

      return _react2.default.createElement(
        _.Card,
        { className: 'notification-card' },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles.notification.__scopedHash + ' jsx-' + _styles.notificationCard.__scopedHash + ' ' + 'notification__time'
          },
          this.getDate()
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles.notification.__scopedHash + ' jsx-' + _styles.notificationCard.__scopedHash + ' ' + 'notification__message'
          },
          _react2.default.createElement('span', {
            className: 'jsx-' + _styles.notification.__scopedHash + ' jsx-' + _styles.notificationCard.__scopedHash + ' ' + (dotClasses || '')
          }),
          message
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles.notification.__scopedHash + ' jsx-' + _styles.notificationCard.__scopedHash + ' ' + 'notification__actions'
          },
          _react2.default.createElement(_.Button, { icon: _react2.default.createElement(_icons.CheckmarkIcon, null), size: 's', rounded: true, flat: true }),
          _react2.default.createElement(_.Button, { icon: _react2.default.createElement(_icons.TrashIcon, null), size: 's', rounded: true, flat: true })
        ),
        _react2.default.createElement(_style2.default, {
          styleId: _styles.notification.__scopedHash,
          css: _styles.notification.__scoped
        }),
        _react2.default.createElement(_style2.default, {
          styleId: _styles.notificationCard.__scopedHash,
          css: _styles.notificationCard.__scoped
        })
      );
    }
  }]);

  return Notification;
}(_react.Component);

exports.default = Notification;


Notification.propTypes = {
  date: _propTypes2.default.object.isRequired,
  message: _propTypes2.default.string.isRequired,
  onComplete: _propTypes2.default.func,
  onDelete: _propTypes2.default.func,
  primary: _propTypes2.default.bool,
  read: _propTypes2.default.bool
};

Notification.defaultProps = {
  onComplete: function onComplete() {},
  onDelete: function onDelete() {},
  primary: false,
  read: false
};