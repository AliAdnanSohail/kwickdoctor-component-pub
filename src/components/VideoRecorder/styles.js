import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  .video-recorder {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border-radius: 25px;

    overflow: hidden;

    width: 100%;

    @media (min-width: 700px) {
      width: 640px;
    }
  }
`;

export const controls = css`
  .video-recorder-controls {
    position: absolute;
    bottom: 0;
    padding: 24px;

    width: 100%;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-bottom: 16px;

      color: #ffffff;
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }
  }
`;

export const countdown = css`
  .countdown {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 76px;
    width: 148px;

    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.4);

    color: #ffffff;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const unavailable = css`
  .video-unavailable {
    height: 480px;
    width: 640px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${settings.borderColor};

    font-size: 1.5rem;
    color: ${settings.textLightColor};
  }
`;
