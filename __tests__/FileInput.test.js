import React from 'react';
import renderer from 'react-test-renderer';

import { FileInput } from '../src';

it('renders correctly', () => {
  const element = renderer.create(<FileInput>test</FileInput>).toJSON();

  expect(element).toMatchSnapshot();
});
