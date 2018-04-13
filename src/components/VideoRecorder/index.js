import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import css from 'styled-jsx/css';

import styles from './styles';
import Recorder from './recorder';
import RecordButton from './RecordButton';
import VideoPlayer from '../VideoPlayer/';

export default class VideoRecorder extends Component {
  constructor(props) {
    super(props);
    this.recorder = new Recorder();
    this.state = {
      playingVideo: false,
    };
  }
  getVideoRef = (video) => {
    this.videoRef = video;
    this.getVideoSource();
  }

  getVideoSource = () => {
    this.recorder.getMediaDevices(this.setVideoSource);
  }
  setVideoSource = (stream) => {
    this.videoRef.srcObject = stream;
  }

  createRecordedVideoUrl = () => {
    const superBuffer = new Blob(this.recorder.recordedBlobs, { type: 'video/webm' });
    this.setState({
      videoUrl: window.URL.createObjectURL(superBuffer),
      playingVideo: !this.state.playingVideo,
      hasVideoRecorded: true,
    });
  }

  toggleRecording =() => {
    this.recorder.toggleRecording();
    if (this.recorder.hasVideoRecorded) {
      this.createRecordedVideoUrl();
    }
  }

  renderVideo = () => {
    if (!this.state.hasVideoRecorded) {
      return (
        <div className="video_container">
          <video
            autoPlay
            muted
            loop
            ref={this.getVideoRef}
          />
          <div className="video_controls">
            <RecordButton click={this.toggleRecording} />
          </div>
          <style>{styles}</style>
        </div>);
    }
    return (<VideoPlayer src={this.state.videoUrl} />);
  }

  render() {
    return this.renderVideo();
  }
}

