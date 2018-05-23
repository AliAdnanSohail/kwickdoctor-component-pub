import css from 'styled-jsx/css';

export default css`
  .profile {
    display: flex;
  }

  .profile__photo {
    text-align: center;
    border-radius: 50%;
    background: gray;
    overflow: hidden;
    width: 48px;
    height: 48px;
    margin-bottom: 20px;
  }

  .profile__name {
    font-weight: 600;
    display: none;
  }

  .profile__photo img {
    width: 100%;
  }

  @supports (display: flex) {
    display: flex;
  }

  @media (min-width: 790px) {
    .profile {
      margin-bottom: 80px;
    }

    .profile__photo {
      width: 60px;
      height: 60px;
    }

    .profile__name {
      padding-left: 23px;
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 0;
      line-height: 26px;
      display: block;
    }
  }
`;
