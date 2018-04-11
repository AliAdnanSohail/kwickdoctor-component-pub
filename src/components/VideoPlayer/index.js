import React, { Component } from 'react';

import css from 'styled-jsx/css';
import classnames from 'classnames';
import RecordButton from './buttons/';
import Slider from './slider';
import styles from './styles';

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playingVideo: false,
      videoProgress: 0,
    };
  }

  getVideoRef = (video) => {
    this.videoRef = video;
    console.log('getVideoSource');
    this.getVideoSource();
  }

  getVideoSource = () => {
    console.log('getVideoSource');
    this.playVideo();
  }


    setVideoProgress = (progress) => {
      if (this.videoRef) {
        const time = Math.round((progress / 100) * this.videoRef.duration);
        this.videoRef.currentTime = time;
        // this.videoRef.oncanplay = () => {
        //   delete this.videoRef.oncanplay;
        // };
      }
    }

    calcVideoProgress = () => {
      let value = 0;
      if (this.videoRef) {
        value = Math.round((100 / this.videoRef.duration) * this.videoRef.currentTime);
        this.setState({ videoProgress: value });
      }
      return value;
    }

    initVideo = () => {
      if (this.videoRef) {
        this.videoRef.play();
        this.videoRef.loop = true;
        // this.videoRef.muted = true;
        this.videoRef.ontimeupdate = this.calcVideoProgress;
      }
    }

    playVideo = () => {
      console.log('play');
      this.setState({ playingVideo: !this.state.playingVideo });
      this.initVideo();
    }

    pauseVideo = () => {
      console.log('pauseVideo');
      this.videoRef.pause();
    }
    playVideos = () => {
      this.setVideoProgress(this.state.videoProgress);
      this.videoRef.play();
    }

    render() {
      // this.getMediaDevices();
      return (
        <div className="videoPlayer_container">
          <video
            ref={this.getVideoRef}
          >
            <source src="https://www.apacara.com/media/video/myVideo.webm" type="video/webm" />
            <source src="https://www.apacara.com/media/video/myVideo.mp4" type="video/mp4" />
            <source src="https://www.apacara.com/media/video/myVideo.ogv" type="video/ogg" />
        Your browser doesn't support HTML5 video tag.

          </video>

          <Slider
            value={this.state.videoProgress}
            onChange={(event) => { this.setState({ videoProgress: event.target.value }); }}
            onMousedown={this.pauseVideo}
            onMouseup={this.playVideos}
          />
          <button onClick={() => this.videoRef.play()}>play</button>
          <h4>{this.state.playingVideo ? this.state.videoProgress : 'no playing video'}</h4>
          <style>{styles}</style>
        </div>
      );
    }
}

// onChange={(event) => { this.setVideoProgress(event.target.value); }}
