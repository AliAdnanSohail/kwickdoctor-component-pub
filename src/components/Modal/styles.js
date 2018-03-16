import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
  }
  .modal-window {
    position: absolute;
    border-radius: 6px;
    background-color: #FFFFFF;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,0.15);
    padding: 44px 16px 16px 16px;
  }
  .icons-close {
    position: absolute;
    right: 16px;
    top: 16px;
    height: 21px;
    width: 21px;
    border: none;
    outline: none;
    opacity: 0.6;
    transition: opacity 0.4s ease;
    background: url("${settings.closeIcon}");
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }  
`;
