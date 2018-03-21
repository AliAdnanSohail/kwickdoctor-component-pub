import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { Toast } from '../src';

it('renders correctly', () => {
  const element = renderer.create(<Toast />).toJSON();
  expect(element).toMatchSnapshot();
});
