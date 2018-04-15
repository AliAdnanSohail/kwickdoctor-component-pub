import React from 'react';
import renderer from 'react-test-renderer';

import { TextArea } from '../src';

const defaultProps = {
  id: 'input-id',
  name: 'input-name',
  label: 'input-label',
  placeholder: 'input-placeholder',
};

it('renders correctly', () => {
  const element = renderer.create(<TextArea {...defaultProps} />).toJSON();

  expect(element).toMatchSnapshot();
});
