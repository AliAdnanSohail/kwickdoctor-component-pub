import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  .b-time-picker {
    &__get-time {
      position: absolute;
      left: 0;
      right: 0;
      &-wrap {
        border-radius: 6px;
        background-color: white;
        box-shadow: 0 0 30px 0 rgba(53, 65, 81, 0.1);
        padding: 20px;
        max-width: 183px;
        display: flex;
        justify-content: space-between;
      }
    }
    &__wrapper {
      position: relative;
    }
    &__title {
      font-size: 18px;
      margin-bottom: 10px;
    }
    &__input {
      position: relative;
      margin-bottom: 20px;
      max-width: max-content;
    }
    &__logo {
      position: absolute;
      z-index: 1;
      left: 8px;
      top: 0px;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  .b-input {
    border: 1px solid #e7e7f0;
    border-radius: 6px;
    position: relative;
    padding: 14px;
    padding-left: 35px;
    &_centred {
      text-align: center;
    }
  }
  .b-select {
    &__field {
      padding: 7px 55px 7px 7px;
      background-color: white;
      border-radius: 6px;
      position: relative;
      cursor: pointer;
      user-select: none;
      max-width: 30px;
      box-shadow: 0 0 30px 0 rgba(53, 65, 81, 0.1);
    }
    &__options-wrap {
      height: 200px;
      width: 100%;
      left: 0;
      top: 39px;
      background-color: red;
      position: absolute;
      border-radius: 5px;
      background-color: white;
      box-shadow: 0 0 30px 0 rgba(53, 65, 81, 0.1);
      overflow-y: scroll;
      &_size {
        &_small {
          height: 64px;
          overflow: auto;
        }
      }
    }
    &__option {
      padding: 7px 40px 7px 7px;
      &:hover {
        background-color: #eff0f4;
        color: #0c97f9;
      }
      &_selected {
        color: #0c97f9;
      }
    }
    &__arrow {
      position: absolute;
      top: 0;
      right: 7px;
      height: 100%;
      display: flex;
    }
  }
  .test {
    height: 80px;
    width: 100%;
    background-color: yellow;
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
    background: #e1e1e1;
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255, 0, 0, 0.4);
  }
`;
