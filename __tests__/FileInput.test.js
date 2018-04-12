import React from 'react';
import renderer from 'react-test-renderer';
import { FileInput } from '../src';

it('renders correctly', () => {
  const element = renderer.create(<FileInput id="test">test</FileInput>).toJSON();

  expect(element).toMatchSnapshot();
});
