import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import Form from 'react-validation/build/form';

import { DatePicker, Validate } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Date Picker', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('DatePicker'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('defauld', () => (
    <Form>
      <DatePicker
        id={text('id', 'datepicker')}
        name={text('name', 'name')}
        onChange={action('changed')}
        label={text('label', 'Date Picker')}
        dateFormat={text('date format', 'DD MMM, YYYY')}
        validations={[Validate.date]}
      />
    </Form>
  ));
