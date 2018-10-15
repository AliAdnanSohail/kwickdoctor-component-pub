import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export default css`
  select::-ms-expand {
    display: none;
  }
  
  .select-container {
    position: relative;

    select {
      padding-right: 30px;
      background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' 
      width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'/%3E%3Cpath d='M0
      0h24v24H0z' fill='none'/%3E%3C/svg%3E") no-repeat 99% center;
    }

    :global(.material-icons) {
      position: absolute;
      right: 15px;
      top: calc(50% - 12px);

      height: 12px;
      width: 12px;

      color: ${settings.borderColor};
    }
  }
`;
