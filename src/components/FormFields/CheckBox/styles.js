import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export default css`
  .checkbox {
    position: relative;

    .label {
      display: inline-flex;
      align-items: center;
      position: relative;
      color: ${settings.textColor};

      font: {
        weight: 500;
        size: 1rem;
      }

      &:before {
        content: '';
        display: block;
        height: 20px;
        width: 20px;
        border: 2px solid #e7e7f0;
        border-radius: 5px;
        margin-right: 16px;
      }

      &.checked:before {
        background-color: #0d97f9;
        border-color: #0d97f9;
      }

      :global(.material-icons) {
        position: absolute;
        top: 2px;
        left: 2px;
      }
    }

    input[type='checkbox'] {
      position: absolute !important;
      top: 0;
      left: 0;
      clip: rect(1px 1px 1px 1px);
      clip: rect(1px, 1px, 1px, 1px);
      padding: 0 !important;
      border: 0 !important;
      height: 1px !important;
      width: 1px !important;
      min-width: 1px !important;
      min-height: 1px !important;
      overflow: hidden;
    }
  }
`;
