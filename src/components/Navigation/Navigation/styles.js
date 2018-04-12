import css from 'styled-jsx/css';

export default css`
  .nav {
    width: 84px;
    padding: 40px 0 80px 0;

    background: linear-gradient(#0d264a, #000c25);

    &__list {
      list-style-type: none;
      padding: 0 16px;
      margin: 0;
    }

    @media (min-width: 960px) {
      width: 330px;

      &__list {
        padding: 0 50px 0 0;
      }
    }
  }
`;
