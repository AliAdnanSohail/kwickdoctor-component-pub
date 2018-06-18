import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import { Button, Modal } from '../src';
import results from '../.jest-test-results.json';

class ModalWrapper extends React.Component {
  constructor() {
    super();

    this.state = { active: false };
  }

  toggleModal = (state) => {
    this.props.toggleModal(state);
    this.setState({ active: state });
  };

  render() {
    const { active } = this.state;

    return (
      <Fragment>
        <Button
          onClick={() => {
            this.toggleModal(true);
          }}
        >
          Open modal
        </Button>
        <Modal
          active={active}
          onExit={() => {
            this.toggleModal(false);
          }}
        >
          <Button
            onClick={() => {
              this.toggleModal(false);
            }}
          >
            Close modal
          </Button>
          {text('content', 'Modal content')}
        </Modal>
      </Fragment>
    );
  }
}

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Modal'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => <ModalWrapper toggleModal={action('toggleModal')} />);
