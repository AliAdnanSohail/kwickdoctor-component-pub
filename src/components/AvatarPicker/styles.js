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

export const avatarMedium = css`
  .avatar {
    display: grid;
    align-items: center;
    grid-template-columns: 32px 1fr 32px;
    grid-gap: 12px;

    width: 226px;

    &__container {
      cursor: pointer;
      color: #c1c2cf;
    }

    &__thumb {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      height: 138px;
      width: 138px;
      border-radius: 50%;

      background: {
        color: #e7e7f0;
        position: center;
        size: cover;
      }

      :global(svg) {
        width: 42px;
        height: 42px;

        fill: #bbbccd;
        stroke: #bbbccd;
      }
    }
  }
`;

export const avatarBig = css`
  .avatar {
    width: 600px;
    height: 600px;
    position: relative;

    &__container {
      cursor: pointer;
      color: #c1c2cf;
    }

    &__thumb {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      height: 100%;
      width: 100%;
      border-radius: 22px;

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
      &_medium {
        width: 300px;
        height: 300px;
      }
    }

    &__button-container {
      position: absolute;
      width: 100%;
      bottom: 0;

      display: flex;
      align-items: center;
      justify-content: space-around;
      bottom: 20px;
    }
  }
`;
