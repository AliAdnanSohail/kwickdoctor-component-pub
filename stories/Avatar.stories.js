import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number, withKnobs } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Avatar } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Avatar'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => (
    <Avatar
      src={text(
        'src',
        'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
      )}
      borderRadius={number('border-radius', 3)}
      size={number('size', 150)}
    />
  ));
