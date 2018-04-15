import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export default css`
  .record-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 76px;
    height: 76px;

    padding: 0;

    border-width: 0;
    border-radius: 50%;

    background-color: rgba(255, 255, 255, 0.4);

    cursor: pointer;

    &:focus {
      outline: none;
    }

    &--start,
    &--stop {
      &:before {
        content: '';

        display: block;
      }
    }

    &--start {
      &:before {
        width: 48px;
        height: 48px;

        border-radius: 50%;
        background-color: #ffffff;
      }
    }

    &--stop {
      &:before {
        width: 32px;
        height: 32px;

        border-radius: 10%;
        background-color: ${settings.dangerColor};
      }
    }
  }
`;
