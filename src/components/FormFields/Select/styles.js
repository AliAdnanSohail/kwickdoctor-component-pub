import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export default css`
  .select-container {
    position: relative;

    select {
      padding-right: 30px;
    }

    :global(svg) {
      position: absolute;
      right: 15px;
      top: calc(50% - 6px);

      height: 12px;
      width: 12px;

      fill: ${settings.borderColor};
      stroke: ${settings.borderColor};

      :global(polyline) {
        stroke-width: 5;
      }
    }
  }
`;
