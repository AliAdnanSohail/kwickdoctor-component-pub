import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export default css`
  .nav-item {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 53px;
    height: 53px;

    padding: 16px;

    color: #ffffff;
    text-decoration: none;
    letter-spacing: 0.15rem;
    text-transform: uppercase;

    border-radius: 50%;
    box-sizing: border-box;

    transition: all 0.3s ease-in-out;

    font: {
      size: 0.75rem;
      weight: bold;
    }

    &--active {
      background-color: ${settings.primaryColor};
    }

    &__icon {
      width: 21px;
      height: 21px;

      fill: #ffffff !important;
      stroke: #ffffff !important;

      circle,
      path {
        stroke: #ffffff !important;
      }
    }

    &__label {
      display: none;
    }

    @media (min-width: 960px) {
      width: 100%;

      padding: 16px 16px 16px 50px;

      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;

      &__icon {
        margin-right: 30px;
      }

      &__label {
        display: inline-block;
      }
    }
  }
`;
