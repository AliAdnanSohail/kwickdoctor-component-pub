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

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _RecordButton = require('./RecordButton');

var _RecordButton2 = _interopRequireDefault(_RecordButton);

var _VideoPlayer = require('../VideoPlayer');

var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoRecorder = function (_Component) {
  _inherits(VideoRecorder, _Component);

  function VideoRecorder(props) {
    _classCallCheck(this, VideoRecorder);

    var _this = _possibleConstructorReturn(this, (VideoRecorder.__proto__ || Object.getPrototypeOf(VideoRecorder)).call(this, props));

    _this.initMediaRecorder = function () {
      console.log('initMediaRecorder');

      try {
        var options = {};
        var types = ['video/webm;codecs=vp8', 'video/webm', ''];

        for (var i = 0; i < types.length; i + 1) {
          var type = types[i];

          if (MediaRecorder.isTypeSupported(type)) {
            options.mimeType = type;
            break;
          }
        }

        _this.recorder = new MediaRecorder(_this.stream, options);

        _this.recorder.ondataavailable = function (event) {
          if (event.data && event.data.size > 0) {
            _this.chunk.push(event.data);
          }
        };

        _this.setState({ available: true });
      } catch (err) {
        _this.setState({ available: false });
      }
    };

    _this.start = function () {
      console.log('start');

      _this.setState({ countingdown: true });

      _this.countdown = setInterval(function () {
        console.log('countdown');

        var countdownValue = _this.state.countdownValue;


        _this.setState({ countdownValue: countdownValue - 1 }, function () {
          if (_this.state.countdownValue === 0) {
            _this.props.onStart(_this.stream);

            _this.chunk = [];
            _this.recorder.start(10);

            _this.setState({ countingdown: false, recording: true }, function () {
              _this.timer = setInterval(function () {
                console.log('timer');

                _this.setState({ time: _this.state.time + 1 });
              }, 1000);

              _this.props.onStart(_this.stream);

              clearInterval(_this.countdown);
            });
          }
        });
      }, 1000);
    };

    _this.stop = function () {
      console.log('stop');

      _this.recorder.stop();

      var blob = new Blob(_this.chunk, { type: 'video/webm' });

      _this.setState({ recording: false, stoped: true, url: window.URL.createObjectURL(blob) });

      clearInterval(_this.timer);

      _this.props.onStop(blob);
    };

    _this.toggleRecording = function () {
      console.log(_this.state);

      if (!_this.state.available) {
        return;
      }

      if (_this.state.recording) {
        _this.stop();
      } else {
        _this.start();
      }
    };

    _this.renderTimeState = function () {
      var _this$state = _this.state,
          countingdown = _this$state.countingdown,
          recording = _this$state.recording;


      if (countingdown) {
        return 'Recording will start in';
      } else if (recording) {
        var time = _this.state.time;


        var minutes = parseInt(time / 60, 10);
        var seconds = parseInt(time % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        return minutes + ':' + seconds;
      }

      return 'Start recording';
    };

    _this.renderCountdown = function () {
      var countdownValue = _this.state.countdownValue;

      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _styles.countdown.__scopedHash + ' ' + 'countdown'
        },
        countdownValue,
        ' sec',
        _react2.default.createElement(_style2.default, {
          styleId: _styles.countdown.__scopedHash,
          css: _styles.countdown.__scoped
        })
      );
    };

    _this.renderRecorder = function () {
      var _this$state2 = _this.state,
          countingdown = _this$state2.countingdown,
          recording = _this$state2.recording,
          stoped = _this$state2.stoped,
          url = _this$state2.url;


      return stoped ? _react2.default.createElement(_VideoPlayer2.default, { src: url }) : _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'video',
          {
            autoPlay: true,
            muted: true,
            ref: function ref(video) {
              _this.video = video;
            },
            className: 'jsx-' + _styles.controls.__scopedHash
          },
          'Your browser does not support the video tag.'
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles.controls.__scopedHash + ' ' + 'video-recorder-controls'
          },
          _react2.default.createElement(
            'p',
            {
              className: 'jsx-' + _styles.controls.__scopedHash
            },
            _this.renderTimeState()
          ),
          countingdown ? _this.renderCountdown() : _react2.default.createElement(_RecordButton2.default, { active: recording, onClick: _this.toggleRecording })
        ),
        _react2.default.createElement(_style2.default, {
          styleId: _styles.controls.__scopedHash,
          css: _styles.controls.__scoped
        })
      );
    };

    _this.state = {
      asked: false,
      available: true,
      countingdown: false,
      countdownValue: 5,
      // paused: false,
      permission: false,
      recording: false,
      stoped: false,
      time: 0,
      url: ''
    };

    _this.stream = null;
    _this.recorder = null;
    _this.chunk = [];
    return _this;
  }

  _createClass(VideoRecorder, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      console.log('componentDidMount');

      var handleSuccess = function handleSuccess(stream) {
        _this2.stream = stream;
        _this2.chunk = [];

        _this2.setState({ permission: true, asked: true });

        _this2.video.srcObject = stream;

        _this2.initMediaRecorder();

        _this2.props.onGranted();
      };

      var handleFailed = function handleFailed(error) {
        _this2.setState({ asked: false });
        _this2.props.onDenied(error);
      };

      navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(handleSuccess).catch(handleFailed);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('componentWillUnmount');

      this.recorder = null;
      this.chunk = [];

      if (this.stream) {
        var tracks = this.stream.getTracks();

        tracks.forEach(function (track) {
          track.stop();
        });

        this.stream = null;
      }

      clearInterval(this.countdown);
      clearInterval(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var available = this.state.available;


      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _styles2.default.__scopedHash + ' jsx-' + _styles.unavailable.__scopedHash + ' ' + 'video-recorder'
        },
        available ? this.renderRecorder() : _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles2.default.__scopedHash + ' jsx-' + _styles.unavailable.__scopedHash + ' ' + 'video-unavailable'
          },
          'Sorry, video recording is unavailable.'
        ),
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__scopedHash,
          css: _styles2.default.__scoped
        }),
        _react2.default.createElement(_style2.default, {
          styleId: _styles.unavailable.__scopedHash,
          css: _styles.unavailable.__scoped
        })
      );
    }
  }]);

  return VideoRecorder;
}(_react.Component);

exports.default = VideoRecorder;


VideoRecorder.propTypes = {
  onDenied: _propTypes2.default.func,
  onGranted: _propTypes2.default.func,
  // onPause,
  // onResume,
  onStart: _propTypes2.default.func,
  onStop: _propTypes2.default.func
};

VideoRecorder.defaultProps = {
  onDenied: function onDenied() {},
  onGranted: function onGranted() {},
  onStart: function onStart() {},
  onStop: function onStop() {}
};