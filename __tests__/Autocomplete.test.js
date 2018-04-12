import React from 'react';
import renderer from 'react-test-renderer';

import { Autocomplete } from '../src';

const suggestions = ['Pseudo', 'classes', 'are', 'bolted', 'on', 'to', 'selectors', 'specify'];

const defaultProps = {
  id: 'autocomplete',
  name: 'Name',
  label: 'Label',
  placeholder: 'Start typing',
  suggestions,
};

it('renders correctly', () => {
  const element = renderer.create(<Autocomplete {...defaultProps} />).toJSON();

  expect(element).toMatchSnapshot();
});
