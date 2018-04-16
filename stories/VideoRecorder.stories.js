import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { VideoRecorder } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Video Recorder', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('VideoRecorder'))
  .addDecorator(getStory => (
    <div
      style={{
        padding: '24px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {getStory()}
    </div>
  ))
  .add('default', () => <VideoRecorder />);
