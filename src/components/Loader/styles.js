import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  .loader {
    position: relative;
    margin: 0px auto;
    width: 100px;
    height: 100px;
    zoom: 1;
  }

  .circular {
    animation: rotate 1s linear infinite;
    height: 100px;
    position: relative;
    width: 100px;
  }

  .path {
    stroke: ${settings.primaryColor};
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite;
    stroke-linecap: round;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
`;
