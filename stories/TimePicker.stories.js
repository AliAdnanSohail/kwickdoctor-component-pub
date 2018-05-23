import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { TimePicker } from '../src';
import results from '../.jest-test-results.json';

storiesOf('TimePicker', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('TimePicker'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('TimePicker', () => (
    <TimePicker
      title={text('title', 'Appointment time')}
      defaultInputText={text('defaultInput', 'Pick time')}
      onChange={action('changed')}
    />
  ));
