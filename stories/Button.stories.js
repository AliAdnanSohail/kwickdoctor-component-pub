import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';

import { Button } from '../src';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add(
    'with text',
    withNotes('A very simple component')(withInfo(`
      ~~~js
      <Button>Click Here</Button>
      ~~~
      `)(() => <Button onClick={action('clicked')} title={text('children', 'Hello!')} />)),
  );
