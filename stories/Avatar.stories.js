import React from 'react';
import { checkA11y } from '@storybook/addon-a11y';
import { text, number, withKnobs } from '@storybook/addon-knobs/react';
import { withTests } from '@storybook/addon-jest';
import { storiesOf } from '@storybook/react';

import { Avatar } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Avatar'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => (
    <Avatar
      borderRadius={number('border-radius', 3)}
      size={number('size', 150)}
      src={text(
        'src',
        'https://wallup.net/wp-content/uploads/2017/03/29/493007-Mac_OS_X-Mac_Sierra-748x421.jpg',
      )}
    />
  ));
