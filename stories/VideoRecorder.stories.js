import React from 'react';
import { storiesOf } from '@storybook/react';

import { VideoRecorder, RecordButton } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Video recorder', module)
  // .addDecorator(withKnobs)
  // .addDecorator(checkA11y)
  // .addDecorator(withTests({ results })('FileInput'))
  .addDecorator(getStory => <div style={{ padding: '24px', backgroundColor: 'grey' }}>{getStory()}</div>)
  .add('default', () => (
    <VideoRecorder />
  ))
  .add('button', () => (
    <RecordButton />
  ));
// .add('slider', () => {
//   let value = 0;
//   const setNum = (num) => { value = num; };
//   return (
//     <div>
//       <VideoSlider
//         value={value}
//         setValue={setNum}
//       />
//     </div>
//   );
// });

