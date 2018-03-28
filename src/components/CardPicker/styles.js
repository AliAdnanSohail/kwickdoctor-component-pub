import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
.card-picker{
  text-align: center;
}
.card{
  min-width: 140px;
  max-width: 240px;
  height: 100%;
  border: 1px solid #EFF0F4;	
  border-radius: 25px;
  padding: 20px 10px;
  margin: 10px;
  float: left;
}
.card.active{
  border: 1px solid #0C97F9; 
}
.card input{
  display:none;
}
.card img{
  max-width:100%;
  max-height:80%;
}
.content{
  width: 100%;
  margin-top:20px;
  margin-bottom:0px;
}
 
`;
