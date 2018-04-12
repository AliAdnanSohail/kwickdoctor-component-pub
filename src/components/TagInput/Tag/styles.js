import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export default css`
  .tag-input__tag{
    display: inline-block;
    padding: 5px;
    max-width: 100%;
    box-sizing: border-box;
    span.tag-input__tag-wrapper {
      color: ${settings.textColor};
      border-radius: 3px; 
      background: #EFF0F4;
      padding: 5px 5px 5px 9px;
      display: inline-block;
      max-width: 100%;
      box-sizing: border-box;
    }
    span.tag-input__tag-text {
      word-break: break-all;
    }
    button {
      background: transparent;
      border: none;
      padding: 0;
      vertical-align: middle;
      outline: none;
      float: right;
      opacity: 0.6 ;
      :global(.grommetux-control-icon) {
        padding-left: 7px;
        height: 12px;
        width: 12px;
        :global(path) {
          stroke-width: 4;
          stroke: #000000;
        }
      }
      
    }

    button:hover {
      opacity: 1;
    }
  }
`;
