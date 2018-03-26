import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export const header = css`
  .weekdays {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 0.745rem;

    &__item {
      width: 70px;
      height: 40px;
      float: left;
      line-height: 40px;
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
    margin-bottom: 14px;
    position: relative;

    &__month {
      text-align: center;
      font-weight: bold;
      font-size: 1rem;

      span {
        display: inline-block;
        padding: 0 7px;
      }
    }

    button {
      border: none;
      margin: 0;
      padding: 0;

      width: 70px;

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
    max-width: 490px;
    color: ${settings.textColor};
  }
`;

export const month = css`
  .month {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 0.745rem;
    li {
      float: left;
    }
  }
`;
