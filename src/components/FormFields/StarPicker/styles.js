import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export default css`
  .form-field {
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-column-gap: 12px;

    label {
      color: ${settings.textColor};
      display: inline-block;
      margin-bottom: 6px;

      font: {
        weight: 500;
        size: 1rem;
      }
    }
  }

  .star {
    display: grid;

    cursor: pointer;

    input {
      position: absolute !important;
      clip: rect(1px 1px 1px 1px);
      clip: rect(1px, 1px, 1px, 1px);
      padding: 0 !important;
      border: 0 !important;
      height: 1px !important;
      width: 1px !important;
      overflow: hidden;
    }
  }
`;
