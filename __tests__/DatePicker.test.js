import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';
import { mount } from 'enzyme';

import { DatePicker } from '../src';

const testDate = '2018-03-15';
const baseProps = {
  id: 'datepicker-id',
  label: 'datepicker-label',
  dateFormat: 'DD MMM, YYYY',
  input: {
    name: 'datepicker-name',
    onChange: () => undefined,
    value: moment(testDate),
  },
  meta: {
    error: '',
  },
};

it('Datepicker renders correctly', () => {
  const element = renderer.create(<DatePicker {...baseProps} />).toJSON();

  expect(element).toMatchSnapshot();
});

it('Datepicker set id correctly', () => {
  const element = mount(<DatePicker {...baseProps} />);

  expect(element.find(`[htmlFor="${baseProps.id}"]`)).toHaveLength(1);
  expect(element.find(`input#${baseProps.id}`)).toHaveLength(1);
});

it('Datepicker set name correctly', () => {
  const element = mount(<DatePicker {...baseProps} />);

  expect(element.find(`input[name="${baseProps.input.name}"]`)).toHaveLength(1);
});

it('Datepicker set value works correctly', () => {
  const element = mount(<DatePicker {...baseProps} />);

  expect(element.find('input').instance().value).toEqual(baseProps.input.value.format(baseProps.dateFormat));
});

it('Datepicker set label works correctly', () => {
  const element = mount(<DatePicker {...baseProps} />);

  expect(element.find('label').text()).toEqual(baseProps.label);
});

it('Datepicker input works correctly', () => {
  const inputValue = '31 Jan, 2017';
  const props = {
    ...baseProps,
    input: {
      ...baseProps.input,
      onChange(date) {
        this.value = date;
      },
    },
  };

  const element = mount(<DatePicker {...props} />);
  const input = element.find('input');
  input.simulate('focus');
  input.simulate('change', { target: { value: inputValue } });

  expect(inputValue).toEqual(props.input.value.format('DD MMM, YYYY'));
});

it('Datepicker show error correctly', () => {
  const props = { ...baseProps, meta: { ...baseProps.meta, error: 'some error', touched: true } };
  const element = mount(<DatePicker {...props} />);

  expect(element.find('.error').text()).toEqual(props.meta.error);
});

it('Datepicker click by day works correctly', () => {
  const props = {
    ...baseProps,
    input: {
      ...baseProps.input,
      onChange(date) {
        this.value = date;
      },
    },
  };

  const element = mount(<DatePicker {...props} />);
  element.find('input').simulate('focus');
  element.find('[aria-label="day-16"]').simulate('click');

  expect(props.input.value.isSame(moment(testDate).add(1, 'day'), 'day')).toEqual(true);
});
