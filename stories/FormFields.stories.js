import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Input, TextArea, Select } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Form Fields', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Input'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('Input', () => (
    <Input
      id="input"
      name={text('name', 'Name')}
      label={text('label', 'Label')}
      placeholder={text('placeholder', 'Start typing')}
    />
  ));

storiesOf('Form Fields', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Textarea'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('TextArea', () => (
    <TextArea
      id="textarea"
      name={text('name', 'Name')}
      label={text('label', 'Label')}
      placeholder={text('placeholder', 'Start typing')}
    />
  ));

storiesOf('Form Fields', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Select'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('Select', () => (
    <Select>
      <option value="1" />
      <option value="2" />
      <option value="3" />
      <option value="4" />
    </Select>
  ));
