
import React from 'react';
import EnzymeToJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import { Modal, Button } from '../src';

const modalContentProps = {
  className: 'test-modal-content',
  text: 'test modal content',
};

class TestModalWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: props.show };
  }

  toggleModal = (state) => {
    this.setState({ show: state });
  };

  render() {
    const { show } = this.state;

    return (
      <React.Fragment>
        <div id="modalRoot" />
        <Button
          title="Open modal"
          onClick={() => {
            this.toggleModal(true);
          }}
        />
        <Modal
          rootId="root"
          show={show}
          onClose={() => {
            this.toggleModal(false);
          }}
        >
          <ModalContent {...modalContentProps} />
        </Modal>
      </React.Fragment>
    );
  }
}

function ModalContent(props) {
  return (
    <div className={props.className}>
      {props.text}
    </div>
  );
}

const baseProps = {
  show: true,
  rootId: 'modalRoot',
  onClose() {},
};

it('Modal renders correctly', () => {
  const element = mount((
    <div id={baseProps.rootId}>
      <Modal {...baseProps}>
        <ModalContent {...modalContentProps} />
      </Modal>
    </div>
  ));

  expect(EnzymeToJson(element)).toMatchSnapshot();
});

it('Modal show correctly', () => {
  const element = mount(<TestModalWrapper show={false} />);
  element.find('button').simulate('click');

  expect(element.find('.modal__content')).toHaveLength(1);
});

it('Modal hide correctly', () => {
  const element = mount(<TestModalWrapper show />);
  element.find('.modal .close').simulate('click');

  expect(element.find('.modal__content')).toHaveLength(0);
});

it('Modal backdrop click correctly', () => {
  const element = mount(<TestModalWrapper show />);
  const backdrop = element.find('.backdrop');
  backdrop.simulate('mousedown');

  expect(element.find('.modal__content')).toHaveLength(0);
});
