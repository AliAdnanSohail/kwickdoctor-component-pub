import css from 'styled-jsx/css';

export const suggestions = css`
  .suggestions {
    position: absolute;
    top: 48px;
    left: 0;

    margin: 0;
    padding: 0;

    width: 100%;
    max-height: 200px;

    list-style: none;

    background-color: #ffffff;
    border-radius: 6px;
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.05);
    box-sizing: border-box;

    overflow: auto;

    z-index: 10;
  }
`;

export const suggestion = css`
  .suggestion {
    display: block;
    margin: 0;
    padding: 0;

    button {
      width: 100%;
      padding: 6px 18px;

      background: transparent;

      border: none;
      box-sizing: border-box;

      text-align: left;

      cursor: pointer;

      &:focus {
        outline: none;
      }
    }

    &:hover {
      button {
        background: #eff0f4;
      }
    }
  }
`;
