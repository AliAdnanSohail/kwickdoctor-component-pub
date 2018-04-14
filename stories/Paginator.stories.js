import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Paginator } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Paginator', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Paginator'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => (
    <Paginator
      marginPagesDisplayed={number('marginPagesDisplayed', 2)}
      onPageChange={action('Page Changed to')}
      pageCount={10}
      pageRangeDisplayed={number('pageRangeDisplayed', 4)}
    />
  ));
