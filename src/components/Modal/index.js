import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AriaModal from 'react-aria-modal';
import MaterialIcon from 'material-icons-react';

import { modal, underlay } from './styles';

export default class Modal extends Component {
  static getDerivedStateFromProps(props, state) {
    return props.active !== state.active ? { active: props.active } : null;
  }

  constructor(props) {
    super(props);

    this.state = { modalHasEntered: false, active: props.active };
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleEnter = () => {
    this.setState({ modalHasEntered: true });
  };

  handleExit = () => {
    this.setState({ modalHasEntered: false }, () => {
      this.timeout = setTimeout(() => {
        this.setState({ active: false });
        this.props.onExit();
      }, 300);
    });
  };

  render() {
    const {
      alert, children, escapeExits, rootId, title, underlayClickExits,
    } = this.props;

    const { active, modalHasEntered } = this.state;

    const modalContentClass = classnames('modal', 'modal--animated', {
      'has-entered': modalHasEntered,
    });

    const underlayClass = classnames('underlay', {
      'has-entered': modalHasEntered,
    });

    return (
      <AriaModal
        alert={alert}
        escapeExits={escapeExits}
        getApplicationNode={() => document.getElementById(rootId)}
        mounted={active}
        onEnter={this.handleEnter}
        onExit={this.handleExit}
        titleText={title}
        underlayColor={false}
        underlayClass={underlayClass}
        underlayClickExits={underlayClickExits}
        verticallyCenter
      >
        <div className={modalContentClass}>
          <button className="modal__close-button" onClick={this.handleExit}>
            <MaterialIcon icon="close" />
          </button>
          <div className="modal__content">{children}</div>
        </div>

        <style jsx>{modal}</style>
        <style>{underlay}</style>
      </AriaModal>
    );
  }
}

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  alert: PropTypes.bool,
  children: PropTypes.node,
  escapeExits: PropTypes.bool,
  onExit: PropTypes.func.isRequired,
  rootId: PropTypes.string,
  title: PropTypes.string,
  underlayClickExits: PropTypes.bool,
};

Modal.defaultProps = {
  alert: false,
  children: null,
  escapeExits: true,
  rootId: 'root',
  title: 'dom one',
  underlayClickExits: true,
};
