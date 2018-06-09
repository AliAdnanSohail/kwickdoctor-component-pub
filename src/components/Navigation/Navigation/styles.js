import css from 'styled-jsx/css';

export default css`
  .nav {
    display: flex;
    flex-direction: column;

    height: 100%;
    min-height: 100vh;
    width: 84px;
    padding: 40px 0 80px 0;
    box-sizing: border-box;

    background-color: #354151;

    &__list {
      flex: 1;

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
