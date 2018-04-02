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
    max-width: 50%;

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

    :before {
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
  label {
    color: ${settings.textColor};
    display: block;
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

    &.invalid,
    &.invalid:focus {
      border-color: ${settings.errorColor};
    }
  }
`;
