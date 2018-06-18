import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export const day = css`
  .day {
    position: relative;
    width: 100%;
    height: 80px;
    padding: 0;

    border: none;

    color: #4f5362;
    text-align: center;
    font-weight: 600;
    line-height: 80px;
    background: transparent;
    cursor: pointer;

    :focus {
      outline: none;
    }

    &--selected {
      padding: 13px 0;

      line-height: 54px;

      transition: all 0.3s ease-in-out;

      .day__border {
        max-width: 100%;
        width: 54px;
        height: 54px;
        display: inline-block;
        color: #ffffff;
        background: ${settings.primaryColor};
        border-radius: 50%;

        @media screen and (max-width: 630px) {
          width: 40px;
          height: 40px;
          line-height: 40px;
        }
      }
    }

    &--disabled {
      font-weight: 500;
      color: #bbbccd;
      cursor: default;
    }

    @media screen and (max-width: 630px) {
      padding: 0;
      height: 40px;
      line-height: 40px;
    }
  }
`;

export const events = css`
  .events {
    position: absolute;
    bottom: 16px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 13px;

    padding: 0;
    margin: 0;
    list-style: none;

    &__item {
      display: block;
      width: 4px;
      height: 4px;
      margin: 1px;
      background: #ffffff;
      border-radius: 100%;
    }

    @media all and (max-width: 630px) {
      bottom: 2px;
    }
  }
`;
