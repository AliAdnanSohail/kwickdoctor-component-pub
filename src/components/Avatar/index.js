import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Avatar extends Component {
  render() {
    const { src, squared } = this.props;

    const thumbStyle = {
      backgroundImage: `url(${src})`,
    };

    const classes = classnames('avatar-container', { 'avatar-container--circle': !squared });
    return (
      <div className={classes} style={thumbStyle} squared={squared}>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

Avatar.propTypes = {
  src: PropTypes.string,
  squared: PropTypes.bool,
};

Avatar.defaultProps = {
  src: '',
  squared: false,
};
