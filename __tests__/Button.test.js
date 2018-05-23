import React from 'react';
import { mount } from 'enzyme';
import { EditIcon, SpinningIcon } from 'grommet/components/icons';

import { Button } from '../src';

it('renders correctly', () => {
  const buttonText = 'Hello!';
  const element = mount(<Button>{buttonText}</Button>);

  expect(element
    .find('button')
    .childAt(0)
    .text()).toEqual(buttonText);
});

it('accent button renders correctly', () => {
  const element = mount(<Button accent>Hello!</Button>);

  expect(element.find('button').hasClass('button--accent')).toEqual(true);
});

it('danger button renders correctly', () => {
  const element = mount(<Button danger>Hello!</Button>);

  expect(element.find('button').hasClass('button--danger')).toEqual(true);
});

it('disabled button renders correctly', () => {
  const element = mount(<Button disabled>Hello!</Button>);

  expect(element.find('button').hasClass('button--disabled')).toEqual(true);
  expect(element.prop('disabled')).toEqual(true);
});

it('flat button renders correctly', () => {
  const element = mount(<Button flat>Hello!</Button>);

  expect(element.find('button').hasClass('button--flat')).toEqual(true);
});

it('rounded button renders correctly', () => {
  const element = mount(<Button icon={<EditIcon />} rounded>Hello!</Button>);

  expect(element.find('button').hasClass('button--rounded')).toEqual(true);
  expect(element
    .find('button')
    .childAt(0)
    .type()).toEqual(EditIcon);
});

it('squared button renders correctly', () => {
  const element = mount(<Button squared>Hello!</Button>);

  expect(element.find('button').hasClass('button--squared')).toEqual(true);
});

it('transparent button renders correctly', () => {
  const element = mount(<Button transparent>Hello!</Button>);

  expect(element.find('button').hasClass('button--transparent')).toEqual(true);
});

it('button with loading prop renders correctly', () => {
  const element = mount(<Button loading>Hello!</Button>);

  expect(element.find('button').hasClass('button--with-icon')).toEqual(true);
  expect(element
    .find('button')
    .childAt(0)
    .type()).toEqual(SpinningIcon);
});

it('button with icon renders correctly', () => {
  const element = mount(<Button icon={<EditIcon />}>Hello!</Button>);

  expect(element.find('button').hasClass('button--with-icon')).toEqual(true);
  expect(element
    .find('button')
    .childAt(0)
    .type()).toEqual(EditIcon);
});

it('wave effect shows correctly', () => {
  const element = mount(<Button>Hello!</Button>);

  element.find('button').simulate('click');

  expect(element.find('button').hasClass('has-clicked')).toEqual(true);

  const timeout = setTimeout(() => {
    expect(element.find('button').hasClass('has-clicked')).toEqual(false);
  }, 300);

  clearTimeout(timeout);
});

it('xs button renders correctly', () => {
  const element = mount(<Button size="xs">Hello!</Button>);

  expect(element.find('button').hasClass('button--xs')).toEqual(true);
});

it('s button renders correctly', () => {
  const element = mount(<Button size="s">Hello!</Button>);

  expect(element.find('button').hasClass('button--s')).toEqual(true);
});
