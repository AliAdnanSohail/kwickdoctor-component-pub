import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export const button = css`button { color: hotpink; }`;

export default css`
  .button-group .button {
    display: inline-block;
    position: relative;
    padding: 10px 51px 10px 52px;
    height: 52px;
    box-sizing: border-box;
    line-height: 32px;
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

  .button input[type="radio"] {
    display: block;
    cursor: pointer;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 2;
    width:  100%;
    height: 100%;
    opacity: 0;
  }
`;
