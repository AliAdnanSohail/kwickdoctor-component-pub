import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import { action } from '@storybook/addon-actions';

import { AvatarPicker } from '../../src';
import results from '../../.jest-test-results.json';

storiesOf('Form Fields', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('AvatarPicker'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('AvatarPicker', () => (
    <AvatarPicker
      borderRadius={number('border-radius', 3)}
      id={text('id', 'avatar')}
      name={text('name', 'name')}
      size={number('size', 150)}
      onChange={action('onChange')}
    />
  ));
