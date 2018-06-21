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

var VideoRecorderButton = function (_Component) {
  _inherits(VideoRecorderButton, _Component);

  function VideoRecorderButton() {
    _classCallCheck(this, VideoRecorderButton);

    return _possibleConstructorReturn(this, (VideoRecorderButton.__proto__ || Object.getPrototypeOf(VideoRecorderButton)).apply(this, arguments));
  }

  _createClass(VideoRecorderButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onClick = _props.onClick,
          state = _props.state;


      return _react2.default.createElement(
        'button',
        { onClick: onClick, className: 'jsx-' + _styles2.default.__scopedHash + ' ' + ((0, _classnames2.default)('record-button', 'record-button--' + state) || '')
        },
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__scopedHash,
          css: _styles2.default.__scoped
        })
      );
    }
  }]);

  return VideoRecorderButton;
}(_react.Component);

exports.default = VideoRecorderButton;


VideoRecorderButton.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  state: _propTypes2.default.oneOf(['start', 'stop']).isRequired
};