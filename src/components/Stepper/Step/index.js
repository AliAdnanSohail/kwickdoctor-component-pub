import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

import styles from './styles';

const transitionStyles = {
  entering: { opacity: 0, transform: 'translateX(40px)' },
  entered: { opacity: 1, transform: 'translateX(0)' },
};

export default class Step extends Component {
  render() {
    const { active, children } = this.props;

    return (
      <Transition in={active} timeout={300} unmountOnExit>
        {state => (
          <div className="step" style={{ ...transitionStyles[state] }}>
            {React.Children.map(children, child =>
              React.cloneElement(child, { ...this.props, ...child.props }))}

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
};

Step.defaultProps = {
  active: false,
};
