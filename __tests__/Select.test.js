import React from 'react';
import renderer from 'react-test-renderer';

import { Select } from '../src';

const defaultProps = {
  id: 'input-id',
  name: 'input-name',
  label: 'input-label',
  placeholder: 'input-placeholder',
};

it('renders correctly', () => {
  const element = renderer
    .create(<Select {...defaultProps}>
      <option value="1" />
      <option value="2" />
      <option value="3" />
      <option value="4" />
    </Select>)
    .toJSON();

  expect(element).toMatchSnapshot();
});
