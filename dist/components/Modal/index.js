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

var _reactAriaModal = require('react-aria-modal');

var _reactAriaModal2 = _interopRequireDefault(_reactAriaModal);

var _base = require('grommet/components/icons/base');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  _createClass(Modal, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return nextProps.active !== prevState.active ? { active: nextProps.show } : null;
    }
  }]);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.handleEnter = function () {
      _this.setState({ modalHasEntered: true });
    };

    _this.handleExit = function () {
      _this.setState({ modalHasEntered: false }, function () {
        _this.timeout = setTimeout(function () {
          _this.setState({ active: false });
          _this.props.onExit();
        }, 300);
      });
    };

    _this.state = { modalHasEntered: false, active: props.active };
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          alert = _props.alert,
          children = _props.children,
          escapeExits = _props.escapeExits,
          rootId = _props.rootId,
          title = _props.title,
          underlayClickExits = _props.underlayClickExits;
      var _state = this.state,
          active = _state.active,
          modalHasEntered = _state.modalHasEntered;


      var modalContentClass = (0, _classnames2.default)('modal', 'modal--animated', {
        'has-entered': modalHasEntered
      });

      var underlayClass = (0, _classnames2.default)('underlay', {
        'has-entered': modalHasEntered
      });

      return _react2.default.createElement(
        _reactAriaModal2.default,
        {
          alert: alert,
          escapeExits: escapeExits,
          getApplicationNode: function getApplicationNode() {
            return document.getElementById(rootId);
          },
          mounted: active,
          onEnter: this.handleEnter,
          onExit: this.handleExit,
          titleText: title,
          underlayColor: false,
          underlayClass: underlayClass,
          underlayClickExits: underlayClickExits,
          verticallyCenter: true
        },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles.modal.__scopedHash + ' ' + (modalContentClass || '')
          },
          _react2.default.createElement(
            'button',
            { onClick: this.handleExit, className: 'jsx-' + _styles.modal.__scopedHash + ' ' + 'modal__close-button'
            },
            _react2.default.createElement(_base.CloseIcon, null)
          ),
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-' + _styles.modal.__scopedHash + ' ' + 'modal__content'
            },
            children
          )
        ),
        _react2.default.createElement(_style2.default, {
          styleId: _styles.modal.__scopedHash,
          css: _styles.modal.__scoped
        }),
        _react2.default.createElement(
          'style',
          null,
          _styles.underlay
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

exports.default = Modal;


Modal.propTypes = {
  active: _propTypes2.default.bool.isRequired,
  alert: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  escapeExits: _propTypes2.default.bool,
  onExit: _propTypes2.default.func.isRequired,
  rootId: _propTypes2.default.string,
  title: _propTypes2.default.string,
  underlayClickExits: _propTypes2.default.bool
};

Modal.defaultProps = {
  alert: false,
  children: null,
  escapeExits: true,
  rootId: 'root',
  title: 'dom one',
  underlayClickExits: true
};