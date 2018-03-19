import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  .box {
    display: flex;
    align-items: center;
    color: ${settings.textColor};
  }
  .box.rectangle-22 {
  height: 78px;
  width: 392px;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 40px 0 rgba(0,0,0,0.05);
  }
  // indicator
  .circle {
  height: 7px;
  width: 7px;
  margin: 15px;
  background-color: #222328;
  border-radius: 50%;
  }
  .box--primary .circle {
  background-color: ${settings.primaryColor};
  }
  // text
  .message {
  width: 303px;
  color: #222328;
  //font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  }
  .icons-close {
  height: 21px;
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  }
  .icon {
  height: 13px;
  width: 13px;
  background-size: 13px 13px;
  transition: all 0.3s;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg version='1.1' id='close_icon' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 212.982 212.982' style='enable-background:new 0 0 212.982 212.982;' xml:space='preserve'%3E%3Cg class='close'%3E%3Cpath style='fill-rule:evenodd;clip-rule:evenodd;' d='M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312 c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312 l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937 c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
  }

  .icon:hover {
    height: 18px;
    width: 18px;
    background-size: 18px 18px;
  }

`;
