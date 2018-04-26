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
  }
`;

export const notification = css`
  .notification {
    &__time {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

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

      border-radius: 50px;

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
    }
    @media (max-width: 960px) {
      &__time {
        padding: 24px 15px;
      }
    }

    @media (max-width: 790px) {
      &__time {
        width: 100%;
        border-bottom: 2px solid rgb(231, 231, 240);
        border-right: none;
      }
      &__message {
        width: 100%;
        min-width: 100%;
        padding: 24px;
        text-align: center;
        display: block;
        box-sizing: border-box;
        border-bottom: 2px solid rgb(231, 231, 240);
      }
      &__dot {
        display: none;
      }
      &__actions {
        width: 100%;
        justify-content: space-around;
      }
    }
  }
`;
