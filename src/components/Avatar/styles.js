import css from 'styled-jsx/css';

export default css`
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    background: {
      color: rgb(231, 231, 240);
      position: center;
      size: cover;
    }
  }

  :global(.avatar-icon.grommetux-control-icon) {
    fill: #ffffff;
    stroke: #ffffff;

    width: 50%;
    height: 50%;
  }
`;
