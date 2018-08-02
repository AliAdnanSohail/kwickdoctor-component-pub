import React from 'react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import { withTests } from '@storybook/addon-jest';
import { storiesOf } from '@storybook/react';

import { Button } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Button'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => {
    const icons = {
      done: <i className="material-icons">done</i>,
      delete: <i className="material-icons">delete</i>,
      '': undefined,
    };

    return (
      <Button
        accent={boolean('accent', false)}
        danger={boolean('danger', false)}
        disabled={boolean('disabled', false)}
        flat={boolean('flat', false)}
        icon={icons[select('icon', Object.keys(icons), '')]}
        loading={boolean('loading', false)}
        onClick={action('clicked')}
        rounded={boolean('rounded', false)}
        size={select('size', ['small', 'xsmall', ''], '')}
        squared={boolean('squared', false)}
        transparent={boolean('transparent', false)}
      >
        {text('title', 'Hello!')}
      </Button>
    );
  });
