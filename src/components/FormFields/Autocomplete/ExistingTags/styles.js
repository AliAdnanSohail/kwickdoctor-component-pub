import css from 'styled-jsx/css';

import settings from '../../../../utils/style-helper';

export default css`
  .tag--existing {
    display: inline-block;
    padding: 5px;
    max-width: 100%;
    box-sizing: border-box;
    position: relative;

    button {
      outline: none;
      display: inline-block;
      vertical-align: baseline;
      border: none;
      border-radius: 3px;
      background: ${settings.primaryColor};
      padding: 5px;
      color: #ffffff;

      i {
        font-size: 0.75rem;
      }
    }

    :global(.tag-input__suggestions) {
      &:before {
        content: '';
        position: absolute;
        top: 0 !important;
        left: 20px !important;

        width: 0;
        height: 0;
        margin: 0 !important;

        transform-origin: 0 0;
        transform: rotate(135deg);

        box-sizing: border-box !important;
        box-shadow: -4px 4px 14px 0 rgba(0, 0, 0, 0.05) !important;

        border: {
          width: 6px !important;
          style: solid !important;
          color: transparent transparent #ffffff #ffffff !important;
        }
      }
    }
  }
`;
