import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  .modal-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: baseline;
    justify-content: center;
    overflow: auto;
    padding-top: 100px;
  }
  .modal-window {
    position: absolute;
    border-radius: 6px;
    background-color: #FFFFFF;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,0.15);
    padding: 60px 100px;
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
    background: url("${settings.closeIcon}") no-repeat center;
    background-size: 13px 13px;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }  
`;
