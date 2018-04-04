import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Backdrop extends Component {
  onMouseDown = (event) => {
    if (event.target === this.div) {
      this.props.onClick();
    }
  };

  render() {
    return (
      <div
        ref={(div) => {
          this.div = div;
        }}
        onMouseDown={this.onMouseDown}
        className="backdrop"
        role="button"
        tabIndex={0}
      >
        {this.props.children}

        <style jsx>{styles}</style>
      </div>
    );
  }
}

Backdrop.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
