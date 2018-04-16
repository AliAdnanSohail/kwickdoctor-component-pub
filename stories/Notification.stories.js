import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, date } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Notification } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Notification', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Card'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => (
    <div>
      <Notification
        date={date('date', new Date())}
        success={boolean('success', true)}
        message={text(
          'message',
          'New message',
        )}
      />
      <Notification
        date={date('date', new Date())}
        success={boolean('success', false)}
        message={text(
          'message',
          'Error message',
        )}
      />
    </div>

  ));
