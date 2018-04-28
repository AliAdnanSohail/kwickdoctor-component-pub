import css from 'styled-jsx/css';


export default css`
.avatar-container {
  height: 300px;
  width: 300px;
  background-color: rgb(231, 231, 240);
  background-size: cover;
  border-radius: 22px;
  background-position: center center;
  &--circle {
    border-radius: 50%;
    width: 138px;
    height: 138px;
  }
}
`;
