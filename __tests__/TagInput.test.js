import React from 'react';
import renderer from 'react-test-renderer';

import { TagInput } from '../src';


const exampleTags = [
  {
    _id: '1',
    name: 'tag one',
  },
  {
    _id: '2',
    name: 'tag two',
  },
];

const suggestions = ['Pseudo', 'classes', 'are', 'bolted', 'on', 'to', 'selectors', 'specify', 'state', 'or'];

const baseProps = {
  id: 'tag-input-id',
  label: 'tag-input-label',
  tags: exampleTags,
  tagCreate(name) { return ({ name, _id: '' }); },
  suggestions,
  existingTags: suggestions,
};

it('TagInput renders correctly', () => {
  const element = renderer.create(<TagInput {...baseProps} />).toJSON();

  expect(element).toMatchSnapshot();
});
