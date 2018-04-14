import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export default css`
  .fullscreen_button{
    border-radius: 8px;
    background-color: black; 
    opacity: 0.5;
    width: 120px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 3px;
    color: white;
    padding: 5px 10px;
    color: white;
    background-color: black;
    border: 0.2px solid white;

    webkit-transition: opacity .5s ease-in-out;
       -moz-transition: opacity .5s ease-in-out;
        -ms-transition: opacity .5s ease-in-out;
         -o-transition: opacity .5s ease-in-out;
            transition: opacity .5s ease-in-out;
}
.fullscreen_button:hover{
  zoom: 1;
  filter: alpha(opacity=50);
  opacity: 0.85;
}
  
  .expand-icon{
    width: 14px;
    height: 14px;
    fill: white;
    stroke: white;
  }
  `;
