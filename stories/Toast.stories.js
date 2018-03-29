import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { ToastNotification, ToastManager } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Toast'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('Default toast', () => (
    <React.Fragment>
      <button onClick={() => {
        ToastManager.create({
          content: (<div>{text('content', 'test')}</div>),
          primary: boolean('primary', false),
          onHideClick: action('onHideClick'),
          timeOut: number('timeOut', 5000),
        });
      }}
      >
        Create toast
      </button>
      <ToastNotification />
    </React.Fragment>
  ));
