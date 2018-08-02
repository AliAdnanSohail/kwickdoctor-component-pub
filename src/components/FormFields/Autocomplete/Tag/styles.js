import css from 'styled-jsx/css';

import settings from '../../../../utils/style-helper';

export default css`
  .tag {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 5px 9px;
    margin: 5px;
    max-width: 100%;
    box-sizing: border-box;

    background: #eff0f4;

    border-radius: 3px;

    &__text {
      font-size: 0.875rem;
      color: ${settings.textColor};
      word-break: break-all;
      margin-right: 8px;
    }

    &__button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      background: transparent;
      border: none;
      padding: 0;
      outline: none;

      opacity: 0.6;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }

      i {
        font-size: 0.875rem;
      }
    }
  }
`;
