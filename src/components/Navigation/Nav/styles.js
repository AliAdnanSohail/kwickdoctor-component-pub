import css from 'styled-jsx/css';

export default css`
  .content {
    display: flex;
  }
  .nav {
    width: 84px;
    background: linear-gradient(#0d264a, #000c25);
    padding-bottom: 80px;
    padding-top: 40px;
  }
  .nav__list {
    list-style-type: none;
    padding-left: 0;
    margin-left: 0;
  }
  .nav__logo {
    text-align: center;
    margin-top: 20px;
    margin-left: 1rem;
    width: 48px;
    overflow: hidden;
    color: white;
  }
  @media (min-width: 790px) {
    .nav { 
      width: 30%;
    }
    .nav__logo {
      margin-bottom: 80px;
      width: auto;
      margin-left: 0;
      text-align: left;
      padding-left: 40px;
    }
    .nav img {
      width: 60%;
    }
  }
  @media (min-width: 960px) {
    .nav {
      width: 328px;
      padding-left: 30px;
    }
  }
`;
