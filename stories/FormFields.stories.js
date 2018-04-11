import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Input, RadioButtonGroup, Select, TextArea } from '../src';
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
  .addDecorator(withTests({ results })('RadioButtonGroup'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('RadioButtonGroup', () => (
    <RadioButtonGroup
      name={text('name', 'Gender')}
      selected={text('selected', 'male')}
      options={[{ value: 'male' }, { value: 'any' }, { value: 'female' }]}
      label={text('label', 'Label')}
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

storiesOf('Form Fields', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('TextArea'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('TextArea', () => (
    <TextArea
      id="textarea"
      name={text('name', 'Name')}
      label={text('label', 'Label')}
      placeholder={text('placeholder', 'Start typing')}
    />
  ));
