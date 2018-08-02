import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { LinkButton } from '../src';
import results from '../.jest-test-results.json';

storiesOf('LinkButton', module)
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
      <BrowserRouter>
        <LinkButton
          accent={boolean('accent', false)}
          danger={boolean('danger', false)}
          flat={boolean('flat', false)}
          rounded={boolean('rounded', false)}
          size={select('size', ['small', 'xsmall', undefined], '')}
          icon={icons[select('icon', Object.keys(icons), '')]}
          squared={boolean('squared', false)}
          transparent={boolean('transparent', false)}
          link={text('link', '')}
        >
          {text('title', 'Hello!')}
        </LinkButton>
      </BrowserRouter>
    );
  });
