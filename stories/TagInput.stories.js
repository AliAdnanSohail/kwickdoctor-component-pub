import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { TagInput } from '../src';
import results from '../.jest-test-results.json';

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

const suggestions = [
  'Pseudo',
  'classes',
  'are',
  'bolted',
  'on',
  'to',
  'selectors',
  'specify',
  'state',
  'or',
  'relation',
  'the',
  'selector',
  'They',
  'take',
  'form',
  'of',
  'pseudo',
  'class',
  'property',
  'value',
  'simply',
  'with',
  'colon',
  'in',
  'between',
  'and',
  'Many',
  'CSS',
  'proposals',
  'not',
  'supported',
  'by',
  'all',
  'browsers',
  'but',
  'there',
  'four',
  'that',
  'can',
  'be',
  'used',
  'safely',
  'when',
  'applied',
  'links',
];

storiesOf('Tag Input', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('TagInput'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('Tag Input', () => (
    <TagInput
      id={text('id', 'tag-input-id')}
      label={text('label', 'label')}
      tags={exampleTags}
      onChange={action('onChange')}
      tagCreate={name => ({ name, _id: '' })}
      suggestions={suggestions}
      existingTags={suggestions}
    />
  ));
