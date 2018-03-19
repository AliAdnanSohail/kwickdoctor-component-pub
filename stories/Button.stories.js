import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Button } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Button'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('simple button', () => (
    <Button
      onClick={action('clicked')}
      title={text('title', 'continue')}
      transparent={boolean('transparent', false)}
      squared={boolean('squared', false)}
      accent={boolean('accent', false)}
      social={text('social', 'facebook')}
    />
  ));
