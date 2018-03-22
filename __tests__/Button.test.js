import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { Button } from '../src';

it('renders correctly', () => {
  const element = renderer.create(<Button onClick={() => {}} title="Hello!" />).toJSON();

  expect(element).toMatchSnapshot();
});

it('transparent button renders correctly', () => {
  const element = mount(<Button onClick={() => {}} title="Hello!" transparent />);
  expect(element.find('button').hasClass('button--transparent')).toEqual(true);
});

it('squared button renders correctly', () => {
  const element = mount(<Button onClick={() => {}} title="Hello!" squared />);

  expect(element.find('button').hasClass('button--squared')).toEqual(true);
});

it('accent button renders correctly', () => {
  const element = mount(<Button onClick={() => {}} title="Hello!" accent />);

  expect(element.find('button').hasClass('button--accent')).toEqual(true);
});

it('accent button renders correctly', () => {
  const element = mount(<Button onClick={() => {}} title="Hello!" circle />);

  expect(element.find('button').hasClass('button--circle')).toEqual(true);
});
