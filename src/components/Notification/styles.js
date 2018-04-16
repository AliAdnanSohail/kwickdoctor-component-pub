import css from 'styled-jsx/css';
import settings from '../../utils/style-helper';

export default css`
  .notification {
    border-radius: 6px;
    box-shadow: 0 0 30px 0 rgba(53, 65, 81, 0.1);
    transition: all 1s;
    &_animated{
      opacity: 0;
      transform: translateX(150px);
    }
    &__wrapper {
      padding: 0 37px;
      display: flex;
      justify-content: space-between;
    }
    &__time-box {
      padding: 25px 0;
      padding-right: 37px;
      border-right: 2px solid ${settings.textLightColor};
    }
    &__time {
      font-size: 1rem;
    }
    &__message-box {
      padding: 25px 0;
      padding-left: 20px;
      display: flex;
      flex-grow: 1;
    }
    &__message {
      font-size: 0.875rem;
      display: flex;
      align-items: center;
    }
    &__delete-box {
      padding: 25px 0;
      cursor: pointer;
    }
    &__status {
      margin-top: 9px;
      margin-right: 15px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      &_color {
        &_blue {
          background-color: #94c8f5;
        }
        &_grey {
          background-color: #8f9092;
        }
      }
    }
  }
`;
