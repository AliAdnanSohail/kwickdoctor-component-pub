import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  BigPlayButton,
  ControlBar,
  CurrentTimeDisplay,
  DurationDisplay,
  FullscreenToggle,
  Player,
  PlayToggle,
  ProgressControl,
  TimeDivider,
  VolumeMenuButton,
} from 'video-react';

import styles, { videoPlayer } from './styles';

export default class VideoPlayer extends Component {
  render() {
    const { containerClassName, muted, src } = this.props;

    return (
      <div className={classnames('video-player-container', containerClassName)}>
        {src ? (
          <Player playsInline fluid muted={muted} className="video-player">
            <source src={src} />
            <ControlBar className="video-player__control-bar">
              <PlayToggle disabled />
              <VolumeMenuButton disabled />
              <CurrentTimeDisplay disabled />
              <TimeDivider disabled />
              <DurationDisplay disabled />
              <ProgressControl className="video-player__progress" order={1.1} />
              <FullscreenToggle className="video-player__fullscreen-button" order={1.2} />
            </ControlBar>
            <BigPlayButton position="center" className="video-player__big-play-button" order={2} />
          </Player>
        ) : (
          <i className="material-icons">videocam_off</i>
        )}
        <style jsx>{styles}</style>
        <style>{videoPlayer}</style>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  containerClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  muted: PropTypes.bool,
  src: PropTypes.string.isRequired,
};

VideoPlayer.defaultProps = {
  containerClassName: '',
  muted: false,
};
