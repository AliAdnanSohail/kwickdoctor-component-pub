import css from 'styled-jsx/css';

import settings from '../../../utils/style-helper';

export default css`
  .upload-file {
    position: relative;

    color: ${settings.primaryColor};
    line-height: 16px;
    letter-spacing: 0.15rem;

    background: none;
    border: none;
    box-sizing: border-box;

    cursor: pointer;

    font: {
      size: 0.875rem;
      weight: 500;
    }

    &--selected {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 14px;

      max-width: 335px;

      border-radius: 4px;
      background-color: #ffffff;
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);

      .upload-file__label {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: ${settings.textLightColor};
      }

      div.error {
        top: 100%;
      }
    }

    &__label-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: calc(100% - 32px);

      :global(.material-icons) {
        margin-right: 12px;
      }
    }

    .input-file {
      position: absolute !important;
      clip: rect(1px 1px 1px 1px);
      clip: rect(1px, 1px, 1px, 1px);
      padding: 0 !important;
      border: 0 !important;
      height: 1px !important;
      width: 1px !important;
      overflow: hidden;
    }

    .error {
      top: 32px;
    }
  }
`;
