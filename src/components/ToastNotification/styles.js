import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  .toast-box {
    margin-bottom: 10px;
    color: ${settings.textColor};
    transition: all 200ms ease-out;
    &.fade-enter {
      opacity: 0.01;
      transform: translate(40px);
    }
    &.fade-exit {
      
    }
    &.fade-exit-active {
      opacity: 0.01;
      transform: translate(40px);
    }
    &.rectangle-22 {
      padding: 21px 18px;
      width: 392px;
      border-radius: 4px;
      background-color: #FFFFFF;
      box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.05);
    }
    .circle {
      margin: 5px 15px 0 0;
      float: left;
      display: block;
      height: 7px;
      width: 7px;
      background-color: #222328;
      border-radius: 50%;
    }
    
    &.primary .circle {
      background-color: ${settings.primaryColor};
    }
    .message {
      float: left;
      width: 335px;
      color: #222328;
      font-weight: 500;
      line-height: 18px;
    }
    .icons-close {

      padding-top: 2px;
      width: 14px;
      float: right;
    }
    .clear {
      clear: both;
    }
    .icon {
      padding: 0;
      margin: 0;
      height: 14px;
      width: 14px;
      transition: all 0.3s;
      border: none;
      outline: none;
      opacity: 0.6;
      cursor: pointer;
      background-repeat: no-repeat;
      background-color: transparent;
      &:hover {
        opacity: 1;
      }
      .grommetux-control-icon-close {
        height: 14px;
        width: 14px;
        display: inline-block;
        path {
          stroke-width: 4;
        }
      }
    }
  }
  .toast-container {
    position: absolute;
    top: 10px;
    left: 50%;
    margin-left: -196px;
    .plug {
      transition: all 200ms ease-out;
      &--zeroHeight {
        height: 0!important;
      }
    }
  }
`;