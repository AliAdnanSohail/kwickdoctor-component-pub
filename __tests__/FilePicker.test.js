import React from 'react';
import renderer from 'react-test-renderer';

import { FilePicker } from '../src';

it('renders correctly', () => {
  const element = renderer
    .create(<FilePicker id="file-picker" name="file-picker" placeholder="file-picker" />)
    .toJSON();

  expect(element).toMatchSnapshot();
});
