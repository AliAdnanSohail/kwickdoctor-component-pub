'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _css = require('styled-jsx/css');

var _css2 = _interopRequireDefault(_css);

var _Slider = require('./Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _FullScreenButton = require('./FullScreenButton');

var _FullScreenButton2 = _interopRequireDefault(_FullScreenButton);

var _PlayPauseButton = require('./PlayPauseButton');

var _PlayPauseButton2 = _interopRequireDefault(_PlayPauseButton);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoPlayer = function (_Component) {
  _inherits(VideoPlayer, _Component);

  function VideoPlayer(props) {
    _classCallCheck(this, VideoPlayer);

    var _this = _possibleConstructorReturn(this, (VideoPlayer.__proto__ || Object.getPrototypeOf(VideoPlayer)).call(this, props));

    _this.getVideoRef = function (video) {
      _this.videoRef = video;
      _this.initVideo();
    };

    _this.getVideoContainerRef = function (elem) {
      _this.containerRef = elem;
    };

    _this.setVideoProgress = function (progress) {
      if (_this.videoRef) {
        var time = Math.round(progress / 100 * _this.videoRef.duration);
        if (_this.videoRef.currentTime !== time) {
          _this.videoRef.currentTime = time;
        }
      }
    };

    _this.calcVideoProgress = function () {
      var value = 0;
      if (_this.videoRef) {
        value = Math.round(100 / _this.videoRef.duration * _this.videoRef.currentTime);
        _this.setState({ videoProgress: value });
      }
      return value;
    };

    _this.initVideo = function () {
      if (_this.videoRef) {
        _this.setState({ playingVideo: !_this.state.playingVideo });
        _this.videoRef.loop = true;
        // this.videoRef.muted = true;
        console.log(_this.videoRef.duration);
        _this.videoRef.ontimeupdate = _this.calcVideoProgress;
        _this.playPromise = _this.videoRef.play();
      }
    };

    _this.pauseVideo = function () {
      if (_this.playPromise !== undefined) {
        _this.playPromise.then(function () {
          _this.videoRef.pause();
        }).catch(function (error) {
          console.error(error);
        });
      }
    };

    _this.checkFullScreenSupport = function () {
      if ('fullscreenEnabled' in document || 'webkitFullscreenEnabled' in document || 'mozFullScreenEnabled' in document || 'msFullscreenEnabled' in document) {
        if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
          return true;
        }
      }
      return false;
    };

    _this.makeAllControlsVIsible = function () {};

    _this.playFullScreen = function () {
      // check if user allows full screen of elements. This can be enabled or disabled in browser config. By default its enabled.
      // its also used to check if browser supports full screen api.
      if (_this.checkFullScreenSupport()) {
        // requestFullscreen is used to display an this.videoRef in full screen mode.
        if ('requestFullscreen' in _this.containerRef) {
          _this.containerRef.requestFullscreen();
        } else if ('webkitRequestFullscreen' in _this.containerRef) {
          _this.containerRef.webkitRequestFullscreen();
        } else if ('mozRequestFullScreen' in _this.containerRef) {
          _this.containerRef.mozRequestFullScreen();
        } else if ('msRequestFullscreen' in _this.containerRef) {
          _this.containerRef.msRequestFullscreen();
        }
        _this.containerRef.controls = false;
      } else {
        console.log("User doesn't allow full screen");
      }
    };

    _this.screenChange = function () {
      // fullscreenElement is assigned to html element if any element is in full screen mode.
      if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
        console.log('Current full screen element is : ' + (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement));
      } else {
        // exitFullscreen us used to exit full screen manually
        if ('exitFullscreen' in document) {
          document.exitFullscreen();
        } else if ('webkitExitFullscreen' in document) {
          document.webkitExitFullscreen();
        } else if ('mozCancelFullScreen' in document) {
          document.mozCancelFullScreen();
        } else if ('msExitFullscreen' in document) {
          document.msExitFullscreen();
        }
      }
    };

    _this.playVideo = function () {
      _this.playPromise = _this.videoRef.play();
    };

    _this.togglePlayPause = function () {
      if (_this.state.playing) {
        _this.pauseVideo();
        _this.setState({ playing: false });
      } else {
        _this.playVideo();
        _this.setState({ playing: true });
      }
    };

    _this.state = {
      playingVideo: false,
      videoProgress: 0,
      playing: true
    };
    _this.checkFullScreenSupport();
    return _this;
  }

  _createClass(VideoPlayer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // this.getMediaDevices();
      return _react2.default.createElement(
        'div',
        { className: 'videoPlaycer_container', ref: this.getVideoContainerRef },
        _react2.default.createElement(_FullScreenButton2.default, { className: 'fullscreen_button', onClick: function onClick() {
            return _this2.playFullScreen();
          } }),
        _react2.default.createElement('video', { ref: this.getVideoRef, src: this.props.src }),
        _react2.default.createElement(
          'div',
          { className: 'videoPlayer_controls' },
          _react2.default.createElement(_Slider2.default, {
            value: this.state.videoProgress,
            onChange: function onChange(value) {
              _this2.setState({ videoProgress: value });
              _this2.setVideoProgress(value);
            },
            onMousedown: this.pauseVideo,
            onMouseup: this.playVideo
          })
        ),
        _react2.default.createElement(
          'style',
          null,
          _styles2.default
        )
      );
    }
  }]);

  return VideoPlayer;
}(_react.Component);

exports.default = VideoPlayer;


VideoPlayer.propTypes = {
  src: _propTypes2.default.string.isRequired
};
// onChange={(event) => { this.setVideoProgress(event.target.value); }}