import css from 'styled-jsx/css';


export default css`
.avatar-container {
  width: 138px;
  height: 138px;
  background-color: rgb(231, 231, 240);
  background-size: cover;
  border-radius: 22px;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
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
.avatar-icon {
  :global(svg) {
    width: 65px;
    height: 65px;
    fill: white;
    stroke: white;
  }
}
`;
