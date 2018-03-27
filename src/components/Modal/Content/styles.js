import css from 'styled-jsx/css';

export const modal = css`
  .modal {
    position: absolute;

    padding: 60px 100px;

    border-radius: 6px;
    background-color: #ffffff;

    min-height: 400px;
    min-width: calc(100% - 16px);

    box: {
      shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.15);
      sizing: border-box;
    }

    @media (min-width: 700px) {
      min-width: 700px;
    }
  }
`;

export const close = css`
  .close {
    position: absolute;
    right: 20px;
    top: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 21px;
    width: 21px;
    padding: 0;

    border: none;
    outline: none;
    opacity: 0.6;
    transition: opacity 0.4s ease;
    cursor: pointer;

    :hover {
      opacity: 1;
    }

    .grommetux-control-icon {
      height: 14px;
      width: 14px;

      path {
        stroke-width: 4;
      }
    }
  }
`;
