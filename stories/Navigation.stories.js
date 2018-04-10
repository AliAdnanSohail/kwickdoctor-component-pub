import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { Nav } from '../src';
import { BrowserRouter} from 'react-router-dom';


// import results from '../.jest-test-results.json';

storiesOf('Navigation', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('Nav', () => (
    <BrowserRouter>
      <div className="content">
        <Nav
          id="nav"
        />
      </div>
    </BrowserRouter>
  ));
