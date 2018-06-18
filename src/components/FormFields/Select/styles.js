import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export default css`
  .select-container {
    position: relative;

    select {
      padding-right: 30px;
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
