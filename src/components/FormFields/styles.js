import css from 'styled-jsx/css';
import settings from '../../utils/style-helper';

export default css`
  .form-field {
    position: relative;
  }
`;

export const error = css`
  .error {
    position: absolute;
    left: 16px;

    width: auto;
    max-width: calc(100% - 32px);

    box-sizing: border-box;
    word-wrap: break-word;

    padding: 12px 16px;
    margin-top: -6px;

    border-radius: 3px;
    background-color: #ffffff;
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.05);
    color: ${settings.errorColor};

    z-index: 999;

    font: {
      size: 0.875rem;
      weight: 500;
    }

    :before {
      content: '';
      position: absolute;
      top: 0;
      left: 32px;

      width: 0;
      height: 0;

      transform-origin: 0 0;
      transform: rotate(135deg);

      box: {
        sizing: border-box;
        shadow: -4px 4px 14px 0 rgba(0, 0, 0, 0.05);
      }

      border: {
        width: 6px;
        style: solid;
        color: transparent transparent #ffffff #ffffff;
      }
    }
  }
`;

export const label = css`
  label {
    color: ${settings.textColor};
    display: inline-block;
    margin-bottom: 6px;

    font: {
      weight: 500;
      size: 1rem;
    }
  }
`;

export const textInput = css`
  input,
  textarea  {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    min-height: 44px;
    padding: 12px 16px;

    background-color: #ffffff;
    color: ${settings.textColor};
    box-sizing: border-box;
    
  
    font: {
      style: normal;
      weight: normal;
      size: 0.875rem;
    }

    border: {
      width: 2px;
      style: solid;
      color: ${settings.borderColor};
      radius: 4px;
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

    &.invalid,
    &.invalid:focus {
      border-color: ${settings.errorColor};
    }
  }
`;


export const select = css`
select{
  border-width:0px,;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  padding: 0;
  margin: 0;
  padding: 12px 16px;

  font: {
    style: normal;
    weight: normal;
    size: 0.875rem;
  }

  border: {
    width: 2px;
    style: solid;
    color: ${settings.borderColor};
    radius: 4px;
  }

  &.invalid,
  &.invalid:focus {
    border-color: ${settings.errorColor};
  }

  ::-webkit-scrollbar {
    width: 5px;
    opacity: 0.3;
    border-radius: 2.5px;
    background-color: #D8D8D8;
  }

  ::-moz-scrollbar {
    width: 5px;
    opacity: 0.3;
    border-radius: 2.5px;
    background-color: #D8D8D8;
  }

  -webkit-appearance: none;
  appearance: none;
  :-ms-expand {
    display: none;
  }

  :focus {
    outline: none;
    padding: 12px 16px;
    border-color: ${settings.primaryColor};
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
}

option{
  padding: 7px 12px;
}

.select-container {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 44px;

  background-color: #ffffff;
  color: ${settings.textColor};
  box-sizing: border-box;


  :focus {
    outline: none;
    border-color: ${settings.primaryColor};
  }

}

.icon{
  position: absolute;
  top: 40px;
  right: 15px;

  width: 11px;
  height: 11px;
  z-index: 1;
  stroke: ${settings.placeholderColor};
}
`;
