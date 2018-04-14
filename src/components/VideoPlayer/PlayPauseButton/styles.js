import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export default css`
.playpause {
  background-color: white;
  opacity: 0.6;
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 0;

  webkit-transition: opacity .5s ease-in-out;
       -moz-transition: opacity .5s ease-in-out;
        -ms-transition: opacity .5s ease-in-out;
         -o-transition: opacity .5s ease-in-out;
            transition: opacity .5s ease-in-out;
}

.playpause label {
  display: block;
  box-sizing: border-box;
  width: 0;
  height: 50px;
  border-color: transparent transparent transparent #202020;
  transition: 100ms all ease;
  cursor: pointer;

  
  border-style: double;
  border-width: 0px 0 0px 50px;

  left: 25px;
  top: 25px;
  position: absolute;
}
.playpause input[type="checkbox"] {
  position: absolute;
  left: -9999px;
}
.playpause input[type="checkbox"]:checked + label {
  border-style: solid;
  border-width: 25px 0 25px 50px;
}
.playpause input[type="checkbox"]:focus + label {
  box-shadow: 0 0 5px lightblue;
}
  `;
