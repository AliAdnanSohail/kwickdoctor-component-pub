import React from 'react';
import renderer from 'react-test-renderer';

import { RadioButtonGroup } from '../src';

const defaultProps = {
  name: 'gender',
  selected: 'any',
  options: [{ value: 'male' }, { value: 'any' }, { value: 'female' }],
  label: 'Label',
};

it('renders correctly', () => {
  const element = renderer.create(<RadioButtonGroup {...defaultProps} />).toJSON();

  expect(element).toMatchSnapshot();
});
