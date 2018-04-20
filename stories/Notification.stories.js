import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import moment from 'moment';

import { Notification } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Notification', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Notification'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => (
    <Fragment>
      <Notification
        date={moment('20120620')}
        message={text('message', 'New message')}
        primary={boolean('primary', false)}
        read={boolean('read', false)}
      />
      <Notification
        date={moment('20120620')}
        message={text('message', 'New message')}
        primary={boolean('primary', false)}
        read={boolean('read', false)}
      />
    </Fragment>
  ));
