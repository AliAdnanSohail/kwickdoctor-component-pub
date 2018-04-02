import React from 'react';
import PropTypes from 'prop-types';

export default class Step extends React.Component {
  getChildren = () => {
    const { children } = this.props;
    return React.Children.map(children, child =>
      React.cloneElement(child, { ...this.props, ...child.props }));
  }

  render() {
    return this.props.active && (
      <div className="steper__step">
        {this.getChildren()}
      </div>
    );
  }
}
/* eslint-disable react/no-unused-prop-types */
Step.propTypes = {
  index: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  last: PropTypes.bool.isRequired,
  setActiveStep: PropTypes.func.isRequired,
};
