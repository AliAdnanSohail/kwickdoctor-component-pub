import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactAriaModal from 'react-aria-modal';

import Backdrop from './Backdrop';
import Content from './Content';

export default class AriaModal extends Component {
  getApplicationNode = () => document.getElementById(this.props.rootId);

  getModal = () => (
    <ReactAriaModal
      onExit={this.props.onClose}
      titleText={this.props.title}
      getApplicationNode={this.getApplicationNode}
    >
      <Backdrop onClick={this.props.onClose}>
        <Content onClose={this.props.onClose} {...this.props} />
      </Backdrop>
    </ReactAriaModal>
  );

  render() {
    return this.props.show && this.getModal();
  }
}

AriaModal.propTypes = {
  show: PropTypes.bool,
  rootId: PropTypes.string,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

AriaModal.defaultProps = {
  show: false,
  rootId: 'root',
  title: 'dom one',
};
