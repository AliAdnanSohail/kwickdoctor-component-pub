import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export const button = css`button { color: hotpink; }`;

export default css`
  .button-group .button {
    padding: 13px 54px;
    height: 52px;
    box-sizing: border-box;
    cursor: pointer;
    line-height: 26px;
    color: ${settings.secondaryColor};
    background-color: #fff;

    border: {
      width: 1px;
      style: solid;
      color: #d5d6d8;
      radius: 0px;
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
    margin-left: -1px;
    transition: all 0.2s;
  }

  .button-group .button.active, .button-group .button:hover, .button-group .button:active, .button-group .button:focus {
    color: #fff;
    background-color: ${settings.secondaryColor};
  }

  .button-group .button:first-child {
    border: {
      top-left-radius: 26px;
      bottom-left-radius: 26px;
    }
  }

  .button-group .button:last-child {
    border: {
      top-right-radius: 26px;
      bottom-right-radius: 26px;
    }
  }

  .button-group.button-group-primary .button {
    border: {
      color: ${settings.primaryColor};
    }
    color: ${settings.primaryColor};
  }

  .button-group.button-group-primary .button.active, .button-group.button-group-primary .button:hover, .button-group.button-group-primary .button:active, .button-group.button-group-primary .button:focus {
    color: #fff;
    background-color: ${settings.primaryColor};
  }
`;
