import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export default css`
  .fieldset,
  .legend {
    padding: 0;
  }

  .radio-buttons {
    display: flex;
    flex-direction: row;

    > label {
      flex-grow: 1;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }

  .radio-button {
    display: block;

    position: relative;

    padding: 12px 0;
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

    &:first-child {
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
