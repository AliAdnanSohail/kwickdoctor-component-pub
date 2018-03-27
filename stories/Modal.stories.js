import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Button, Modal } from '../src';
import results from '../.jest-test-results.json';

class ModalWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: false };
  }

  toggleModal = (state) => {
    this.props.toggleModal(state);
    this.setState({ show: state });
  };

  render() {
    const { show } = this.state;

    return (
      <Fragment>
        <Button
          title="Open modal"
          onClick={() => {
            action('onClick');
            this.toggleModal(true);
          }}
        />
        <Modal
          show={show}
          onClose={() => {
            action('onClose');
            this.toggleModal(false);
          }}
        >
          {text('Content', 'Modal content')}
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
