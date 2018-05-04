import css from 'styled-jsx/css';


export default css`
.avatar-container {
  width: 138px;
  height: 138px;
  background-color: rgb(231, 231, 240);
  background-size: cover;
  border-radius: 22px;
  background-position: center center;
  &--circle {
    border-radius: 50%;
  }
  &--small {
    width: 85px;
    height: 85px;
  }
  &--large {
    height: 300px;
    width: 300px;
  }
}
`;
