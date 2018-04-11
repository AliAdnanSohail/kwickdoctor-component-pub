import React, { Component } from 'react';
import classnames from 'classnames';
import css from 'styled-jsx/css';

import styles from './styles';
import Slider from './slider';
import Recorder from './recorder';
import RecordButton from './buttons';

export default class VideoRecorder extends Component {
  constructor(props) {
    super(props);
    this.recorder = new Recorder();
    this.state = {
      playingVideo: false,
      videoDuration: 0,
      currentTime: 0,
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

  checkRecordedVideo = () => this.recorder.hasVideoRecorded;

  getVideoControls = () => {
    if (this.hasVideoRecorded) {
      return (
        <Slider
          value={this.state.videoProgress}
          onChange={(event) => { this.setVideoProgress(event.target.value); }}
          onmousedown={() => this.video.pause()}
          onmouseup={() => this.video.play()}
        />
      );
    }

    return (<RecordButton click={this.recorder.toggleRecording} />);
  }

  playRecordedVideo = () => {
    this.setState({ playingVideo: !this.state.playingVideo });
    const superBuffer = new Blob(this.recordedBlobs, { type: 'video/webm' });
    this.videoRef.src = window.URL.createObjectURL(superBuffer);
    this.videoRef.autoplay = true;
    this.videoRef.loop = true;
    this.videoRef.mute = false;
    this.videoRef.ontimeupdate = () => {
      this.setState({ currentTime: this.videoRef.currentTime });
    };
  }

  render() {
    this.checkRecordedVideo();
    return (
      <div className="video_container">
        <video
          autoPlay
          muted
          loop
          ref={this.getVideoRef}
        />
        <div className="video_controls">
          {this.getVideoControls()}
        </div>
        <style>{styles}</style>
      </div>
    );
  }
}

