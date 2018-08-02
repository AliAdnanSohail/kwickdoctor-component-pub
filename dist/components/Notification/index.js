'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notification = function (_Component) {
  _inherits(Notification, _Component);

  function Notification() {
    _classCallCheck(this, Notification);

    var _this = _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this));

    _this.handleShowButtons = function () {
      _this.setState({ buttonsVisible: !_this.state.buttonsVisible });
    };

    _this.renderDate = function () {
      return (0, _moment2.default)(_this.props.date).format('h:mm A, MMM D');
    };

    _this.state = { buttonsVisible: false };
    return _this;
  }

  _createClass(Notification, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          message = _props.message,
          primary = _props.primary,
          read = _props.read,
          onComplete = _props.onComplete,
          onDelete = _props.onDelete;


      var classes = (0, _classnames2.default)('notification__dot', {
        'notification__dot--primary': primary,
        'notification__dot--read': read
      });

      return _react2.default.createElement(
        _.Card,
        { className: 'notification' },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles.notification.__scopedHash + ' jsx-' + _styles.notificationCard.__scopedHash + ' ' + 'notification__time'
          },
          this.renderDate()
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles.notification.__scopedHash + ' jsx-' + _styles.notificationCard.__scopedHash + ' ' + 'notification__message'
          },
          _react2.default.createElement('span', {
            className: 'jsx-' + _styles.notification.__scopedHash + ' jsx-' + _styles.notificationCard.__scopedHash + ' ' + (classes || '')
          }),
          message
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles.notification.__scopedHash + ' jsx-' + _styles.notificationCard.__scopedHash + ' ' + 'notification__actions'
          },
          !read && _react2.default.createElement(_.Button, {
            flat: true,
            icon: _react2.default.createElement(
              'i',
              {
                className: 'jsx-' + _styles.notification.__scopedHash + ' jsx-' + _styles.notificationCard.__scopedHash + ' ' + 'material-icons'
              },
              'done'
            ),
            onClick: onComplete,
            rounded: true,
            size: 'small'
          }),
          _react2.default.createElement(_.Button, {
            flat: true,
            icon: _react2.default.createElement(
              'i',
              {
                className: 'jsx-' + _styles.notification.__scopedHash + ' jsx-' + _styles.notificationCard.__scopedHash + ' ' + 'material-icons'
              },
              'delete'
            ),
            onClick: onDelete,
            rounded: true,
            size: 'small'
          })
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles.notification.__scopedHash + ' jsx-' + _styles.notificationCard.__scopedHash + ' ' + 'notification__actions--mobile'
          },
          _react2.default.createElement(_.Button, {
            flat: true,
            icon: _react2.default.createElement(
              'i',
              {
                className: 'jsx-' + _styles.notification.__scopedHash + ' jsx-' + _styles.notificationCard.__scopedHash + ' ' + 'material-icons'
              },
              'more_horiz'
            ),
            onClick: this.handleShowButtons,
            rounded: true
          }),
          this.state.buttonsVisible && _react2.default.createElement(
            'ul',
            {
              className: 'jsx-' + _styles.notification.__scopedHash + ' jsx-' + _styles.notificationCard.__scopedHash + ' ' + 'notification__buttons'
            },
            !read && _react2.default.createElement(
              'button',
              { onClick: onComplete, type: 'button', className: 'jsx-' + _styles.notification.__scopedHash + ' jsx-' + _styles.notificationCard.__scopedHash + ' ' + 'notification__button--mobile'
              },
              _react2.default.createElement(
                'i',
                {
                  className: 'jsx-' + _styles.notification.__scopedHash + ' jsx-' + _styles.notificationCard.__scopedHash + ' ' + 'material-icons'
                },
                'done'
              ),
              'Read'
            ),
            _react2.default.createElement(
              'button',
              { onClick: onDelete, type: 'button', className: 'jsx-' + _styles.notification.__scopedHash + ' jsx-' + _styles.notificationCard.__scopedHash + ' ' + 'notification__button--mobile'
              },
              _react2.default.createElement(
                'i',
                {
                  className: 'jsx-' + _styles.notification.__scopedHash + ' jsx-' + _styles.notificationCard.__scopedHash + ' ' + 'material-icons'
                },
                'delete'
              ),
              'Delete'
            )
          )
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