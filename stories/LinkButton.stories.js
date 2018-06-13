import React from 'react';
import { Router, browserHistory } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import { EditIcon, AidOptionIcon, DeployIcon } from 'grommet/components/icons';

import { LinkButton } from '../src';
import results from '../.jest-test-results.json';

storiesOf('LinkButton', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Button'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => {
    const icons = {
      EditIcon: <EditIcon />,
      AidOptionIcon: <AidOptionIcon />,
      DeployIcon: <DeployIcon />,
      Undefined: undefined,
    };

    const iconProps = {
      label: 'Icon',
      options: Object.keys(icons),
      defaultValue: 'Undefined',
    };

    const sizeProps = {
      label: 'Size',
      options: ['s', 'xs', undefined],
      defaultValue: undefined,
    };

    return (
      <Router history={browserHistory}>
        <LinkButton
          accent={boolean('accent', false)}
          danger={boolean('danger', false)}
          disabled={boolean('disabled', false)}
          flat={boolean('flat', false)}
          rounded={boolean('rounded', false)}
          size={select(sizeProps.label, sizeProps.options, sizeProps.defaultValue)}
          icon={icons[select(iconProps.label, iconProps.options, iconProps.defaultValue)]}
          squared={boolean('squared', false)}
          transparent={boolean('transparent', false)}
          link={text('link', '')}
        >
          {text('title', 'Hello!')}
        </LinkButton>
      </Router>
    );
  });
