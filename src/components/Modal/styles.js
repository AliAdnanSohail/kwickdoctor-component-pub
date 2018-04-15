import css from 'styled-jsx/css';

export const modal = css`
  .modal {
    position: relative;
    padding: 60px 0;

    border-radius: 6px;
    background-color: #ffffff;

    min-height: 400px;
    min-width: calc(100% - 16px);

    transition: all 0.3s ease-in-out;
    transform: translateX(40px);
    opacity: 0;

    box: {
      shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.15);
      sizing: border-box;
    }

    &__close-button {
      position: absolute;
      right: 15px;
      top: 15px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      height: 21px;
      width: 21px;
      padding: 0;

      border: none;
      background-color: transparent;
      outline: none;
      opacity: 0.6;
      transition: opacity 0.4s ease;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }

      :global(svg) {
        height: 14px;
        width: 14px;

        :global(path) {
          stroke-width: 5;
        }
      }
    }

    &.has-entered {
      transform: translateX(0);
      opacity: 1;
    }

    @media (min-width: 700px) {
      min-width: 700px;
    }
  }
`;

export const underlay = css`
  .underlay {
    background-color: rgba(0, 0, 0, 0);
    transition: all 0.3s ease-in-out;

    &.has-entered {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;
