import css from 'styled-jsx/css';

export default css`
  .avatar-container {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 138px;
    height: 138px;
    border-radius: 22px;

    overflow: hidden;

    background-color: rgb(231, 231, 240);

    &--circle {
      border-radius: 50%;
    }

    &--s {
      width: 85px;
      height: 85px;
    }

    &--l {
      height: 300px;
      width: 300px;
    }
  }

  .avatar {
    width: 100%;
    height: 100%;

    background: {
      size: cover;
      position: center;
    }
  }

  :global(.avatar-icon.grommetux-control-icon) {
    fill: #ffffff;
    stroke: #ffffff;
  }
`;
