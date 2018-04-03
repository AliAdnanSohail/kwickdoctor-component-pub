import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import { EditIcon } from 'grommet/components/icons';

import { Button } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Button'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => (
    <Button
      accent={boolean('accent', false)}
      danger={boolean('danger', false)}
      icon={<EditIcon />}
      rounded={boolean('rounded', false)}
      squared={boolean('squared', false)}
      title={text('title', 'Hello!')}
      transparent={boolean('transparent', false)}
      onClick={action('clicked')}
    />
  ));
