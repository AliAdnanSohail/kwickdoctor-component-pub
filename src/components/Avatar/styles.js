import css from 'styled-jsx/css';

export default css`
  .avatar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    &--gray {
      border-radius: 22px;
      background-color: rgb(231, 231, 240);
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
