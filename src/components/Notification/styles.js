import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export const notificationCard = css`
  :global(.notification-card) {
    display: flex;
    flex-direction: row;

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
      }
    }
  }
`;