import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export default css`
  .tag-input__suggestions {
    box-sizing: border-box;    
    width: 100%;
    display: block;
    position: absolute;
    margin: 0;
    list-style: none;
    box-shadow: 0 2px 40px 0 rgba(0,0,0,0.05);
    background-color: #FFFFFF;
    border-radius: 6px;
    max-height: 200px;
    overflow: auto;
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
