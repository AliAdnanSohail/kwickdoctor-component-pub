import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  input.text-input {
    padding: 12px 16px;
    box-sizing: border-box;
    line-height: 18px;
    color: ${settings.textColor};

    border: {
      width: 2px;
      radius: 4px;
      style: solid;
      color: #e7e7f0;
    }

    font: {
      style: normal;
      weight: normal;
      size: 0.875rem;
    }

    ::-webkit-input-placeholder {
      color: ${settings.placeholderColor};
    }

    ::-moz-placeholder {
      color: ${settings.placeholderColor};
    }

    :-ms-input-placeholder {
      color: ${settings.placeholderColor};
    }

    :-moz-placeholder {
      color: ${settings.placeholderColor};
    }

    :focus {
      outline: none;
      padding: 12px 16px;
      border-color: ${settings.primaryColor};
    }
  }
`;