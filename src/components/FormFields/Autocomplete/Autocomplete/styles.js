import css from 'styled-jsx/css';

import settings from '../../../../utils/style-helper';

export default css`
  .autocomplete {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    position: relative;

    padding: 5px;

    width: 100%;
    min-width: 100%;
    max-width: 100%;
    min-height: 48px;

    background-color: #ffffff;
    box-sizing: border-box;

    border: {
      width: 2px;
      style: solid;
      color: ${settings.borderColor};
      radius: 4px;
    }

    &.focused,
    &:focus {
      outline: none;
      border-color: ${settings.primaryColor};
    }

    &.invalid,
    &.invalid:focus {
      border-color: ${settings.errorColor};
    }

    &__input {
      position: relative;
      margin: 5px 11px;

      input {
        line-height: 16px;
        background: transparent;

        border: none;
        border-radius: inherit;

        font: {
          style: normal;
          weight: normal;
          size: 0.875rem;
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
        }
      }
    }
  }
`;
