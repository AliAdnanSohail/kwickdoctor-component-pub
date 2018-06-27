import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { VideoPlayer } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Video Player', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('VideoPlayer'))
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
  .add('default', () => (
    <VideoPlayer
      src={text(
        'src',
        'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      )}
      noVideoIconSize={text(
        'noVideoIconSize',
        100
      )}
    />)
  );
