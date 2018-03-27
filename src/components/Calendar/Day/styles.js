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
      &--without-events {
        padding: 13px 0;
        line-height: 54px;
        .day__border {
          max-width: 100%;
          width: 54px;
          height: 54px;
          display: inline-block;
          color: #ffffff;
          background: ${settings.primaryColor};
          border-radius: 100%;
        }
      }
      &--with-events {
        color: #ffffff;
        background: ${settings.primaryColor};
        border-radius: 40px;
      }
      
    }

    &--disabled {
      font-weight: 500;
      color: #bbbccd;
      cursor: default;
    }

    @media all and (max-width: 630px) {
      padding: 0 !important;
      height: 54px;
      line-height: 54px;
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
    width: 27px;
    &.events-qty-1 {
      padding-top: 36px;
    }
    &.events-qty-2 {
      padding-top: 33px;
    }
    &.events-qty-3 {
      padding-top: 31px;
    }
    &.events-qty-4 {
      padding-top: 28px;
    }
    &.events-qty-5 {
      padding-top: 26px;
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

    @media all and (max-width: 630px) {
      width: 100%;
      height: 18px;
      padding-top: 0 !important;
      top: auto;
      &__item {
        display: inline-block;
      }
    }
  }
`;
