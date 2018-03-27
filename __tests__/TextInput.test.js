import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { TextInput } from '../src';

const baseProps = {
  id: 'text-input-id',
  name: 'text-input-name',
  onChange() {},
  placeholder: 'text-input-placeholder',
  value: 'text-input-value',
  label: 'text-input-label',
  error: '',
  className: 'text-input-class',
  multiline: false,
};

it('TextInput renders correctly', () => {
  const element = renderer.create(<TextInput {...baseProps} />).toJSON();

  expect(element).toMatchSnapshot();
});

it('TextInput set id correctly', () => {
  const element = mount(<TextInput {...baseProps} />);

  expect(element.find(`[htmlFor="${baseProps.id}"]`)).toHaveLength(1);
  expect(element.find(`input#${baseProps.id}`)).toHaveLength(1);
});

it('TextInput set name correctly', () => {
  const element = mount(<TextInput {...baseProps} />);

  expect(element.find(`input[name="${baseProps.name}"]`)).toHaveLength(1);
});

it('TextInput set placeholder correctly', () => {
  const element = mount(<TextInput {...baseProps} />);

  expect(element.find(`input[placeholder="${baseProps.placeholder}"]`)).toHaveLength(1);
});

it('TextInput set value correctly', () => {
  const element = mount(<TextInput {...baseProps} />);

  expect(element.find('input').instance().value).toEqual(baseProps.value);
});

it('TextInput set label correctly', () => {
  const element = mount(<TextInput {...baseProps} />);

  expect(element.find('label').text()).toEqual(baseProps.label);
});

it('TextInput set class correctly', () => {
  const element = mount(<TextInput {...baseProps} />);

  expect(element.find('input').hasClass(baseProps.className)).toEqual(true);
});

it('TextInput textarea renders correctly', () => {
  const props = Object.assign({}, baseProps);
  props.multiline = true;
  const element = mount(<TextInput {...props} />);

  expect(element.find('textarea')).toHaveLength(1);
});

it('TextInput input correctly', () => {
  const props = Object.assign({}, baseProps);
  const inputValue = 'Changed';
  let value = '';
  props.onChange = (event) => {
    value = event.target.value;
  };

  const element = mount(<TextInput {...props} />);
  const input = element.find('input');
  input.simulate('focus');
  input.simulate('change', { target: { value: inputValue } });

  expect(inputValue === value).toEqual(true);
});

it('TextInput show error correctly', () => {
  const props = Object.assign(baseProps);
  props.error = 'error-text';
  const element = mount(<TextInput {...props} />);

  expect(element.find('.input-error').text()).toEqual(props.error);
});
