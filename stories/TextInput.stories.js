import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import Form from 'react-validation/build/form';

import { TextInput, Validate } from '../src';
import results from '../.jest-test-results.json';

storiesOf('TextInput', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('TextInput'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('Text input', () => (
    <Form>
      <TextInput
        id="text-input"
        name={text('name', 'name')}
        onChange={action('changed')}
        placeholder={text('placeholder', 'text input')}
        value={text('value', '')}
        label={text('label', 'Text input')}
        className={text('class name', '')}
        multiline={boolean('multiline', false)}
        validations={[Validate.required]}
      />
    </Form>
  ));
