import css from 'styled-jsx/css';

export default css`
  .month {
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    margin: 0;
    padding: 0;
    width: 100%;

    list-style: none;
    font-size: 1rem;
  }

  @media all and (-ms-high-contrast: none),
    (-ms-high-contrast: active) {
      .month {
        display: flex;
        flex-wrap: wrap;

        li {
          flex-basis: calc(100% / 7);
        }
      }
  }

  @supports (-ms-ime-align:auto) {
    .month {
      display: flex;
      flex-wrap: wrap;

      li {
        flex-basis: calc(100% / 7);
      }
    }
  }
`;
