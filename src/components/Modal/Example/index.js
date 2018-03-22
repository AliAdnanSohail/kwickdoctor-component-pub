import React, { Component } from 'react';
import AriaModal from './../AriaModal';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  }

  openModal = () => {
    this.setState({
      showModal: true,
    });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.openModal}>Show modal</button>
        <AriaModal {...{ ...this.props, show: this.state.showModal, onCloseClick: this.closeModal }} />
      </React.Fragment>
    );
  }
}

