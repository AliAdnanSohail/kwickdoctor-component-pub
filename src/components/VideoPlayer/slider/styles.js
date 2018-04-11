import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export default css`
.slidecontainer {
    width: 30%; /* Width of the outside container */
    position: relative;
    margin: 0 auto;
    bottom: 40px;
}
.slider {
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;   
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%; 
    background: #f3d3d3;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f3d3d3;
    cursor: pointer;
}
  `;
