import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

export default class Toast extends Component {
  closeClicked() {
    console.log('Close clicked', this.props);
  }

  render() {
    const {
      message, primary, boxstyle,
    } = this.props;

    const classes = classnames(
      'box',
      { 'box--primary': primary },
      boxstyle,
    );

    return (
      <div className={classes}>
        <div className="circle" />
        <div className="message">
          {message}
        </div>
        <div className="icons-close">
          <div className="icon" onClick={(e) => this.closeClicked(e)} />
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

Toast.propTypes = {
  message: PropTypes.string,
  primary: PropTypes.bool,
  boxstyle: PropTypes.string,
  closeClicked: PropTypes.func,
};

Toast.defaultProps = {
  message: 'You have a booked appointment..bla bla',
  primary: false,
  boxstyle: 'rectangle-22',
  closeClicked: null,
};
