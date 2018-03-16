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
  background-image: url("${settings.closeIcon}");
  }

  .icon:hover {
    height: 18px;
    width: 18px;
    background-size: 18px 18px;
  }

`;
