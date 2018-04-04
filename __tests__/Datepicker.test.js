import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';
import { mount } from 'enzyme';

import { Datepicker } from '../src';

const testDate = '2018-03-15';
const baseProps = {
  id: 'datepicker-id',
  name: 'datepicker-name',
  onChange() {},
  value: moment(testDate),
  label: 'datepicker-label',
  error: '',
  dateFormat: 'DD MMM, YYYY',
};

it('Datepicker renders correctly', () => {
  const element = renderer.create(<Datepicker {...baseProps} />).toJSON();

  expect(element).toMatchSnapshot();
});

it('Datepicker set id correctly', () => {
  const element = mount(<Datepicker {...baseProps} />);

  expect(element.find(`[htmlFor="${baseProps.id}"]`)).toHaveLength(1);
  expect(element.find(`input#${baseProps.id}`)).toHaveLength(1);
});

it('Datepicker set name correctly', () => {
  const element = mount(<Datepicker {...baseProps} />);

  expect(element.find(`input[name="${baseProps.name}"]`)).toHaveLength(1);
});

it('Datepicker set value correctly', () => {
  const element = mount(<Datepicker {...baseProps} />);

  expect(element.find('input').instance().value).toEqual(baseProps.value.format(baseProps.dateFormat));
});

it('Datepicker set label correctly', () => {
  const element = mount(<Datepicker {...baseProps} />);

  expect(element.find('label').text()).toEqual(baseProps.label);
});

it('Datepicker input correctly', () => {
  const props = Object.assign({}, baseProps);
  const inputValue = '31 Jan, 2017';
  let value;
  props.onChange = (date) => {
    value = date;
  };

  const element = mount(<Datepicker {...props} />);
  const input = element.find('input');
  input.simulate('focus');
  input.simulate('change', { target: { value: inputValue } });

  expect(inputValue === value.format('DD MMM, YYYY')).toEqual(true);
});

it('Datepicker show error correctly', () => {
  const props = Object.assign({}, baseProps);
  props.error = 'error-text';
  const element = mount(<Datepicker {...props} />);

  expect(element.find('.input-error').text()).toEqual(props.error);
});

it('Datepicker click by day correctly', () => {
  const props = Object.assign({}, baseProps);
  let value = props.value.clone();
  props.onChange = (date) => {
    value = date;
  };
  const element = mount(<Datepicker {...props} />);
  element.find('input').simulate('focus');
  element.find('[aria-label="day-16"]').simulate('click');

  expect(props.value.isSame(value, 'day')).toEqual(false);
});
