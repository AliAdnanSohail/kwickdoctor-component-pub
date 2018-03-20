import React from 'react';
import renderer from 'react-test-renderer';

import { Card } from '../src';

it('renders correctly', () => {
  const element = renderer.create(<Card>test</Card>).toJSON();

  expect(element).toMatchSnapshot();
});