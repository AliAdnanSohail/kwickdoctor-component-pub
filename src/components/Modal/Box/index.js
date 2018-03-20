import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './../styles';

export default class Box extends Component {
  render() {
    const customStyles = {};
    const { width, height, onCloseClick } = this.props;
    if (width) {
      customStyles.width = width;
    }
    if (height) {
      customStyles.height = height;
    }

    return (
      <div style={customStyles} className="modal-window">
        <button className="icons-close" onClick={() => onCloseClick()} />
        <div className="modal-window-container">
          {this.props.children}
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

Box.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  onCloseClick: PropTypes.func.isRequired,
};

Box.defaultProps = {
  width: undefined,
  height: undefined,
};
