import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export default css`
  .tag-input{
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    font-size: 1rem;
    color: ${settings.textColor};
    border-radius: 6px;
    min-width: 280px;
    padding: 5px;
    position: relative;
    min-height: 48px;
    box-sizing: border-box;
    background-color: #ffffff;
    box-sizing: border-box;
    border: 2px solid ${settings.borderColor};	
    &.focused {
      border-color: ${settings.primaryColor};	
    }
    &__tag-list {
      display: inline;
      list-style: none;
      margin: 0;
      padding: 0;
      max-width: 100%;
      box-sizing: border-box;
    }
    &__input {
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
