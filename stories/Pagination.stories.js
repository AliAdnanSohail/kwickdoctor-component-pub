import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Pagination } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Pagination', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Pagination'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => (
    <Pagination
      marginPagesDisplayed={number('marginPagesDisplayed', 2)}
      onPageChange={action('Page Changed to')}
      pageCount={10}
      pageRangeDisplayed={number('pageRangeDisplayed', 4)}
    />
  ));
