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

    transition: background-color 0.3s ease-in-out;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    font: {
      size: 0.75rem;
      weight: bold;
    }

    &--active {
      background-color: ${settings.primaryColor};
    }

    :global(.material-icons) {
      width: 21px;
      height: 21px;
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

      :global(.material-icons) {
        margin-right: 30px;
      }

      &__label {
        display: inline-block;
      }
    }
  }
`;
