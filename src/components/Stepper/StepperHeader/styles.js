import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export default css`
.stepper__header {
  position: relative;
  height: 40px;
  :before {
    content: "";
    height: 2px;
    position: absolute;
    left: 5px;
    right: 5px;
    top: 19px;
    background: #EFF0F4;
  }
  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
    display: table;
    height: 35px;
    .step__icon {
      padding: 0;
      margin: 0;
      width: auto;
      display: table-cell;
      text-align: center;
      vertical-align: middle;
      width: 40px;
      height: 40px;
      :first-child {
        text-align: left;
      }
      :last-child {
        text-align: right;
      }
      span {
        position: relative;
        display: inline-block;
        background: #EFF0F4;
        border-radius: 100%;
      }
      &.step__icon--status--next {
        span {
          width: 12px;
          height: 12px;
        }
      }
      &.step__icon--status--current {
        span {
          width: 24px;
          height: 24px;
          &:before {
            content: "";
            height: 10px;
            width: 10px;
            background-color: #0C97F9;
            position: absolute;
            top: 50%;
            left: 50%;
            margin: -5px 0 0 -5px;
            border-radius: 100%;
          }
        }
      }
      &.step__icon--status--complete {
        span {
          width: 35px;
          height: 35px;
          line-height: 35px;
          :global(.grommetux-control-icon) {
            display: inline-block;
            width: 24px;
            height: 24px;
            position: absolute;
            left: 50%;
            top: 50%;
            margin: -12px 0 0 -12px;
          }
          :global(.grommetux-control-icon polyline) {
            stroke: #6fcb83;
            stroke-width: 3;
          }
        }
      }
    }
  }
}
`;
