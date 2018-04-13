import React from 'react';
import { storiesOf } from '@storybook/react';

import { VideoPlayer, VideoSlider, FullScreenButton, PlayPauseButton } from '../src';
// import results from '../.jest-test-results.json';

storiesOf('Video player', module)
  // .addDecorator(withKnobs)
  // .addDecorator(checkA11y)
  // .addDecorator(withTests({ results })('FileInput'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => (
    <VideoPlayer src="http://www.webestools.com/page/media/videoTag/BigBuckBunny.webm" />
  )).add('slider', () => {
    let value = 50;
    const setNum = (num) => { value = num; };
    return (
      <div>
        <VideoSlider
          value={value}
          onChange={setNum}
        />
      </div>
    );
  })
  .add('full screen button', () => (
    <FullScreenButton />
  ))
  .add('play-pause button', () => (
    <div styles="background-color:  black;padding:  100px;">
      <PlayPauseButton />
    </div>
  ));

