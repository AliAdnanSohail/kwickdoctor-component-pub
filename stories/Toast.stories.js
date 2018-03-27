import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Toast } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Toast'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('Default toast', () => (
    <div>
      <Toast
        primary={boolean('primary', false)}
        onHideClick={action('hidden')}
        onShowClick={action('shown')}
      >
        {text('Content', 'You have a booked appointment')}
      </Toast>
    </div>
  ))
  .add('Primary toast', () => (
    <div>
      <Toast
        primary={boolean('primary', true)}
        onHideClick={action('hidden')}
        onShowClick={action('shown')}
      >
        {text('Content', 'Good news! You\'re going to die soon!')}
      </Toast>
    </div>
  ));
