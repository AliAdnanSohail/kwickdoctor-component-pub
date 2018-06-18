import React from 'react';
import renderer from 'react-test-renderer';

import { RadioButtonGroup } from '../src';

const defaultProps = {
  id: 'gender',
  label: 'Label',
  name: 'gender',
  options: [{ value: 'male' }, { value: 'female' }],
};

it('renders correctly', () => {
  const element = renderer.create(<RadioButtonGroup {...defaultProps} />).toJSON();

  expect(element).toMatchSnapshot();
});
