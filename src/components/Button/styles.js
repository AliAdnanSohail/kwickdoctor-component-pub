import css from 'styled-jsx/css';
import settings from '../../utils/style-helper';
import fcbk from './social/facebook.png'
import google from './social/google.png'

export default css`
  .button {
    padding: 12px 16px;
    height: 52px;

    background-color: ${settings.primaryColor};
    box-sizing: border-box;
    cursor: pointer;

    color: #ffffff;

    line-height: 26px;

    border: {
      width: 1px;
      style: solid;
      color: ${settings.primaryColor};
      radius: 26px;
    }

    font: {
      style: normal;
      weight: 500;
      size: 1rem;
    }

    text: {
      align: center;
      transform: uppercase;
    }

    &--transparent {
      background-color: transparent;
      box-shadow: 0px 0px 10px rgba(12, 151, 249, 0.15);

      color: ${settings.primaryColor};
    }

    &--squared {
      border-radius: 12px;
    }

    &--accent {
      color: ${settings.primaryColor};
      background-color: #ffffff;
      border-color: #ffffff;
    }
  }
  .social{    
    border : none;
    width: 50px;
    height: 50px;
    text-align: center;
    padding: 15px 15px;
    font-size: 0px;
    line-height: 1.428571429;
    border-radius: 50px;

    &--facebook{
      background-color: #435890;
      background-image: url(${fcbk}) ;
      background-position: center;
      background-repeat:no-repeat;
    }

    &--google{
      background-color: #cd5848;
      background-image: url(${google}) ;
      background-position: center;
      background-repeat:no-repeat;
    }
  }
`;
