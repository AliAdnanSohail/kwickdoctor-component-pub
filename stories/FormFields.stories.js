import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, array, object, boolean } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import { action } from '@storybook/addon-actions';

import {
  Autocomplete,
  CheckBox,
  FilePicker,
  Input,
  RadioButtonGroup,
  Select,
  TextArea,
  DatePicker,
} from '../src';
import results from '../.jest-test-results.json';

storiesOf('Form Fields', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Autocomplete'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('Autocomplete', () => (
    <Autocomplete
      id="autocomplete"
      name={text('name', 'Name')}
      label={text('label', 'Label')}
      placeholder={text('placeholder', 'Start typing')}
      suggestions={array('suggestions', [
        'Pseudo',
        'classes',
        'are',
        'bolted',
        'on',
        'to',
        'selectors',])}
      notEditable={boolean('Not editable?', false)}
      defaultValues={array('Default values', [
        'doctors',
        'administrators',
      ])}
    />
  ));

storiesOf('Form Fields', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Input'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('CheckBox', () => (
    <CheckBox
      id="input"
      name={text('name', 'Name')}
      label={text('label', 'Label')}
      defaultChecked={boolean('DefaultChecked', true)}
    />
  ));

storiesOf('Form Fields', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('FilePicker'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('FilePicker', () => (
    <FilePicker id={text('id', 'id')} placeholder={text('placeholder', 'placeholder')} />
  ));

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
    <Select
      name={text('name', 'Name')}
      label={text('label', 'Label')}
      options={[{ value: 'one' }, { value: 'two' }, { value: 'three' }, { value: 'four' }]}
    />
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

storiesOf('Form Fields', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('DatePicker'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('Date Picker', () => {
    const metaValues = { error: '' };
    const metaObj = object('meta', metaValues);

    const inputValues = { onChange: action('changed') };
    const inputObj = object('input', inputValues);

    return (
      <DatePicker
        id={text('id', 'datepicker')}
        label={text('label', 'Date Picker')}
        dateFormat={text('date format', 'DD MMM, YYYY')}
        meta={metaObj}
        input={inputObj}
      />
    );
  });
