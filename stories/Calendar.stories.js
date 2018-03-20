import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Calendar } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Calendar', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Calendar'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('Calendar', () => (
    <Calendar
      events={[
        { date: new Date(), name: 'testEvent' },
        { date: new Date(), name: 'testEvent' },
        { date: new Date(), name: 'testEvent' },
        { date: moment().add(1, 'day'), name: 'testEvent' },
        { date: moment().add(1, 'day'), name: 'testEvent' },
        { date: moment().add(5, 'day'), name: 'testEvent' },
      ]}
      onChangeMonth={action('onChangeMonth')}
      onClickByDay={action('onClickByDay')}
      numberOfDays={number('numberOfDays', 42)}
      startPageDate={moment()}
    />
  ));
