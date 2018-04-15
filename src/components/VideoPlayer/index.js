import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';

import Slider from './Slider';
import FullScreenButton from './FullScreenButton';
import PlayPauseButton from './PlayPauseButton';
import styles from './styles';

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playingVideo: false,
      videoProgress: 0,
      playing: true,
    };
    this.checkFullScreenSupport();
  }

  getVideoRef = (video) => {
    this.videoRef = video;
    this.initVideo();
  }
  getVideoContainerRef = (elem) => {
    this.containerRef = elem;
  }

    setVideoProgress = (progress) => {
      if (this.videoRef) {
        const time = Math.round((progress / 100) * this.videoRef.duration);
        if (this.videoRef.currentTime !== time) {
          this.videoRef.currentTime = time;
        }
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
        this.setState({ playingVideo: !this.state.playingVideo });
        this.videoRef.loop = true;
        // this.videoRef.muted = true;
        console.log(this.videoRef.duration);
        this.videoRef.ontimeupdate = this.calcVideoProgress;
        this.playPromise = this.videoRef.play();
      }
    }

    pauseVideo = () => {
      if (this.playPromise !== undefined) {
        this.playPromise.then(() => {
          this.videoRef.pause();
        }).catch((error) => {
          console.error(error);
        });
      }
    }

    checkFullScreenSupport = () => {
      if ('fullscreenEnabled' in document || 'webkitFullscreenEnabled' in document || 'mozFullScreenEnabled' in document || 'msFullscreenEnabled' in document) {
        if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
          return true;
        }
      }
      return false;
    }

    makeAllControlsVIsible = () => {}

    playFullScreen = () => {
      // check if user allows full screen of elements. This can be enabled or disabled in browser config. By default its enabled.
      // its also used to check if browser supports full screen api.
      if (this.checkFullScreenSupport()) {
        // requestFullscreen is used to display an this.videoRef in full screen mode.
        if ('requestFullscreen' in this.containerRef) {
          this.containerRef.requestFullscreen();
        } else if ('webkitRequestFullscreen' in this.containerRef) {
          this.containerRef.webkitRequestFullscreen();
        } else if ('mozRequestFullScreen' in this.containerRef) {
          this.containerRef.mozRequestFullScreen();
        } else if ('msRequestFullscreen' in this.containerRef) {
          this.containerRef.msRequestFullscreen();
        }
        this.containerRef.controls = false;
      } else {
        console.log("User doesn't allow full screen");
      }
    }

      screenChange = () => {
        // fullscreenElement is assigned to html element if any element is in full screen mode.
        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
          console.log(`Current full screen element is : ${document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement}`);
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
      }

      playVideo = () => {
        this.playPromise = this.videoRef.play();
      };

      togglePlayPause = () => {
        if (this.state.playing) {
          this.pauseVideo();
          this.setState({ playing: false });
        } else {
          this.playVideo();
          this.setState({ playing: true });
        }
      }


      render() {
      // this.getMediaDevices();
        return (
          <div
            className="videoPlaycer_container"
            ref={this.getVideoContainerRef}
          >
            
            <FullScreenButton className="fullscreen_button" onClick={() => this.playFullScreen()} />
            <video
              ref={this.getVideoRef}
              src={this.props.src}
            />
            <div className="videoPlayer_controls">
              <Slider
                value={this.state.videoProgress}
                onChange={(value) => {
                  this.setState({ videoProgress: value });
                  this.setVideoProgress(value);
                }}
                onMousedown={this.pauseVideo}
                onMouseup={this.playVideo}
              />
            </div>
            <style>{styles}</style>
          </div>
        );
      }
}


VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};
// onChange={(event) => { this.setVideoProgress(event.target.value); }}
