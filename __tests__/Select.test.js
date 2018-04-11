import React from 'react';
import renderer from 'react-test-renderer';

import { Select } from '../src';

const defaultProps = {
  name: 'gender',
  selected: 'any',
  options: [{ value: 'male' }, { value: 'any' }, { value: 'female' }],
  label: 'Label',
};

it('renders correctly', () => {
  const element = renderer.create(<Select {...defaultProps} />).toJSON();

  expect(element).toMatchSnapshot();
});
