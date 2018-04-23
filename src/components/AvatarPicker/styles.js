import css from 'styled-jsx/css';

export const fileInput = css`
  .file-input {
    position: absolute !important;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
  }
`;

export const avatarCircle = css`
  .avatar {
    width: 300px;
    height: 300px;
    position: relative;
    &--circle {
      width: 138px;
      height: 138px;
    }

    &__container {
      cursor: pointer;
      color: #c1c2cf;
    }

    &__thumb {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 300px;
      width: 300px;
      border-radius:22px;

      background: {
        color: #e7e7f0;
        position: center;
        size: cover;
      }

      :global(svg) {
        width: 80px;
        height: 80px;
        fill: #bbbccd;
        stroke: #bbbccd;
      }
      &--circle {
        width: 138px;
        height: 138px;
        border-radius: 50%;
        :global(svg) {
          width: 40px;
          height: 40px;
        }
      }
    }

    &__button {
      &--remove {
        position: absolute;
        width: 100%;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        bottom: 10px;
      }
    }
  }
`;
