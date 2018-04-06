import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Manager from './Manager';
import Toast from './Toast';
import createUUID from './create-UUID';

import styles from './styles';

export default class ToastNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: props.initialToasts,
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

    return toasts.map((toast) => {
      const key = toast.id || createUUID();
      return <Toast key={key} {...toast} />;
    });
  };

  handleStoreChange = (toasts) => {
    this.setState({
      toasts,
    });
  };

  render() {
    const className = classnames('toast-container', { 'toast-container-empty': this.state.toasts.length === 0 });

    return (
      <div className={className}>
        {this.state.toasts.length > 0 && this.getToasts()}
        <style>{styles}</style>
      </div>
    );
  }
}

ToastNotification.propTypes = {
  initialToasts: PropTypes.array,
};

ToastNotification.defaultProps = {
  initialToasts: [],
};
