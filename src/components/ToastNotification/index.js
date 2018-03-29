import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import classnames from 'classnames';
import Manager from './Manager';
import Toast from './Toast';

import styles from './styles';

export default class ToastNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: [],
    };
  }

  componentWillMount = () => {
    Manager.addChangeListener(this.handleStoreChange);
  };

  componentWillUnmount = () => {
    Manager.removeChangeListener(this.handleStoreChange);
  };

  getToasts = () => {
    const { toasts } = this.state;
    const { timeout } = this.props;

    return toasts.map((toast) => {
      const key = toast.id || new Date().getTime() - Math.random();
      return (
        <CSSTransition classNames="fade" key={key} timeout={timeout}>
          <Toast {...toast} />
        </CSSTransition>
      );
    });
  };

  handleStoreChange = (toasts) => {
    this.setState({
      toasts,
    });
  };

  render() {
    const className = classnames('toast-container', { 'toast-container-empty': this.state.toasts.length === 0 });

    return this.state.toasts.length > 0 && (
      <div className={className}>
        <TransitionGroup>
          {this.getToasts()}
        </TransitionGroup>
        <style>{styles}</style>
      </div>
    );
  }
}

ToastNotification.propTypes = {
  timeout: PropTypes.number,
};

ToastNotification.defaultProps = {
  timeout: 400,
};
