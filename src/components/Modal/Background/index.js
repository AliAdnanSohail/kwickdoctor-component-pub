import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './../styles';

export default class Background extends Component {
  clickHandler = (e) => {
    if (e.target === this.div) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <div 
        ref={(div) => { this.div = div; }}
        onClick={this.clickHandler} 
        className="modal-background"
      >
        {this.props.children}
        <style jsx>{styles}</style>
      </div>
    );
  }
}

Background.propTypes = {
  onClick: PropTypes.func.isRequired,
};
