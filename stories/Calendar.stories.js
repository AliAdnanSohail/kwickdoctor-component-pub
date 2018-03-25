import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Calendar } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Calendar', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Calendar'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => (
    <Calendar
      min={moment()}
      max={moment().add(1, 'month')}
      events={[
        { date: moment(), name: 'event' },
        { date: moment(), name: 'event' },
        { date: moment(), name: 'event' },
        { date: moment().add(1, 'day'), name: 'event' },
        { date: moment().add(1, 'day'), name: 'event' },
        { date: moment().add(5, 'day'), name: 'event' },
      ]}
      onSelect={action('onSelect')}
    />
  ));
