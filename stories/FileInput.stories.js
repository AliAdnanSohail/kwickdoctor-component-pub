import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { FileInput } from '../src';
import results from '../.jest-test-results.json';

storiesOf('FileInput', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('FileInput'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('simple file input', () => (
    <FileInput
      id="text-input"
      name={text('name', 'name')}
      message="Upload license"
    />
  ));
