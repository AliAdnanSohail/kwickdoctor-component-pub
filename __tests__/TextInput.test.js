import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { Form, TextInput } from '../src';

const baseProps = {
  id: 'text-input-id',
  name: 'text-input-name',
  placeholder: 'text-input-placeholder',
  value: 'text-input-value',
  label: 'text-input-label',
  className: 'text-input-class',
  multiline: false,
  onChange: () => {},
};

it('TextInput renders correctly', () => {
  const element = renderer
    .create(<Form><TextInput {...baseProps} /></Form>)
    .toJSON();

  expect(element).toMatchSnapshot();
});

it('TextInput set id correctly', () => {
  const element = mount(<Form><TextInput {...baseProps} /></Form>);

  expect(element.find(`[htmlFor="${baseProps.id}"]`)).toHaveLength(1);
  expect(element.find(`input#${baseProps.id}`)).toHaveLength(1);
});

it('TextInput set name correctly', () => {
  const element = mount(<Form><TextInput {...baseProps} /></Form>);

  expect(element.find(`input[name="${baseProps.name}"]`)).toHaveLength(1);
});

it('TextInput set placeholder correctly', () => {
  const element = mount(<Form><TextInput {...baseProps} /></Form>);

  expect(element.find(`input[placeholder="${baseProps.placeholder}"]`)).toHaveLength(1);
});

it('TextInput set value correctly', () => {
  const element = mount(<Form><TextInput {...baseProps} /></Form>);

  expect(element.find('input').instance().value).toEqual(baseProps.value);
});

it('TextInput set label correctly', () => {
  const element = mount(<Form><TextInput {...baseProps} /></Form>);

  expect(element.find('label').text()).toEqual(baseProps.label);
});

it('TextInput set class correctly', () => {
  const element = mount(<Form><TextInput {...baseProps} /></Form>);

  expect(element.find('input').hasClass(baseProps.className)).toEqual(true);
});

it('TextInput textarea renders correctly', () => {
  const props = { ...baseProps, multiline: true };
  const element = mount(<Form><TextInput {...props} /></Form>);

  expect(element.find('textarea')).toHaveLength(1);
});

it('TextInput input correctly', () => {
  let value = '';

  const props = {
    ...baseProps,
    onChange: (event) => {
      value = event.target.value;
    },
  };

  const inputValue = 'Changed';

  const element = mount(<Form><TextInput {...props} /></Form>);
  const input = element.find('input');
  input.simulate('focus');
  input.simulate('change', { target: { value: inputValue } });

  expect(inputValue === value).toEqual(true);
});
