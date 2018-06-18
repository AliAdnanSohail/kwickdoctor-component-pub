import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import { action } from '@storybook/addon-actions';

import { DatePicker } from '../../src';
import results from '../../.jest-test-results.json';

storiesOf('Form Fields', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('DatePicker'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('DatePicker', () => {
    const metaValues = { error: '' };
    const metaObj = object('meta', metaValues);

    const inputValues = { onChange: action('changed') };
    const inputObj = object('input', inputValues);

    return (
      <DatePicker
        dateFormat={text('date format', 'DD MMM, YYYY')}
        id={text('id', 'datepicker')}
        input={inputObj}
        label={text('label', 'Date Picker')}
        meta={metaObj}
      />
    );
  });
