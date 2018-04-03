import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  .button {
    padding: 13px 54px;
    height: 52px;

    background-color: ${settings.primaryColor};
    box-sizing: border-box;
    cursor: pointer;

    color: #ffffff;

    line-height: 26px;

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

    &--accent {
      color: ${settings.primaryColor};
      background-color: #ffffff;
      border-color: #ffffff;
    }

    &--danger {
      color: #ffffff;
      background-color: #ea6577;
      border-color: #ea6577;
    }

    &--rounded {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      padding: 0;
      border-radius: 50%;
    }

    &--squared {
      border-radius: 12px;
    }

    &--transparent {
      background-color: transparent;
      box-shadow: 0px 0px 10px rgba(12, 151, 249, 0.15);

      color: ${settings.textColor};
    }

    svg {
      fill: #ffffff;
      stroke: #ffffff;
    }
  }
`;
