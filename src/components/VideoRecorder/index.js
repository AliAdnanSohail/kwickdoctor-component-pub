import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles, { controls, countdown as countdownStyles, unavailable } from './styles';
import VideoRecorderButton from './VideoRecorderButton';
import VideoPlayer from '../VideoPlayer';

export default class VideoRecorder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      asked: false,
      available: true,
      countingdown: false,
      countdownValue: 5,
      // paused: false,
      permission: false,
      recording: false,
      stoped: false,
      time: 0,
      url: '',
    };

    this.stream = null;
    this.recorder = null;
    this.chunk = [];
  }

  componentDidMount() {
    console.log('componentDidMount');

    const handleSuccess = (stream) => {
      this.stream = stream;
      this.chunk = [];

      this.setState({ permission: true, asked: true });

      this.video.srcObject = stream;

      this.initMediaRecorder();

      this.props.onGranted();
    };

    const handleFailed = (error) => {
      this.setState({ asked: false });
      this.props.onDenied(error);
    };

    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then(handleSuccess)
      .catch(handleFailed);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');

    this.recorder = null;
    this.chunk = [];

    if (this.stream) {
      const tracks = this.stream.getTracks();

      tracks.forEach((track) => {
        track.stop();
      });

      this.stream = null;
    }

    clearInterval(this.countdown);
    clearInterval(this.timer);
  }

  initMediaRecorder = () => {
    console.log('initMediaRecorder');

    try {
      const options = {};
      const types = ['video/webm;codecs=vp8', 'video/webm', ''];

      for (let i = 0; i < types.length; i + 1) {
        const type = types[i];

        if (MediaRecorder.isTypeSupported(type)) {
          options.mimeType = type;
          break;
        }
      }

      this.recorder = new MediaRecorder(this.stream, options);

      this.recorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          this.chunk.push(event.data);
        }
      };

      this.setState({ available: true });
    } catch (err) {
      this.setState({ available: false });
    }
  };

  start = () => {
    console.log('start');

    if (!this.state.available) {
      return;
    }

    this.setState({ countingdown: true });

    this.countdown = setInterval(() => {
      console.log('countdown');

      const { countdownValue } = this.state;

      this.setState({ countdownValue: countdownValue - 1 }, () => {
        if (this.state.countdownValue === 0) {
          this.props.onStart(this.stream);

          this.chunk = [];
          this.recorder.start(10);

          this.setState({ countingdown: false, recording: true }, () => {
            this.timer = setInterval(() => {
              console.log('timer');

              this.setState({ time: this.state.time + 1 });
            }, 1000);

            this.props.onStart(this.stream);

            clearInterval(this.countdown);
          });
        }
      });
    }, 1000);
  };

  stop = () => {
    console.log('stop');

    if (!this.state.available) {
      return;
    }

    this.recorder.stop();

    const blob = new Blob(this.chunk, { type: 'video/webm' });

    this.setState({ recording: false, stoped: true, url: window.URL.createObjectURL(blob) });

    clearInterval(this.timer);

    this.props.onStop(blob);
  };

  renderTimeState = () => {
    const { countingdown, recording } = this.state;

    if (countingdown) {
      return 'Recording will start in';
    } else if (recording) {
      const { time } = this.state;

      let minutes = parseInt(time / 60, 10);
      let seconds = parseInt(time % 60, 10);

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      return `${minutes}:${seconds}`;
    }

    return 'Start recording';
  };

  renderCountdown = () => {
    const { countdownValue } = this.state;
    return (
      <div className="countdown">
        {countdownValue} sec
        <style jsx>{countdownStyles}</style>
      </div>
    );
  };

  renderControls = () => {
    if (this.state.recording) {
      return <VideoRecorderButton state="stop" onClick={this.stop} />;
    }

    return <VideoRecorderButton state="start" onClick={this.start} />;
  };

  renderRecorder = () => {
    const { countingdown, stoped, url } = this.state;

    return stoped ? (
      <VideoPlayer src={url} />
    ) : (
      <Fragment>
        {/* eslint-disable-next-line */}
        <video
          autoPlay
          muted
          ref={(video) => {
            this.video = video;
          }}
        >
          Your browser does not support the video tag.
        </video>
        <div className="video-recorder-controls">
          <p>{this.renderTimeState()}</p>
          {countingdown ? this.renderCountdown() : this.renderControls()}
        </div>

        <style jsx>{controls}</style>
      </Fragment>
    );
  };

  render() {
    const { available } = this.state;

    return (
      <div className="video-recorder">
        {available ? (
          this.renderRecorder()
        ) : (
          <div className="video-unavailable">Sorry, video recording is unavailable.</div>
        )}

        <style jsx>{styles}</style>
        <style jsx>{unavailable}</style>
      </div>
    );
  }
}

VideoRecorder.propTypes = {
  onDenied: PropTypes.func,
  onGranted: PropTypes.func,
  // onPause,
  // onResume,
  onStart: PropTypes.func,
  onStop: PropTypes.func,
};

VideoRecorder.defaultProps = {
  onDenied: () => {},
  onGranted: () => {},
  onStart: () => {},
  onStop: () => {},
};
