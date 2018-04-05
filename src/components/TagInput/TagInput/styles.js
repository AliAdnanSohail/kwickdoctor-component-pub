import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export default css`
  .tag-input{
    font-size: 1rem;
    color: ${settings.textColor};
    border: 1px solid #0C97F9;	
    border-radius: 6px;
    min-width: 280px;
    padding: 5px;
    position: relative;
    min-height: 48px;
    box-sizing: border-box;
    .tag-input__tag-list {
      display: inline-block;
      list-style: none;
      margin: 0;
      padding: 0;
      max-width: 100%;
      box-sizing: border-box;
    }
    .tag-input__input {
      display: inline-block;
      position: relative;
      input{
        line-height: 26px;
        background: transparent;
        margin: 5px;
        border: none;
        border-radius: inherit;
        &:focus{
          outline: none;
        }
      }
    }
  }
`;
