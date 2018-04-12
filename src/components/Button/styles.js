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

    transition: background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

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

    :global(&__loading-icon) {
      width: 18px;
      height: 18px;
    }

    :global(&__content) {
      display: inline-block;
      transition: all 0.3s ease-in-out;
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

    &:not(&--disabled) {
      &:hover,
      &:focus {
        background-color: ${settings.primaryLightColor};
        border-color: ${settings.primaryLightColor};
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
      }
    }

    &:not(&--rounded) {
      :global(.button__loading-icon) {
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

    &--loading :global(&__content) {
      transform: translateX(16px);
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

    &.has-clicked {
      .button__wave {
        animation: wave 0.8s;
      }
    }

    :global(svg) {
      fill: #ffffff;
      stroke: #ffffff;

      :global(circle) {
        stroke: #ffffff;
      }
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
`;
