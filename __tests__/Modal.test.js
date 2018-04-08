import React, { Fragment } from 'react';
import { mount } from 'enzyme';
import EnzymeToJson from 'enzyme-to-json';

import { Modal, Button } from '../src';

const baseProps = {
  active: true,
  rootId: 'modalRoot',
  onExit: () => {},
};

const modalProps = {
  className: 'test-modal-content',
  text: 'test modal content',
};

class ModalWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active: props.active };
  }

  toggleModal = (state) => {
    this.setState({ active: state });
  };

  render() {
    const { escapeExits, underlayClickExits } = this.props;
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
          escapeExits={escapeExits}
          underlayClickExits={underlayClickExits}
          active={active}
          onExit={() => {
            this.toggleModal(false);
          }}
        >
          <ModalContent {...modalProps} />
        </Modal>
      </Fragment>
    );
  }
}

const ModalContent = props => <div className={props.className}>{props.text}</div>;

const TestModal = () => (
  <div id={baseProps.rootId}>
    <Modal {...baseProps}>
      <ModalContent {...modalProps} />
    </Modal>
  </div>
);

it('renders correctly', () => {
  const element = mount(<TestModal />);

  expect(EnzymeToJson(element)).toMatchSnapshot();
});

it('modal content renders correctly', () => {
  const element = mount(<ModalWrapper active />);

  expect(element.find('.modal__content').text()).toEqual(modalProps.text);
});

it('shows correctly', () => {
  const element = mount(<ModalWrapper active={false} />);
  element.find('button').simulate('click');

  expect(element.find('.modal__content')).toHaveLength(1);
});

it('hides correctly', () => {
  const element = mount(<ModalWrapper active />);
  element.find('.modal').simulate('click');

  setTimeout(() => {
    expect(element.find('.modal').exists()).toEqual(false);
  }, 300);
});

it('underlay click event works correctly', () => {
  const element = mount(<ModalWrapper active />);
  element.find('.underlay').simulate('mousedown');

  setTimeout(() => {
    expect(element.find('.modal').exists()).toEqual(false);
  }, 300);
});

it('disabled underlay click event works correctly', () => {
  const element = mount(<ModalWrapper active escapeExits={false} />);
  element.find('.underlay').simulate('mousedown');

  setTimeout(() => {
    expect(element.find('.modal').exists()).toEqual(true);
  }, 300);
});

it('esc button works correctly', () => {
  const element = mount(<ModalWrapper active />);
  element.simulate('keyDown', { keyCode: 27 });

  setTimeout(() => {
    expect(element.find('.modal').exists()).toEqual(false);
  }, 300);
});

it('disabled esc button works correctly', () => {
  const element = mount(<ModalWrapper active escapeExits={false} />);
  element.simulate('keyDown', { keyCode: 27 });

  setTimeout(() => {
    expect(element.find('.modal').exists()).toEqual(true);
  }, 300);
});
