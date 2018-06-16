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

export const avatar = css`
  .avatar {
    position: relative;

    &__container {
      cursor: pointer;
      color: #c1c2cf;
    }

    &__thumb {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      background: {
        color: #e7e7f0;
        position: center;
        size: cover;
      }

      :global(svg) {
        width: 50%;
        height: 50%;
        fill: #bbbccd;
        stroke: #bbbccd;
      }
    }

    &__button {
      &--remove {
        position: absolute;
        width: 100%;
        bottom: 15px;
        top: 0;
        display: flex;
        align-items: flex-end;
        justify-content: center;
      }
    }
  }
`;
