import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  .form-field {
    position: relative;
  }
`;

export const error = css`
  .error {
    position: absolute;
    left: 16px;

    width: auto;
    max-width: calc(100% - 32px);

    box-sizing: border-box;
    word-wrap: break-word;

    padding: 12px 16px;
    margin-top: -6px;

    border-radius: 3px;
    background-color: #ffffff;
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.05);
    color: ${settings.errorColor};

    z-index: 999;

    font: {
      size: 0.875rem;
      weight: 500;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 32px;

      width: 0;
      height: 0;

      transform-origin: 0 0;
      transform: rotate(135deg);

      box: {
        sizing: border-box;
        shadow: -4px 4px 14px 0 rgba(0, 0, 0, 0.05);
      }

      border: {
        width: 6px;
        style: solid;
        color: transparent transparent #ffffff #ffffff;
      }
    }
  }
`;

export const label = css`
  label,
  legend {
    color: ${settings.textColor};
    display: inline-block;
    margin-bottom: 6px;

    font: {
      weight: 500;
      size: 1rem;
    }
  }
`;

export const textInput = css`
  input,
  textarea {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    min-height: 44px;
    padding: 12px 16px;

    background-color: #ffffff;
    color: ${settings.textColor};
    box-sizing: border-box;

    font: {
      style: normal;
      weight: normal;
      size: 0.875rem;
    }

    border: {
      width: 2px;
      style: solid;
      color: ${settings.borderColor};
      radius: 4px;
    }

    &::-webkit-input-placeholder {
      color: ${settings.placeholderColor};
    }

    &::-moz-placeholder {
      color: ${settings.placeholderColor};
    }

    &:-ms-input-placeholder {
      color: ${settings.placeholderColor};
    }

    &:-moz-placeholder {
      color: ${settings.placeholderColor};
    }

    &:focus {
      outline: none;
      padding: 12px 16px;
      border-color: ${settings.primaryColor};
    }

    &.invalid,
    &.invalid:focus {
      border-color: ${settings.errorColor};
    }
  }
`;

export const radioButton = css`
  .radio-button {
    display: inline-block;

    position: relative;

    padding: 12px 34px;
    margin-right: -2px;

    box-sizing: border-box;

    cursor: pointer;

    color: ${settings.textColor};

    transition: all 0.3s ease-in-out;

    font: {
      style: normal;
      weight: normal;
      size: 0.875rem;
    }

    text: {
      align: center;
      transform: uppercase;
    }

    border: {
      width: 2px;
      style: solid;
      color: ${settings.primaryColor};
      radius: 0;
    }

    &:nth-child(2) {
      border: {
        top-left-radius: 26px;
        bottom-left-radius: 26px;
      }
    }

    &:last-child {
      border: {
        top-right-radius: 26px;
        bottom-right-radius: 26px;
      }
    }

    &--active {
      color: #ffffff;
      background-color: ${settings.primaryColor};
    }

    input[type='radio'] {
      position: absolute !important;
      clip: rect(1px 1px 1px 1px);
      clip: rect(1px, 1px, 1px, 1px);
      padding: 0 !important;
      border: 0 !important;
      height: 1px !important;
      width: 1px !important;
      overflow: hidden;
    }
  }
`;

export const fieldset = css`
  fieldset {
    margin: 0;
    border: none;

    label {
      margin: 0;
    }
  }
`;
