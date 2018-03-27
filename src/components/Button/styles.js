import css from 'styled-jsx/css';
import settings from '../../utils/style-helper';

export default css`
  .button {
    padding: 13px 54px;

    background-color: ${settings.primaryColor};
    box-sizing: border-box;
    cursor: pointer;

    color: #ffffff;

    line-height: 26px;

    height: 52px;

    border: {
      width: 1px;
      style: solid;
      color: ${settings.primaryColor};
      radius: 26px;
    }

    font: {
      style: normal;
      weight: 500;
      size: 1rem;
    }

    text: {
      align: center;
      transform: uppercase;
    }

    &--transparent {
      background-color: transparent;
      box-shadow: 0px 0px 10px rgba(12, 151, 249, 0.15);

      color: ${settings.primaryColor};
    }

    &--squared {
      border-radius: 12px;
    }

    &--accent {
      color: ${settings.primaryColor};
      background-color: #ffffff;
      border-color: #ffffff;
    }
    &--circle {
      border: none;
      border-radius: 50px;

      width: 50px;
      height: 50px;

      text-align: center;
      padding: 0;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .grommetux-control-icon {
        fill: #fff;
      }
    }
  }
`;
