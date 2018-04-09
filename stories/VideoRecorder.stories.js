import React from 'react';
import { storiesOf } from '@storybook/react';

import { VideoRecorder } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Video recorder', module)
  // .addDecorator(withKnobs)
  // .addDecorator(checkA11y)
  // .addDecorator(withTests({ results })('FileInput'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => (
    <VideoRecorder />
  ));
