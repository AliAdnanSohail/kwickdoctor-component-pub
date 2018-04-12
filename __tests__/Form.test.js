import React from 'react';
import renderer from 'react-test-renderer';

import { Form } from '../src';

it('renders correctly', () => {
  const element = renderer.create(<Form />).toJSON();

  expect(element).toMatchSnapshot();
});
