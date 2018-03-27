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
    background: transparent;
    cursor: pointer;

    :focus {
      outline: none;
    }

    &--selected {
      border-radius: 20px;
      color: #ffffff;
      background: ${settings.primaryColor};
    }

    &--disabled {
      font-weight: 500;
      color: #bbbccd;
      cursor: default;
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
    display: block;
    line-height: 4px;
    width: 20px;
    &.events-qty-1 {
      padding-top: 17px;
    }
    &.events-qty-2 {
      padding-top: 14px;
    }
    &.events-qty-3 {
      padding-top: 12px;
    }
    &.events-qty-4 {
      padding-top: 9px;
    }
    &.events-qty-5 {
      padding-top: 7px;
    }
    &__item {
      display: block;
      width: 4px;
      height: 4px;
      line-height: 4px;
      margin: 1px;
      background: #ffffff;
      border-radius: 100%;
    }

    @media all and (max-width: 490px) {
      width: 100%;
      height: 11px;
      padding-top: 0 !important;
      top: auto;
      &__item {
        display: inline-block;
      }
    }
  }
`;
