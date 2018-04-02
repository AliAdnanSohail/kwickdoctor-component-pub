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

var _Close = require('grommet/components/icons/base/Close');

var _Close2 = _interopRequireDefault(_Close);

var _reactMotion = require('react-motion');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_Component) {
  _inherits(Content, _Component);

  function Content() {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
  }

  _createClass(Content, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var onClose = this.props.onClose;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          _reactMotion.Motion,
          {
            defaultStyle: { transform: 30, opacity: 0 },
            style: {
              transform: (0, _reactMotion.spring)(0, { stiffness: 150, damping: 40 }),
              opacity: (0, _reactMotion.spring)(1, { stiffness: 150, damping: 40 })
            }
          },
          function (_ref) {
            var transform = _ref.transform,
                opacity = _ref.opacity;
            return _react2.default.createElement(
              'div',
              { style: { transform: 'translateX(' + transform + 'px)', opacity: opacity }, className: 'jsx-' + _styles.modal.__scopedHash + ' ' + 'modal'
              },
              _react2.default.createElement(
                'button',
                { onClick: onClose, className: 'jsx-' + _styles.modal.__scopedHash + ' ' + 'close'
                },
                _react2.default.createElement(_Close2.default, null)
              ),
              _react2.default.createElement(
                'div',
                {
                  className: 'jsx-' + _styles.modal.__scopedHash + ' ' + 'modal__content'
                },
                _this2.props.children
              )
            );
          }
        ),
        _react2.default.createElement(_style2.default, {
          styleId: _styles.modal.__scopedHash,
          css: _styles.modal.__scoped
        }),
        _react2.default.createElement(
          'style',
          null,
          _styles.close
        )
      );
    }
  }]);

  return Content;
}(_react.Component);

exports.default = Content;


Content.propTypes = {
  onClose: _propTypes2.default.func.isRequired
};