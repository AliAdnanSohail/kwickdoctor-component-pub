import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
.calendar {
  max-width: 400px;
  color: ${settings.textColor};
  &__header {
    &__month {
      text-align: center;
      font-weight: bold;
      font-size: 1.2rem;
    }
    &__navigation {
      position: relative;
      height: 0;
      &__button {
        border: none;
        background: transparent;
        margin: 0;
        outline: none;
        &::before {
          content: "";
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 24 24' width='24px' height='24px' role='img' class='grommetux-control-icon grommetux-control-icon-form-next grommetux-control-icon--responsive' aria-label='form-next'%3E%3Cpolyline fill='none' stroke='%23000' stroke-width='2' points='9 6 15 12 9 18'%3E%3C/polyline%3E%3C/svg%3E");
          color: #222328;
          width: 24px;
          height: 24px;
          font-weight: bold;
          font-size: 1.3rem;
          position: absolute;
          display: block;
          right: 7px;
          background-repeat: no-repeat;
          cursor: pointer;
          top: 0;
        }
        &_prev::before {
          transform: rotate(180deg);
          left: 7px;
          right: auto;
        }
      }
    }
    &__days-of-week {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      font-size: 0.875rem;
      &__day {
        width: 14.2857143%;
        text-align: center;
        color: #BBBCCD;
        padding: 13px 0;
        font-weight: normal;
      }
    }
  }
  &__month {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    font-size: 0.875rem;
    &__day {
      color: #4F5362;
      width: 13%;
      margin: 0 0.64285715%;
      text-align: center;
      padding: 7px 0;
      font-weight: 600;
      &_events {
        border-radius: 20px;
        color: #ffffff;
        background: ${settings.primaryColor};
        position: relative;
      }
      &__events-list {
        padding: 0;
        margin: 0;
        list-style: none;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        &__event {
          display: block;
          width: 4px;
          height: 4px;
          background: #ffffff;
          border-radius: 100%;
          margin: 1px 0;
        }
      }
    }
  }
}  
`;
