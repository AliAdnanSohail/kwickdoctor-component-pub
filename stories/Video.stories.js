import React from 'react';
import { storiesOf } from '@storybook/react';

import { Video } from '../src';

storiesOf('Video', module)
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => (
    <Video />
  ));
