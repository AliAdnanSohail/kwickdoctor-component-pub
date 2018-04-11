import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export default css`
.circle {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: white;
  margin:auto;
  }
.record_button {
  border: 0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  opacity:0.8;
  margin: 0 auto;
} 
  .square
  {
  background-color: #ff3333;
  border-radius: 10%;
  width: 20px;
  height: 20px;
  margin:auto;
}
.recordState {
  font-size: 12px;
  color: white;
  margin: 0 auto;
  padding-bottom: 5px;
}
.button_container {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
}`;
