import css from 'styled-jsx/css';
import 'video-react/dist/video-react.css';

import settings from '../../utils/style-helper';

export default css`
  .video-player-container {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    overflow: hidden;

    width: 100%;
    min-height: 480px;

    background-color: ${settings.borderColor};

    @media (min-width: 700px) {
      width: 640px;
    }
  }
`;

export const videoPlayer = css`
  .video-player {
    &:hover {
      .video-player__big-play-button.video-react-big-play-button {
        background-color: rgba(255, 255, 255, 0.4);
      }
    }

    &__big-play-button.video-react-big-play-button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      width: 76px;
      height: 76px;

      padding: 0;
      margin-top: -38px;
      margin-left: -38px;

      border-width: 0;
      border-radius: 50%;

      background-color: rgba(255, 255, 255, 0.4);

      cursor: pointer;

      &:focus {
        outline: none;
      }

      &:before {
        font-size: 3rem;
        color: #ffffff;

        position: static;
      }
    }

    &__control-bar.video-react-control-bar {
      position: static;
      height: 0;
    }

    &__progress.video-react-progress-control {
      position: absolute;
      bottom: 30px;
      left: 50%;

      height: 30px;
      width: 300px;

      margin-left: -150px;

      .video-react-load-progress,
      .video-react-progress-holder {
        height: 3px;
        border-radius: 3px;
      }

      .video-react-progress-holder .video-react-play-progress {
        border-radius: 3px;
      }
    }

    &__fullscreen-button.video-react-fullscreen-control {
      position: absolute;
      top: 24px;
      right: 24px;

      height: 30px;
      padding: 6px 12px;

      background-color: rgba(42, 42, 48, 0.5);
      border-radius: 6px;
    }
  }
`;
