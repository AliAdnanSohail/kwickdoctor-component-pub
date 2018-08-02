import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  .button {
    display: inline-block;
    position: relative;

    padding: 13px 64px;
    height: 52px;

    background-color: ${settings.primaryColor};
    box-sizing: border-box;
    cursor: pointer;

    color: #ffffff;
    text-decoration: none;

    line-height: 26px;

    transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out;

    overflow: hidden;

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

    &.button--with-icon .button__content {
      transform: translateX(16px);
    }

    &:hover,
    &:focus {
      background-color: ${settings.primaryLightColor};
      border-color: ${settings.primaryLightColor};
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    }

    &--flat {
      color: ${settings.primaryColor};
      background-color: transparent;
      border-color: transparent;

      .material-icons {
        color: ${settings.textColor};
      }

      &:hover,
      &:focus {
        color: ${settings.primaryColor};
        background-color: transparent;
        border-color: transparent;
        box-shadow: none;
      }
    }

    &--accent {
      color: ${settings.primaryColor};
      background-color: transparent;
      border-color: transparent;

      .material-icons {
        color: ${settings.textColor};
      }

      &:hover,
      &:focus {
        color: ${settings.primaryColor};
        background-color: transparent;
        border-color: transparent;
      }
    }

    &--danger {
      color: #ffffff;
      background-color: ${settings.dangerColor};
      border-color: ${settings.dangerColor};

      &:hover,
      &:focus {
        background-color: ${settings.dangerLightColor};
        border-color: ${settings.dangerLightColor};
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

    &:not(.button--rounded) .button__icon {
      position: absolute;
      top: calc(50% - 12px);
      left: 32px;
    }

    &--squared {
      border-radius: 12px;
    }

    &--transparent {
      background-color: transparent;
      box-shadow: 0px 0px 10px rgba(12, 151, 249, 0.15);

      color: ${settings.primaryColor};

      &:hover,
      &:focus {
        color: #ffffff;
      }

      .button__icon .material-icons {
        color: ${settings.textColor};
      }
    }

    &.button--xsmall {
      height: 32px;
      line-height: 30px;

      padding: 0 32px;

      font-size: 0.75rem;

      &.button--rounded {
        width: 32px;
        height: 32px;
      }

      .button__icon {
        width: 18px;
        height: 18px;

        .material-icons {
          font-size: 18px;
        }
      }

      &:not(.button--rounded) :global(.button__icon) {
        left: 16px;
        top: calc(50% - 9px);
      }
    }

    &--small {
      height: 42px;
      line-height: 40px;

      padding: 0 42px;

      font-size: 0.875rem;

      &.button--rounded {
        width: 42px;
        height: 42px;
      }

      .button__icon {
        width: 18px;
        height: 18px;

        .material-icons {
          font-size: 18px;
        }
      }

      &:not(.button--rounded) :global(.button__icon) {
        left: 21px;
        top: calc(50% - 9px);
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
      transform: rotate(360deg);
    }
  }
`;
