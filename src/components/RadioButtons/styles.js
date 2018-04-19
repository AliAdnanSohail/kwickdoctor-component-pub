import css from 'styled-jsx/css';

export default css`
  fieldset {
    border: none;
  }
  .radio {
    &__wrapper {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    &__select {
      opacity: 0;

      width: 100%;
      height: 46px;

      position: absolute;
      left: 0px;
    }
    &__icon {
      margin-right: 18px;
      svg {
        path {
          stroke: #b8b9cc !important;
        }
      }
      &_active {
        svg {
          path {
            stroke: white !important;
          }
        }
      }
    }
    &__box {
      box-shadow: 0px 0px 33px 0px rgba(0, 0, 0, 0.12);
      border-radius: 6px;
      color: #b8b9cc;
      font-size: 0.8rem;
      text-transform: uppercase;

      padding: 13px 16px 13px 23px;
      margin-bottom: 20px;

      display: flex;
      align-items: center;
      flex-basis: 39%;

      cursor: pointer;

      position: relative;
      input[type="radio"] {
        cursor: pointer;
      }
      &_active {
        background-color: #1f93f4;
        color: white;
      }
    }
    &__column {
      flex-basis: 47%;
    }
  }
`;
