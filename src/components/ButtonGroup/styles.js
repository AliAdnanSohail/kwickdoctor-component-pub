import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export const button = css`button { color: hotpink; }`;

export default css`
  .radio-button-group .button {
    display: inline-block;
    position: relative;
    padding: 10px 51px 10px 52px;
    height: 52px;
    box-sizing: border-box;
    line-height: 26px;
    color: ${settings.secondaryColor};
    background-color: #fff;
    cursor: pointer;

    border: {
      width: 1px;
      style: solid;
      color: #d5d6d8;
      radius: 0px;
    }

    font: {
      style: normal;
      weight: 500;
      size: 0.875rem;
    }

    text: {
      align: center;
      transform: uppercase;
    }
    margin-left: -1px;
    transition: all 0.2s;
  }

  .radio-button-group .button.active, .radio-button-group .button:hover, .radio-button-group .button:active, .radio-button-group .button:focus {
    color: #fff;
    background-color: ${settings.secondaryColor};
  }

  .radio-button-group .button:first-child {
    border: {
      top-left-radius: 26px;
      bottom-left-radius: 26px;
    }
  }

  .radio-button-group .button:last-child {
    border: {
      top-right-radius: 26px;
      bottom-right-radius: 26px;
    }
  }

  .radio-button-group.button-group-primary .button {
    border: {
      color: ${settings.primaryColor};
    }
    color: ${settings.primaryColor};
  }

  .radio-button-group.primary .button.active, .radio-button-group.primary .button:hover, .radio-button-group.primary .button:active, .radio-button-group.primary .button:focus {
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
    display: none;
  }

  fieldset {
    border: none;
  }

  legend {
    font-weight: bold;
    font-size: 0.875rem;
    text-transform: capitalize;
    margin-bottom: 0.875rem;
  }
`;
