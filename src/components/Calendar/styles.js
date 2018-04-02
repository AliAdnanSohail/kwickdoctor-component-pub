import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export const header = css`
  .weekdays {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 0.745rem;

    &__item {
      width: 14.2857143%;
      height: 80px;
      float: left;
      line-height: 80px;
      color: #bbbccd;
      font-weight: 300;

      text: {
        align: center;
        transform: uppercase;
      }
    }
  }
`;

export const navigation = css`
  .navigation {
    margin-bottom: 15px;
    position: relative;

    &__month {
      text-align: center;
      font-weight: bold;
      font-size: 1.1rem;
      padding-top: 5px;
      span {
        display: inline-block;
        padding: 0 7px;
      }
    }

    button {
      border: none;
      margin: 0;
      padding: 0;

      width: 95px;

      background: transparent;
      outline: none;
      cursor: pointer;
      position: absolute;
      left: 0;
      top: 0;
      &.next {
        left: auto;
        right: 0;
      }

      svg {
        width: 14px !important;
        height: 14px !important;
      }
    }
  }
`;

export const calendar = css`
  .calendar {
    max-width: 665px;
    color: ${settings.textColor};
  }
`;

