import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  .tag-input{
    &__wrapper{
      display: flex;
    }
    &__input-wrapper{
      border: 1px solid #0C97F9;	
      border-radius: 6px;
      min-width: 280px;
      padding: 10px;
      position: relative;
      input{
        border: none;
        border-radius: inherit;
        &:focus{
          outline: none;
        }
      }
    }
    &__input{
      display: inline;
      position: relative;
    }
  }
  .b-tag-box{
    border-radius: 3px;	
    background-color: #EFF0F4;
    padding: 5px 25px 5px 9px;
    position: relative;
    margin-right: 10px;
    &__cross{
      position: absolute;
      width: 16px;
      height: 16px;
      right: 5px;
      top: 5px;
      cursor: pointer;
      &:after,
      &:before{
        content: '';
        display: block;
        width: 2px;
        height: 15px;
        background-color: black;
        position: absolute;
        left: 44%;
        top: 9%;  
      }
      &:after{
        transform: rotate(-39deg);
      }
      &:before{
        transform: rotate(39deg);
      }
      &:focus{
        border: 1px solid black;
      }
      &_type{
        &_plus{
          left: 3px;
          &:after,
          &:before{
            background-color: white;
          }
          &:before{
            transform: rotate(0deg);
          }
          &:after{
            transform: rotate(90deg);
          }
        }
      }
    }
    
    &_type{
      &_add{
        cursor: pointer;
        background-color: #0c97f9;
        color: white;
        padding: 5px 5px 5px 25px;
        user-select: none;
      }
    }
  }
  .b-tags-list{
    background-color: #FFFFFF;	
    box-shadow: 0 2px 40px 0 rgba(0,0,0,0.05);
    border-radius: 6px;
    position: absolute;
    left: 0;
    top: 41px;
    &__wrapper{
      max-height: 190px;
      overflow-y: scroll;
      overflow-x: hidden;
      max-width: max-content;
      &_no-overflow{
        overflow: auto;
      }
    }
    &__tag{
      padding: 10px;
      padding-right: 50px;
      cursor: pointer;
      width: -webkit-fill-available;
      &:hover{
        background-color: #EFF0F4;
      }
    }
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {

  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 5.5px;
    background: #E1E1E1;
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255,0,0,0.4); 
  }
`;
