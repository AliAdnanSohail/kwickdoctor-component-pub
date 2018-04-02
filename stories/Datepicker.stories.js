import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Datepicker } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Datepicker', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Datepicker'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('Datepicker', () => (
    <Datepicker
      id={text('id', 'datepicker')}
      name={text('name', 'name')}
      onChange={action('changed')}
      label={text('label', 'Datepicker')}
      dateFormat={text('dateFormat', 'DD MMM, YYYY')}
      error={text('error', '')}
    />
  ));
