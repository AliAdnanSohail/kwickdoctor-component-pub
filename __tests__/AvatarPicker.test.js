import React from 'react';
import renderer from 'react-test-renderer';

import { AvatarPicker } from '../src';

const baseProps = {
  id: 'test-id',
  name: 'input-avatar-picker',
};
it('renders correctly', () => {
  const element = renderer.create(<AvatarPicker {...baseProps} >test</AvatarPicker>).toJSON();

  expect(element).toMatchSnapshot();
});
