import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Background from './../Background';
import Box from './../Box';

export default class Window extends Component {
  render() {
    const rootEl = document.getElementById(this.props.rootId);

    return (
      this.props.show && (
        ReactDOM.createPortal(
          (
            <Background>
              <Box {...this.props} />
            </Background>
          ),
          rootEl,
        )
      )
    );
  }
}

Window.propTypes = {
  show: PropTypes.bool,
  rootId: PropTypes.string,
};

Window.defaultProps = {
  show: false,
  rootId: 'root',
};
