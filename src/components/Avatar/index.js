import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Avatar extends Component {
  render() {
    const {
      imgSrc,
      squared,
    } = this.props;
    const thumbStyle = {
      backgroundImage: `url(${imgSrc.src})`,
    };

    const classes = classnames('avatar-container', { 'avatar-container--circle': !squared });
    return (
      <Fragment>
        <div className={classes} style={thumbStyle} squared={squared} />
        <style jsx>{styles}</style>
      </Fragment>
    );
  }
}

Avatar.propTypes = {
  imgSrc: PropTypes.string,
  squared: PropTypes.bool,
};

Avatar.defaultProps = {
  imgSrc: '',
  squared: false,
};
