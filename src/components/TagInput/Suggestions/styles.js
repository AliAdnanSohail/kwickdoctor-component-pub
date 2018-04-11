import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export default css`
  .tag-input__suggestions {
    z-index: 10;
    box-sizing: border-box;    
    width: 100%;
    position: absolute;
    top: 48px;
    box-shadow: 0 2px 40px 0 rgba(0,0,0,0.05);
    .tag-input__suggestions-list {
      box-sizing: border-box;    
      width: 100%;
      display: block;
      margin: 0;
      list-style: none;
      background-color: #FFFFFF;
      border-radius: 6px;
      max-height: 200px;
      overflow: auto;
    }
    .tag-input__suggestion {
      display: block;
      margin: 0;
      padding: 0;
      button {
        background: transparent;
        border: none;
        padding: 7px;
        box-sizing: border-box;
        width: 100%;
        text-align: left;
      }
      &--selected, &:hover {
        button {
          background: #EFF0F4;
        }
      }
    }
  }
`;
