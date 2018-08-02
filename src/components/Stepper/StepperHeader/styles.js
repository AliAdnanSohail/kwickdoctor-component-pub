import css from 'styled-jsx/css';

export const stepHeader = css`
  .stepper-header {
    position: relative;
    height: 34px;

    margin: 0;
    padding: 16px 0;
    list-style: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &:before {
      content: '';

      position: absolute;
      left: 11px;
      right: 11px;
      top: 32px;

      height: 2px;

      background: #eff0f4;

      z-index: 0;
    }
  }
`;

export const stepIcon = css`
  .step-icon {
    width: 34px;
    height: 34px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    z-index: 1;

    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      background: #eff0f4;
      border-radius: 50%;

      transition: all 0.3s ease-in-out;
    }

    &--completed {
      span {
        width: 34px;
        height: 34px;
      }

      i {
        color: #6fcb83;
      }
    }

    &--current {
      span {
        width: 24px;
        height: 24px;

        &:before {
          content: '';

          height: 10px;
          width: 10px;

          background-color: #0c97f9;
          border-radius: 50%;

          transition: all 0.3s ease-in-out;
        }
      }
    }

    &--next {
      span {
        width: 12px;
        height: 12px;
      }
    }
  }
`;
