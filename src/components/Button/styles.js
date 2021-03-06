import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  .button {
    position: relative;
    display: flex;
    align-item: center;
    justify-content: center;

    padding: 13px 64px;
    height: 52px;

    background-color: ${settings.primaryColor};
    box-sizing: border-box;
    cursor: pointer;

    color: #ffffff;

    line-height: 22px;

    transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out;

    overflow: hidden;

    border: {
      width: 2px;
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

    &:focus {
      outline: none;
    }

    &__content {
      display: inline-block;
      transition: all 0.3s ease-in-out;
    }

    &__icon {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .material-icons {
        color: #ffffff;
      }
    }

    &__loading-icon {
      width: 24px;
      height: 24px;
      transform-origin: center;

      animation: {
        name: rotate;
        duration: 1s;
        iteration-count: infinite;
        timing-function: ease-in-out;
      }
    }

    &__wave {
      position: absolute;
      display: block;
      width: 0;
      height: 0;

      border-radius: 50%;
      background-color: #ffffff;

      opacity: 0.5;

      transform: translate(-50%, -50%);
    }

    &--with-icon &__content {
      transform: translateX(6px);
    }

    &--disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(&--disabled) {
      &:hover,
      &:focus {
        background-color: ${settings.primaryLightColor};
        border-color: ${settings.primaryLightColor};
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
      }
    }

    &--flat {
      color: ${settings.primaryColor};
      background-color: transparent;
      border-color: transparent;

      .material-icons {
        color: ${settings.textColor};
      }

      &:not(.button--disabled) {
        &:hover,
        &:focus {
          color: ${settings.primaryColor};
          background-color: transparent;
          border-color: transparent;
          box-shadow: none;
        }
      }
    }

    &--accent {
      color: ${settings.primaryColor};
      background-color: transparent;
      border-color: transparent;

      .material-icons {
        color: ${settings.textColor};
      }

      &:not(.button--disabled) {
        &:hover,
        &:focus {
          color: ${settings.primaryColor};
          background-color: transparent;
          border-color: transparent;
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

    &--rounded {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      width: 52px;
      height: 52px;

      padding: 0 !important;
      border-radius: 50%;
    }

    &--squared {
      border-radius: 12px;
    }

    &--transparent {
      background-color: transparent;
      // box-shadow: 0px 0px 10px rgba(12, 151, 249, 0.15);

      color: ${settings.primaryColor};

      &:not(.button--disabled) {
        &:hover,
        &:focus {
          color: #ffffff;
        }
      }

      .button__icon .material-icons {
        color: ${settings.textColor};
      }
    }

    &:not(&--rounded) .button__icon {
      position: relative;
      top: -2px;
    }

    &--small {
      height: 42px;
      line-height: 1;

      padding: 0 42px;

      font-size: 0.875rem;

      &.button--rounded {
        width: 42px;
        height: 42px;
      }

      .button__icon {
        width: 17px;
        height: 17px;

        .material-icons {
          font-size: 18px;
        }
      }
      
      &:not(&--rounded) .button__icon {
        top: 0;
      }
    }

    &--xsmall {
      height: 32px;
      line-height: 1;

      padding: 0 32px;

      font-size: 0.75rem;

      &.button--rounded {
        width: 32px;
        height: 32px;
      }

      .button__icon {
        width: 13px;
        height: 13px;

        .material-icons {
          font-size: 18px;
        }
      }
      
      &:not(&--rounded) .button__icon {
        top: 0;
      }
    }

    &.has-clicked .button__wave {
      animation: wave 0.8s;
    }
  }

  @keyframes wave {
    0% {
      opacity: 0.5;

      width: 0;
      height: 0;
    }
    100% {
      opacity: 0;

      width: 300px;
      height: 300px;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
