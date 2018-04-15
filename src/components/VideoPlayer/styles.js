import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  .videoPlayer_container {
    position: absolute;
  }

  .videoPlayer_controls {
    position: absolute;
    bottom: -10px;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    z-index: 2147483648;
  }

  button {
    margin: 0 3px 10px 0;
    padding-left: 2px;
    padding-right: 2px;
    width: 99px;
  }

  video {
    width: 100%;
    vertical-align: top;
    object-fit: fill;
  }

  .fullscreen_button {
    position: absolute;
    top: 15px;
    right: 15px;
    margin: 0;
  }

  .playPause_button {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* hide the default Chrome video player styling */

  video::-webkit-media-controls-overlay-enclosure {
    display: none !important;
  }

  video::-webkit-media-controls-enclosure {
    display: none !important;
  }

  video::-webkit-media-controls {
    display: none !important;
  }

  /*  Needed to hide player controls in Safari Only */

  video::-webkit-media-controls-panel {
    display: none !important;
  }

  video::-webkit-media-controls-play-button {
    display: none !important;
  }

  video::-webkit-media-controls-current-time-display {
    display: none !important;
  }

  video::-webkit-media-controls-time-remaining-display {
    display: none !important;
  }

  video::-webkit-media-controls-timeline {
    display: none !important;
  }

  video::-webkit-media-controls-mute-button {
    display: none !important;
  }

  video::-webkit-media-controls-volume-slider {
    display: none !important;
  }

  video::-webkit-media-controls-fullscreen-button {
    display: none !important;
  }

  video::-internal-media-controls-download-button {
    display: none !important;
  }

  /* Firefox Shadow DOM Fix */

  *::-moz-list-bullet,
  *::-moz-list-number {
    display: none !important;
  }

  *::-moz-meter-bar {
    display: none !important;
  }

  :-moz-full-screen:not(:root)::backdrop {
    display: none !important;
  }

  *::backdrop {
    display: none !important;
  }

  :fullscreen:not(:root) {
    display: none !important;
  }
  video::-webkit-media-controls-enclosure {
    display: none !important;
  }

  @media screen and (max-width: 500px) {
    button {
      font-size: 0.8em;
      width: calc(33% - 5px);
    }
  }

  @media screen and (max-width: 720px) {
    video {
      height: calc((50vw - 48px) * 3 / 4);
      margin: 0 10px 10px 0;
      width: calc(50vw - 48px);
    }
  }
`;