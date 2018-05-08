import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  .pagination {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    margin: 0;
    padding: 0;

    list-style: none;

    li {
      padding: 0;
      margin: 3px;

      background-color: transparent;

      color: ${settings.textLightColor};

      border-radius: 50%;
      box-sizing: border-box;

      cursor: pointer;

      transition: all 0.2s ease;

      font: {
        size: 0.875rem;
      }

      &:hover:not(.break) {
        background-color: #eff0f4;
      }

      &.break {
        cursor: initial;
      }

      &.active,
      &.active:hover {
        background-color: ${settings.primaryColor};
        color: #fff;
        cursor: initial;
      }

      &.previous,
      &.next {
        background-color: #eff0f4;
      }

      &.previous {
        margin-right: 30px;
      }

      &.next {
        margin-left: 30px;
      }

      svg {
        fill: ${settings.textLightColor};
        stroke: ${settings.textLightColor};
      }
    }

    a {
      position: relative;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      height: 30px;
      width: 30px;
    }
  }
`;
