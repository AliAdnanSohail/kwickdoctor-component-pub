import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from '../src';

it('renders correctly', () => {
  const tree = renderer
    .create(<Button onClick={() => {}}>Facebook</Button>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
