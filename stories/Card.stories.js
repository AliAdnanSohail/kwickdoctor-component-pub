import React from 'react';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withTests } from '@storybook/addon-jest';
import { storiesOf } from '@storybook/react';

import { Card } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Card'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => (
    <Card>
      {text(
        'content',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos libero deserunt soluta.',
      )}
    </Card>
  ));
