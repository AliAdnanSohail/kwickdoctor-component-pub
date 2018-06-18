import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles, { controls, countdown as countdownStyles, unavailable } from './styles';
import VideoRecorderButton from './VideoRecorderButton';

export default class VideoRecorder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      available: true,
      countingdown: false,
      countdownValue: 5,
      recording: false,
      time: 0,
    };

    this.stream = null;
    this.recorder = null;
    this.chunk = [];
  }

  componentDidMount() {
    if (navigator.mediaDevices) {
      const handleSuccess = (stream) => {
        this.video.srcObject = stream;
        this.stream = stream;

        this.chunk = [];

        this.initMediaRecorder();

        this.props.onGranted();

        this.setState({ available: true });
      };

      const handleFailed = (error) => {
        this.props.onDenied(error);
        this.setState({ available: false });
      };

      navigator.mediaDevices
        .getUserMedia({ audio: true, video: true })
        .then(handleSuccess)
        .catch(handleFailed);
    }
  }

  componentWillUnmount() {
    this.recorder = null;
    this.chunk = [];

    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }

    clearInterval(this.countdown);
    clearInterval(this.timer);
  }

  initMediaRecorder = () => {
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

  handleStart = () => {
    if (!this.state.available) {
      return;
    }

    const { limit, onStart, onStop } = this.props;

    this.setState({ countingdown: true });

    this.countdown = setInterval(() => {
      const { countdownValue } = this.state;

      this.setState({ countdownValue: countdownValue - 1 }, () => {
        if (this.state.countdownValue === 0) {
          clearInterval(this.countdown);

          this.chunk = [];

          this.recorder.start(10);

          this.setState({ countingdown: false, recording: true }, () => {
            onStart(this.stream);

            this.timer = setInterval(() => {
              const { time } = this.state;

              if (limit > 0 && limit - 1 <= time) {
                clearInterval(this.timer);

                this.recorder.stop();

                const blob = new Blob(this.chunk, { type: 'video/webm' });

                this.setState({ recording: false, countdownValue: 5, time: 0 });

                onStop(blob);
              } else {
                this.setState({ time: time + 1 });
              }
            }, 1000);
          });
        }
      });
    }, 1000);
  };

  handleStop = () => {
    if (!this.state.available) {
      return;
    }

    clearInterval(this.timer);

    this.recorder.stop();

    const blob = new Blob(this.chunk, { type: 'video/webm' });

    this.setState({ recording: false, countdownValue: 5, time: 0 });

    this.props.onStop(blob);
  };

  renderTimeState = () => {
    const { countingdown, recording } = this.state;

    if (countingdown) {
      return 'Recording will start in';
    } else if (recording) {
      const { time } = this.state;

      const minutes = parseInt(time / 60, 10);
      const seconds = parseInt(time % 60, 10);

      return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
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
      return <VideoRecorderButton state="stop" onClick={this.handleStop} />;
    }

    return <VideoRecorderButton state="start" onClick={this.handleStart} />;
  };

  renderRecorder = () => {
    const { countingdown } = this.state;
    return (
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
  limit: PropTypes.number,
  onDenied: PropTypes.func,
  onGranted: PropTypes.func,
  onStart: PropTypes.func,
  onStop: PropTypes.func,
};

VideoRecorder.defaultProps = {
  limit: null,
  onDenied: () => {},
  onGranted: () => {},
  onStart: () => {},
  onStop: () => {},
};
