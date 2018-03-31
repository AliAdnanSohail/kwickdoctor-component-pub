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

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toast = function (_Component) {
  _inherits(Toast, _Component);

  function Toast(props) {
    _classCallCheck(this, Toast);

    var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, props));

    _this.closeToast = function () {
      _this.setState({
        showToast: false
      });
      _this.props.onHideClick('Toast hidden');
    };

    _this.openToast = function () {
      _this.setState({
        showToast: true
      });
      _this.props.onShowClick('Toast shown');
    };

    _this.state = {
      showToast: false
    };
    return _this;
  }

  _createClass(Toast, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          primary = _props.primary,
          boxstyle = _props.boxstyle;

      var classes = (0, _classnames2.default)('box', { primary: primary }, boxstyle);

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          'button',
          { onClick: this.openToast, style: { marginBottom: 20 } },
          'Show Toast'
        ),
        this.state.showToast && _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles2.default.__scopedHash + ' ' + (classes || '')
          },
          _react2.default.createElement('div', {
            className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'circle'
          }),
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'message'
            },
            this.props.children
          ),
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'icons-close'
            },
            _react2.default.createElement('button', { onClick: this.closeToast, className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'icon'
            })
          ),
          _react2.default.createElement(_style2.default, {
            styleId: _styles2.default.__scopedHash,
            css: _styles2.default.__scoped
          })
        )
      );
    }
  }]);

  return Toast;
}(_react.Component);

exports.default = Toast;


Toast.propTypes = {
  primary: _propTypes2.default.bool,
  boxstyle: _propTypes2.default.string,
  onHideClick: _propTypes2.default.func,
  onShowClick: _propTypes2.default.func
};

Toast.defaultProps = {
  primary: false,
  boxstyle: 'rectangle-22',
  onHideClick: null,
  onShowClick: null
};