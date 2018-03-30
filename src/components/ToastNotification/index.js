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
        <CSSTransition classNames="fade" key={key} timeout={timeout} onExited={(d) => { this.slowTop(d); }}>
          <Toast {...toast} />
        </CSSTransition>
      );
    });
  };

  slowTop = (el) => {
    function getHeight(elm) {
      let elmHeight;
      let elmMargin;
      if (document.all) {
        elmHeight = parseInt(elm.currentStyle.height, 10);
        elmMargin = parseInt(elm.currentStyle.marginTop, 10)
        + parseInt(elm.currentStyle.marginBottom, 10)
        + parseInt(elm.currentStyle.paddingTop, 10)
        + parseInt(elm.currentStyle.paddingBottom, 10);
      } else {
        elmHeight = parseInt(document.defaultView.getComputedStyle(elm, '').getPropertyValue('height'), 10);
        elmMargin = parseInt(document.defaultView.getComputedStyle(elm, '').getPropertyValue('margin-top'), 10)
        + parseInt(document.defaultView.getComputedStyle(elm, '').getPropertyValue('margin-bottom'), 10)
        + parseInt(document.defaultView.getComputedStyle(elm, '').getPropertyValue('padding-bottom'), 10)
        + parseInt(document.defaultView.getComputedStyle(elm, '').getPropertyValue('padding-top'), 10);
      }

      return elmHeight + elmMargin;
    }

    const height = getHeight(el);
    const newDiv = document.createElement('div');

    newDiv.style.height = `${height}px`;
    newDiv.className = 'plug';

    el.parentNode.insertBefore(newDiv, el);

    setTimeout(() => {
      newDiv.className = 'plug plug--zeroHeight';
    });

    setTimeout(() => {
      newDiv.remove();
    }, 220);
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
        <TransitionGroup>
          {this.state.toasts.length > 0 && this.getToasts()}
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
  timeout: 200,
};
