import React from 'react';
import renderer from 'react-test-renderer';

import { Input } from '../src';

const defaultProps = {
  id: 'input-id',
  name: 'input-name',
  label: 'input-label',
  placeholder: 'input-placeholder',
};

it('Input renders correctly', () => {
  const element = renderer.create(<Input {...defaultProps} />).toJSON();

  expect(element).toMatchSnapshot();
});
