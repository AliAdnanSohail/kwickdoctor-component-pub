import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
.content-label :not(:first-child){
padding-left: 10px
}
.card-picker{
  display: inline-block;
  text-align: center;
  vertical-align:middle;
}
.card{
  height: 350px;	
  width: 268px;	
  border: 1px solid #EFF0F4;	
  border-radius: 25px;
  display: inline-block;
}
.card.active{
  border: 1px solid #0C97F9; border-radius: 25px;
}
.card input{
  display:none;
}
.card img{
  margin-top : 20px;
  width:240px;
  height:240px;
}
.content{
  line-height: 80px;
}

  
`;
