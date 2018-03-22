import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  .tag-input{
    &__wrapper{
      display: flex;
    }
    &__input{
      border: 1px solid #0C97F9;	
      border-radius: 6px;
      min-width: 280px;
      padding: 10px;
      input{
        border: none;
        border-radius: inherit;
        &:focus{
          outline: none;
        }
      }
    }
  }
  .b-tag-box{
    border-radius: 3px;	
    background-color: #EFF0F4;
    padding: 5px 25px 5px 9px;
    position: relative;
    margin-right: 10px;
    &__cross{
      background-color: red;
      position: absolute;
      width: 16px;
      height: 16px;
      right: 5px;
      cursor: pointer;
    }
  }
`;
