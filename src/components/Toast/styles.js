import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  .toast-box {
    max-height: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
    color: ${settings.textColor};
    transition: transform 200ms ease-out, opacity 200ms ease-out, max-height 100ms ease 200ms,
      padding 100ms ease 300ms, margin 100ms ease 400ms;

    &.fade-enter {
      opacity: 0;
      transform: translate(40px);
    }

    &.fade-exit-active {
      opacity: 0;
      transform: translate(40px);
      max-height: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
      overflow: hidden;
    }

    &.rectangle-22 {
      display: flex;
      align-items: center;
      padding: 21px 18px;
      width: 392px;
      border-radius: 4px;
      background-color: #ffffff;
      box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.05);
    }

    .circle {
      margin: 0 15px 0 0;
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
      display: flex;
      align-items: center;
      width: 303px;
      color: #222328;
      font-family: Montserrat;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      word-break: break-all;
    }

    .icons-close {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .clear {
      clear: both;
    }

    .icon {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      padding: 0;
      margin: 0;
      height: 21px;
      width: 21px;
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

      .material-icons {
        height: 16px;
        width: 16px;

        font-size: 1rem;
      }
    }
  }

  .toast-container {
    position: fixed;
    top: 10px;
    left: 50%;
    margin-left: -196px;
  }
`;
