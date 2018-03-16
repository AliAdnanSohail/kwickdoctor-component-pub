import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Modal } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('ModalBackground'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('Background', () => (
    <Modal.Background />
  ));

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('ModalBackground'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('Window', () => (
    <Modal.Window
      width={text('width', '476px')}
      height={text('height', '200px')}
      onCloseClick={action('closeClick')}
    />
  ));

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('ModalBackground'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('Modal', () => (
    <Modal.Background>
      <Modal.Window
        width={text('width', '476px')}
        height={text('height', '200px')}
        onCloseClick={action('closeClick')}
      >
        {text('Content', 'Modal content')}
      </Modal.Window>
    </Modal.Background>
  ));
