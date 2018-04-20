import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs, number } from '@storybook/addon-knobs/react';
import { withTests } from '@storybook/addon-jest';
import { action } from '@storybook/addon-actions';

import { StarPicker } from '../src';
import results from '../.jest-test-results.json';

storiesOf('StarPicker', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('StarPicker'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('simple start picker', () => (
    <StarPicker
      onClick={action('clicked')}
      rank={number('rank', 3)}
      amount={number('amount', 6)}
    />
  ));
