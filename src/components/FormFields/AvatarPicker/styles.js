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

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    cursor: pointer;

    background: {
      color: #e7e7f0;
      position: center;
      size: cover;
    }

    i {
      color: #bbbccd;
    }

    &__button {
      position: absolute;
      width: 100%;
      bottom: 15px;

      display: flex;
      align-items: flex-end;
      justify-content: center;

      i {
        color: #ffffff;
      }
    }
  }
`;
