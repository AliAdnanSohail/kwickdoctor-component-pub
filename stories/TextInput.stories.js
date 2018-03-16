import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { TextInput, Textarea } from '../src';
import results from '../.jest-test-results.json';

storiesOf('TextInput', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('TextInput'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('Text input', () => (
    <TextInput
      id="text-input"
      name={text('name', 'name')}
      onChange={action('changed')}
      placeholder={text('placeholder', 'text input')}
      value={text('value', 'example text')}
      label={text('label', 'Text input')}
      error={text('error', '')}
      className={text('class name', '')}
    />
  ));

storiesOf('TextInput', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Textarea'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('Textarea', () => (
    <Textarea
      id="textarea"
      name={text('name', 'name')}
      onChange={action('changed')}
      placeholder={text('placeholder', 'textarea input')}
      value={text('value', 'example textarea')}
      label={text('label', 'Textarea')}
      error={text('error', '')}
      className={text('class name', '')}
    />
  ));
