import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Manager from './../Manager';

export default class Toast extends Component {
  componentDidMount() {
    const { timeOut } = this.props;

    if (timeOut !== 0) {
      this.timeoutID = setTimeout(this.requestHide, timeOut);
    }

    this.enter();
  }

  enter = () => {
    const { animationDuration } = this.props;
    const baseClassName = this.element.className;

    this.element.className = `${baseClassName} fade-enter`;

    setTimeout(() => {
      this.element.className = `${baseClassName} fade-enter-active`;
    }, 0);

    setTimeout(() => {
      this.element.className = baseClassName;
    }, animationDuration);
  };

  exit = () => {
    const { animationDuration } = this.props;
    const baseClassName = this.element.className;

    this.element.className = `${baseClassName} fade-exit`;

    setTimeout(() => {
      this.element.className = `${baseClassName} fade-exit-active`;
    }, 0);

    setTimeout(() => {
      Manager.remove(this.props.id);
    }, animationDuration);
  };

  closeToast = () => {
    const { onHideClick } = this.props;

    if (onHideClick) {
      onHideClick();
    }

    this.requestHide();
  };

  requestHide = () => {
    const { onRequestHide } = this.props;

    if (onRequestHide) {
      onRequestHide();
    }

    clearTimeout(this.timeoutID);

    this.exit();
  };

  render() {
    const { primary, boxStyle, content } = this.props;

    return (
      <div
        ref={(div) => {
          this.element = div;
        }}
        className={classnames('toast-box', { primary }, boxStyle)}
      >
        <div className="circle" />
        <div className="message">{content}</div>
        <div className="icons-close">
          <button className="icon" onClick={this.closeToast}>
            <i className="material-icons">close</i>
          </button>
        </div>
        <div className="clear" />
      </div>
    );
  }
}

Toast.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  boxStyle: PropTypes.string,
  onHideClick: PropTypes.func,
  timeOut: PropTypes.number,
  animationDuration: PropTypes.number,
  onRequestHide: PropTypes.func,
};

Toast.defaultProps = {
  primary: false,
  boxStyle: 'rectangle-22',
  onHideClick: null,
  timeOut: 5000,
  animationDuration: 500,
  onRequestHide: () => {},
};
