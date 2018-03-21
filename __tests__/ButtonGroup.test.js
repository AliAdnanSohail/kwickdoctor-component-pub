import React from 'react';
import renderer from 'react-test-renderer';

import { ButtonGroup } from '../src';

it('renders correctly', () => {
  const element = renderer.create(<ButtonGroup />).toJSON();

  expect(element).toMatchSnapshot();
});
