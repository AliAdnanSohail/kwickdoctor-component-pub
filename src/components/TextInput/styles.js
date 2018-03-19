import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  div {
    width: 100%;
    position: relative;
  }
  .text-input {
    border: 2px solid #E7E7F0;	
    border-radius: 4px;	
    background-color: #FFFFFF;
    color: ${settings.textColor};
    padding: 12px 16px;
    width: 100%;
    min-height: 44px;
    min-width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    font: {
      style: normal;
      weight: normal;
      size: 0.875rem;
    }

    ::-webkit-input-placeholder {
      color: ${settings.placeholderColor};
    }

    ::-moz-placeholder {
      color: ${settings.placeholderColor};
    }

    :-ms-input-placeholder {
      color: ${settings.placeholderColor};
    }

    :-moz-placeholder {
      color: ${settings.placeholderColor};
    }

    :focus {
      outline: none;
      padding: 12px 16px;
      border-color: ${settings.primaryColor};
    }
    &.error,  &.error:focus{
      border-color: ${settings.errorColor};
    }
  }
  label {
    color: ${settings.textColor};
    display: block;
    font-weight: 500;
    padding-bottom: 5px;
  }
  .input-error {
    position: absolute;
    padding: 11px 16px;
    border-radius: 3px;	
    background-color: #FFFFFF;	
    box-shadow: 0 2px 14px 0 rgba(0,0,0,0.14);
    max-width: 50%;
    width: auto;
    font-size: 0.875rem;
    font-weight: 500;
    left: 16px;
    margin-top: -6px;
    color: ${settings.errorColor};
    &::after{
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      margin-left: -0.5em;
      top: 0;
      left: 3em;
      box-sizing: border-box;
      border: 0.4em solid black;
      border-color: transparent transparent #FFFFFF #FFFFFF;
      transform-origin: 0 0;
      transform: rotate(135deg);
      box-shadow: -2px 2px 4px 0 rgba(0, 0, 0, 0.1);
    }
  }

`;
