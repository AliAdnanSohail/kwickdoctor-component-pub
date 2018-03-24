import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export const header = css`
  .weekdays {
    padding: 0;
    margin: 0;
    list-style: none;

    display: flex;
    align-items: baseline;
    font-size: 0.745rem;

    &__item {
      width: 70px;
      height: 40px;

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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 14px;

    &__month {
      flex: 1;
      text-align: center;
      font-weight: bold;
      font-size: 1rem;

      span {
        display: inline-block;
        padding: 0 7px;
      }
    }

    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border: none;
      margin: 0;
      padding: 0;

      width: 70px;

      background: transparent;
      outline: none;
      cursor: pointer;

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

    display: flex;
    flex-wrap: wrap;
    align-items: baseline;

    font-size: 0.745rem;
  }
`;
