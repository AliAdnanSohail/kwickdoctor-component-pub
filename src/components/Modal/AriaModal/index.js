import React, { Component } from 'react';
import ReactAriaModal from 'react-aria-modal';
import PropTypes from 'prop-types';
import Background from './../Background';
import Box from './../Box';

export default class AriaModal extends Component {
  getApplicationNode = () => document.getElementById(this.props.rootId);

  getModal = () => (
    <ReactAriaModal
      titleText={this.props.titleText}
      onExit={this.props.onCloseClick}
      getApplicationNode={this.getApplicationNode}
    >
      <Background onClick={this.props.onCloseClick}>
        <Box onCloseClick={this.props.onCloseClick} {...this.props} />
      </Background>
    </ReactAriaModal>
  )

  render() {
    return this.props.show ? this.getModal() : false;
  }
}

AriaModal.propTypes = {
  show: PropTypes.bool,
  titleText: PropTypes.string,
  rootId: PropTypes.string,
  onCloseClick: PropTypes.func.isRequired,
};

AriaModal.defaultProps = {
  show: false,
  rootId: 'root',
  titleText: 'dom one',
};
