import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export const day = css`
  .day {
    position: relative;
    width: 70px;
    height: 40px;
    padding: 0;

    border: none;

    color: #4f5362;
    text-align: center;
    font-weight: 600;
    line-height: 40px;

    :focus {
      outline: none;
    }

    :not(&--disabled) {
      cursor: pointer;
    }

    &--selected {
      border-radius: 20px;
      color: #ffffff;
      background: ${settings.primaryColor};
    }

    &--disabled {
      font-weight: 500;
      color: #bbbccd;
    }
  }
`;

export const events = css`
  .events {
    padding: 0;
    margin: 0;
    list-style: none;

    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;

    width: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    &__item {
      display: block;
      width: 4px;
      height: 4px;
      margin: 1px;

      background: #ffffff;
      border-radius: 100%;
    }

    @media all and (max-width: 490px) {
      width: 100%;
      height: 11px;
      top: auto;
      flex-direction: row;
      align-items: baseline;
    }
  }
`;
