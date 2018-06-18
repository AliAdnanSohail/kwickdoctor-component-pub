import React from 'react';
import renderer from 'react-test-renderer';

import { Avatar } from '../src';

it('renders correctly', () => {
  const element = renderer.create(<Avatar />).toJSON();

  expect(element).toMatchSnapshot();
});
