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

  expect(element.find('button').hasClass('transparent')).toEqual(true);
});

it('squared button renders correctly', () => {
  const element = mount(<Button onClick={() => {}} title="Hello!" squared />);

  expect(element.find('button').hasClass('squared')).toEqual(true);
});

it('accent button renders correctly', () => {
  const element = mount(<Button onClick={() => {}} title="Hello!" accent />);

  expect(element.find('button').hasClass('accent')).toEqual(true);
});
