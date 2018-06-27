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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _materialIconsReact = require('material-icons-react');

var _materialIconsReact2 = _interopRequireDefault(_materialIconsReact);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _videoReact = require('video-react');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoPlayer = function (_Component) {
  _inherits(VideoPlayer, _Component);

  function VideoPlayer() {
    _classCallCheck(this, VideoPlayer);

    return _possibleConstructorReturn(this, (VideoPlayer.__proto__ || Object.getPrototypeOf(VideoPlayer)).apply(this, arguments));
  }

  _createClass(VideoPlayer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          containerClassName = _props.containerClassName,
          muted = _props.muted,
          src = _props.src;


      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _styles2.default.__scopedHash + ' ' + ((0, _classnames2.default)('video-player-container', containerClassName) || '')
        },
        src ? _react2.default.createElement(
          _videoReact.Player,
          { playsInline: true, fluid: true, muted: muted, className: 'video-player' },
          _react2.default.createElement('source', { src: src, className: 'jsx-' + _styles2.default.__scopedHash
          }),
          _react2.default.createElement(
            _videoReact.ControlBar,
            { className: 'video-player__control-bar' },
            _react2.default.createElement(_videoReact.PlayToggle, { disabled: true }),
            _react2.default.createElement(_videoReact.VolumeMenuButton, { disabled: true }),
            _react2.default.createElement(_videoReact.CurrentTimeDisplay, { disabled: true }),
            _react2.default.createElement(_videoReact.TimeDivider, { disabled: true }),
            _react2.default.createElement(_videoReact.DurationDisplay, { disabled: true }),
            _react2.default.createElement(_videoReact.ProgressControl, { className: 'video-player__progress', order: 1.1 }),
            _react2.default.createElement(_videoReact.FullscreenToggle, { className: 'video-player__fullscreen-button', order: 1.2 })
          ),
          _react2.default.createElement(_videoReact.BigPlayButton, { position: 'center', className: 'video-player__big-play-button', order: 2 })
        ) : _react2.default.createElement(_materialIconsReact2.default, { color: '#BBBCCD', icon: 'videocam_off', size: 76 }),
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__scopedHash,
          css: _styles2.default.__scoped
        }),
        _react2.default.createElement(
          'style',
          null,
          _styles.videoPlayer
        )
      );
    }
  }]);

  return VideoPlayer;
}(_react.Component);

exports.default = VideoPlayer;


VideoPlayer.propTypes = {
  containerClassName: _propTypes2.default.string,
  muted: _propTypes2.default.bool,
  src: _propTypes2.default.string.isRequired
};

VideoPlayer.defaultProps = {
  containerClassName: '',
  muted: false
};