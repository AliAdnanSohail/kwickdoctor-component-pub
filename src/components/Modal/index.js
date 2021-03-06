import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AriaModal from 'react-aria-modal';

import { modal, underlay } from './styles';

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = { modalHasEntered: false, active: props.active };
  }

  componentDidUpdate(props) {
    if (props.active !== this.props.active) {
      if (this.props.active) {
        this.setState({ active: true });
      } else {
        this.handleExit();
      }
    }
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
      alert,
      children,
      className,
      contentClassName,
      overlayClassName,
      escapeExits,
      rootId,
      title,
      underlayClickExits,
    } = this.props;

    const { active, modalHasEntered } = this.state;

    const classes = classnames('modal', 'modal--animated', className, {
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
        underlayClass={classnames('underlay', {
          'has-entered': modalHasEntered,
        }, overlayClassName)}
        underlayClickExits={underlayClickExits}
        verticallyCenter
      >
        <div className={classes}>
          <button className="modal__close-button" onClick={this.handleExit}>
            <i className="material-icons">close</i>
          </button>
          <div className={classnames('modal__content', contentClassName)}>{children}</div>
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
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  contentClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  overlayClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  escapeExits: PropTypes.bool,
  onExit: PropTypes.func.isRequired,
  rootId: PropTypes.string,
  title: PropTypes.string,
  underlayClickExits: PropTypes.bool,
};

Modal.defaultProps = {
  alert: false,
  children: null,
  className: null,
  contentClassName: null,
  overlayClassName: null,
  escapeExits: true,
  rootId: 'root',
  title: 'dom one',
  underlayClickExits: true,
};
