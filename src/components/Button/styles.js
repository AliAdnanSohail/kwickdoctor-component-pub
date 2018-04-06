import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  .button {
    position: relative;

    padding: 13px 64px;
    height: 52px;

    background-color: ${settings.primaryColor};
    box-sizing: border-box;
    cursor: pointer;

    color: #ffffff;

    line-height: 26px;

    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

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

    &__loading-icon {
      width: 18px;
      height: 18px;
    }

    &__content {
      display: inline-block;
      transition: all 0.3s ease-in-out;
    }

    &:not(&--disabled) {
      &:hover,
      &:focus {
        background-color: ${settings.primaryLightColor};
        border-color: ${settings.primaryLightColor};
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
      }
    }

    &:not(&--rounded) {
      .button__loading-icon {
        position: absolute;
        top: calc(50% - 9px);
        left: 32px;
      }
    }

    &--accent {
      color: ${settings.primaryColor};
      background-color: #ffffff;
      border-color: #ffffff;

      &:not(.button--disabled) {
        &:hover,
        &:focus {
          color: #ffffff;
        }
      }
    }

    &--danger {
      color: #ffffff;
      background-color: ${settings.dangerColor};
      border-color: ${settings.dangerColor};

      &:not(.button--disabled) {
        &:hover,
        &:focus {
          background-color: ${settings.dangerLightColor};
          border-color: ${settings.dangerLightColor};
        }
      }
    }

    &--disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &--loading &__content {
      transform: translateX(9px);
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

      &:not(.button--disabled) {
        &:hover,
        &:focus {
          color: #ffffff;
        }
      }
    }

    svg {
      fill: #ffffff;
      stroke: #ffffff;

      circle {
        stroke: #ffffff;
      }
    }
  }
`;
