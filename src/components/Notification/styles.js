import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export const notificationCard = css`
  :global(.notification-card) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 6px;

    &:not(:last-child) {
      margin-bottom: 12px;
    }

    @media (max-width: 790px) {
      flex-direction: column-reverse;
    }
  }
`;

export const notification = css`
  .notification {
    &__time {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 140px;
      padding: 24px 36px;
      font-size: 1rem;
      font-weight: bold;
      border-right: 2px solid ${settings.borderColor};
    }

    &__dot {
      height: 8px;
      width: 8px;
      flex-basis: 8px;
      flex-shrink: 0;
      margin-right: 8px;
      border-radius: 50%;
      background-color: ${settings.textColor};

      &--primary {
        background-color: ${settings.primaryColor};
      }

      &--read {
        opacity: 0.5;
      }
    }

    &__message {
      flex: 1;
      display: flex;
      align-items: center;
      padding: 0 16px;
      font-size: 0.875rem;
      color: ${settings.textColor};
    }

    &__actions {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 24px;

      :global(svg) {
        fill: ${settings.textLightColor};
        stroke: ${settings.textLightColor};

        :global(path, circle, polyline) {
          fill: none;
          stroke: ${settings.textLightColor}!important;
        }
      }

      &--mobile {
        display: none;
      }
    }

    @media (max-width: 960px) {
      &__time {
        font-size: 14px;
        padding: 15px;
      }
    }

    @media (max-width: 790px) {
      :global(.button--flat) {
        color: #bbbccd;
      }

      &__points {
        border: none;
        background: none;
        outline: none;
        display: flex;
        justify-content: flex-end;
        padding: 10px;
        position: absolute;
        right: 15px;
        top: 15px;
      }

      &__point {
        display: block;
        width: 8px;
        height: 8px;
        background-color: #bbbccd;
        border-radius: 50%;
        margin: 3px;
      }

      &__buttons {
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 0;
        top: 40px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 12px 34px;
        background: rgb(255, 255, 255);
        border-radius: 4px;
      }

      &-card {
        flex-direction: column-reverse;
      }

      &__time {
        width: 100%;
        border-bottom: none;
        border-right: none;
        justify-content: flex-start;
        padding: 24px;
        font-weight: 100;
        padding-top: 0;
      }

      &__message {
        width: 100%;
        min-width: 100%;
        padding: 24px;
        text-align: left;
        display: flex;
        align-items: flex-start;
        box-sizing: border-box;
        border-bottom: none;
      }

      &__dot {
        display: block;
        margin-top: 4px;
      }

      &__actions {
        display: none;
        &--mobile {
          display: block;
          position: relative;
        }
      }
    }
  }
`;
