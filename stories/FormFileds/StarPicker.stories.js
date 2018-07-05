import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs, number } from '@storybook/addon-knobs/react';
import { withTests } from '@storybook/addon-jest';

import { StarPicker } from '../../src';
import results from '../../.jest-test-results.json';

storiesOf('Form Fields', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('StarPicker'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('StarPicker', () => (
    <StarPicker input={{ name: 'rate', value: number('value', 3) }} max={number('max', 5)} />
  ));
