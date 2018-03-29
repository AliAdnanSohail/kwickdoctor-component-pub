import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  .toast-box {
    margin-top: 20px;
    display: flex;
    align-items: center;
    color: ${settings.textColor};
    &.rectangle-22 {
      height: 78px;
      width: 392px;
      border-radius: 4px;
      background-color: #FFFFFF;
      box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.05);
    }
    .circle {
      height: 7px;
      width: 7px;
      margin: 15px;
      background-color: #222328;
      border-radius: 50%;
    }
    &.primary .circle {
      background-color: ${settings.primaryColor};
    }
    .message {
      width: 303px;
      color: #222328;
      font-weight: 500;
      line-height: 18px;
    }
    .icons-close {
      height: 21px;
      width: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon {
      height: 13px;
      width: 13px;
      background-size: 13px 13px;
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
    
        path {
          stroke-width: 4;
        }
      }
    }
  }

.toast-container {
  position: absolute;

  bottom: 10px;
  right: 10px;
  
  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0.01;
    transition: opacity 500ms ease-in;
  }
}
`;
