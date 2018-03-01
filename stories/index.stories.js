import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Dropdown, TextInput } from '../src';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')} color="red">Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')} color="blue">😀 😎 👍 💯</Button>
  ));

storiesOf('Dropdown', module).add('simple', () => <Dropdown />);

storiesOf('TextInput', module).add('simple', () => <TextInput value="" />);
