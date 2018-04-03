import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Card } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Card'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => (
    <Card style={{ width: '200px', padding: '50px' }} rounded={boolean('rounded', false)}>
      {text(
        'content',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos libero deserunt soluta.',
      )}
    </Card>
  ));
