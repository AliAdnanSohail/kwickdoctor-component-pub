import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export const datepickerBlock = css`
  .datepicker-block {
    position: relative;
  }
`;

export const calendar = css`
.datepicker-block  .calendar {
    background-color: #ffffff;

    border: none;
    border-radius: 6px;
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.05);

    .react-datepicker {
      &__header {
        border: none;
        background-color: #ffffff;
      }

      &__month {
        margin-top: 0;
      }

      &__month-container {
        padding: 10px 20px 20px 20px;
      }

      &__current-month {
        font-size: 1rem;
        margin-bottom: 20px;
      }

      &__triangle {
        position: absolute;
        top: 0 !important;
        left: 36px !important;

        width: 0;
        height: 0;
        margin: 0 !important;

        transform-origin: 0 0;
        transform: rotate(135deg);

        box: {
          sizing: border-box !important;
          shadow: -4px 4px 14px 0 rgba(0, 0, 0, 0.05) !important;
        }

        border: {
          width: 6px !important;
          style: solid !important;
          color: transparent transparent #ffffff #ffffff !important;
        }

        :before {
          content: none !important;
        }
      }

      &__navigation {
        border: none;
        top: 17px;

        :before {
          content: '';
          display: block;
          width: 24px;
          height: 24px;

          position: absolute;
          left: -39px;

          color: #222328;

          background: {
            image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 24 24' width='24px' height='24px' role='img' class='grommetux-control-icon grommetux-control-icon-form-next grommetux-control-icon--responsive' aria-label='form-next'%3E%3Cpolyline fill='none' stroke='%23000' stroke-width='2' points='9 6 15 12 9 18'%3E%3C/polyline%3E%3C/svg%3E");
            repeat: no-repeat;
          }

          font: {
            weight: bold;
            size: 1.3rem;
          }
        }

        &--next {
          right: 16px;
        }

        &--previous {
          left: 16px;

          :before {
            transform: rotate(180deg);
            left: 18px;
          }
        }
      }

      &__day {
        margin: 6px;
        border-radius: 50%;

        width: 24px;
        height: 24px;
        line-height: 24px;

        color: ${settings.textColor};

        font: {
          size: 0.75rem;
          weight: 400;
        }

        :hover:not(.react-datepicker__day--selected) {
          color: ${settings.textColor};
          background-color: #eff0f4;
        }

        &--selected {
          color: #ffffff;
          background-color: ${settings.primaryColor};
        }

        &--outside-month {
          color: #bbbccd;
        }
      }

      &__day-name {
        margin: 0 6px;

        color: #bbbccd;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-transform: uppercase;

        font: {
          size: 0.1rem;
          weight: 400;
        }
      }
    }
  }
`;

export const datepicker = css`
.datepicker-block  .datepicker {
    width: 100%;
    padding: 12px 16px 12px 52px;

    color: ${settings.textColor};
    font-size: 0.875rem;

    box-sizing: border-box;

    background: {
      color: #ffffff;
      repeat: no-repeat;
      position: 17px center;
    }

    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='19px' height='20px' viewBox='0 0 19 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 48 %2847235%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ecalendar%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3Cpath d='M4,4 C3.44771525,4 3,4.44771525 3,5 L3,17 C3,17.5522847 3.44771525,18 4,18 L17,18 C17.5522847,18 18,17.5522847 18,17 L18,5 C18,4.44771525 17.5522847,4 17,4 L4,4 Z M4,2 L17,2 C18.6568542,2 20,3.34314575 20,5 L20,17 C20,18.6568542 18.6568542,20 17,20 L4,20 C2.34314575,20 1,18.6568542 1,17 L1,5 C1,3.34314575 2.34314575,2 4,2 Z M3,7 L18,7 L18,9 L3,9 L3,7 Z M6,0.5 L6,0.5 C6.55228475,0.5 7,0.94771525 7,1.5 L7,5 C7,5.55228475 6.55228475,6 6,6 L6,6 C5.44771525,6 5,5.55228475 5,5 L5,1.5 C5,0.94771525 5.44771525,0.5 6,0.5 Z M15,0.5 L15,0.5 C15.5522847,0.5 16,0.94771525 16,1.5 L16,5 C16,5.55228475 15.5522847,6 15,6 L15,6 C14.4477153,6 14,5.55228475 14,5 L14,1.5 C14,0.94771525 14.4477153,0.5 15,0.5 Z M15.25,13 C15.9403559,13 16.5,12.4403559 16.5,11.75 C16.5,11.0596441 15.9403559,10.5 15.25,10.5 C14.5596441,10.5 14,11.0596441 14,11.75 C14,12.4403559 14.5596441,13 15.25,13 Z M15.25,16.8000002 C15.9403559,16.8000002 16.5,16.2403561 16.5,15.5500002 C16.5,14.8596443 15.9403559,14.3000002 15.25,14.3000002 C14.5596441,14.3000002 14,14.8596443 14,15.5500002 C14,16.2403561 14.5596441,16.8000002 15.25,16.8000002 Z M10.5500002,13 C11.2403561,13 11.8000002,12.4403559 11.8000002,11.75 C11.8000002,11.0596441 11.2403561,10.5 10.5500002,10.5 C9.85964425,10.5 9.30000019,11.0596441 9.30000019,11.75 C9.30000019,12.4403559 9.85964425,13 10.5500002,13 Z M10.5500002,16.8000002 C11.2403561,16.8000002 11.8000002,16.2403561 11.8000002,15.5500002 C11.8000002,14.8596443 11.2403561,14.3000002 10.5500002,14.3000002 C9.85964425,14.3000002 9.30000019,14.8596443 9.30000019,15.5500002 C9.30000019,16.2403561 9.85964425,16.8000002 10.5500002,16.8000002 Z M5.75,13 C6.44035594,13 7,12.4403559 7,11.75 C7,11.0596441 6.44035594,10.5 5.75,10.5 C5.05964406,10.5 4.5,11.0596441 4.5,11.75 C4.5,12.4403559 5.05964406,13 5.75,13 Z M5.75,16.8000002 C6.44035594,16.8000002 7,16.2403561 7,15.5500002 C7,14.8596443 6.44035594,14.3000002 5.75,14.3000002 C5.05964406,14.3000002 4.5,14.8596443 4.5,15.5500002 C4.5,16.2403561 5.05964406,16.8000002 5.75,16.8000002 Z' id='path-1'%3E%3C/path%3E%3C/defs%3E%3Cg id='Icons/Calendar' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate%28-1.000000, 0.000000%29'%3E%3Cg id='icon'%3E%3Cmask id='mask-2' fill='white'%3E%3Cuse xlink:href='%23path-1'%3E%3C/use%3E%3C/mask%3E%3Cuse id='calendar' fill='%23cccccc' fill-rule='nonzero' xlink:href='%23path-1'%3E%3C/use%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

    border: {
      width: 2px;
      style: solid;
      color: ${settings.borderColor};
      radius: 4px;
    }

    :focus {
      outline: none;
      border-color: ${settings.primaryColor};
    }
  }
  .datepicker-block.has-error .datepicker, .datepicker-block.has-error .datepicker:focus {
    border-color: ${settings.errorColor};
  }
`;

export const wrapper = css`
  .datepicker-block .react-datepicker-wrapper,
  .datepicker-block .react-datepicker__input-container {
    width: 100%;
  }
`;

export const label = css`
  .datepicker-block  label {
    color: ${settings.textColor};
    display: block;
    margin-bottom: 6px;

    font: {
      weight: 500;
      size: 1rem;
    }
  }
`;

export const error = css`
  .datepicker-block .input-error {
    position: absolute;
    left: 4px;

    width: auto;
    max-width: 50%;

    padding: 12px 16px;
    margin-top: -6px;

    border-radius: 3px;
    background-color: #ffffff;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.14);
    color: ${settings.errorColor};

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
