import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { FileViewer } from '../src';
import results from '../.jest-test-results.json';

storiesOf('FileViewer', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('FileViewer'))
  .addDecorator(getStory => <div style={{ padding: '24px', 'background-color': '#c1c2cf' }}>{getStory()}</div>)
  .add('simple file viewer', () => (
    <FileViewer
      onClick={action('clicked')}
      title={text('title', 'Hello!')}
    />
  ));
