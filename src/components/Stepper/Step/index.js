import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

import styles from './styles';

const transitionStyles = {
  entering: { opacity: 0, transform: 'translateX(40px)' },
  entered: { opacity: 1, transform: 'translateX(0)' },
};

export default class Step extends Component {
  render() {
    const { active, children, className } = this.props;

    return (
      <Transition in={active} timeout={300} unmountOnExit>
        {state => (
          <div className={classnames('step', className)} style={{ ...transitionStyles[state] }}>
            {children}

            <style jsx>{styles}</style>
          </div>
        )}
      </Transition>
    );
  }
}

Step.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

Step.defaultProps = {
  active: false,
  className: '',
};
