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
  box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.05);
  }

  // indicator
  .circle {
  height: 7px;
  width: 7px;
  margin: 15px;
  background-color: #222328;
  border-radius: 50%;
  }

  .primary .circle {
  background-color: ${settings.primaryColor};
  }

  .message {
  width: 303px;
  color: #222328;
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
  border: none;
  outline: none;
  opacity: 0.6;
  cursor: pointer;
  background-image: url("${settings.closeIcon}");
  background-repeat: no-repeat;
  background-color: transparent;
  
  &:hover {
    opacity: 1;
  }
}
`;
