import React, { Component } from 'react';
import classnames from 'classnames';
import { UserIcon } from 'grommet/components/icons';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Avatar extends Component {
  render() {
    const {
      className,
      src,
      borderRadius,
      size,
    } = this.props;

    const thumbStyle = {
      backgroundImage: `url(${src})`,
      borderRadius: `${borderRadius}px`,
      width: `${size}px`,
      height: `${size}px`,
    };

    const classes = classnames(
      'avatar-container',
      !src && 'avatar-container--gray',
      className,
    );

    return (
      <div className={classes} style={{ width: `${size}px` }}>
        {src ? (
          <div className="avatar" style={thumbStyle} />
        ) : (
          <UserIcon className="avatar-icon" size="large" />
        )}

        <style jsx>{styles}</style>
      </div>
    );
  }
}

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.number,
  borderRadius: PropTypes.number,
};

Avatar.defaultProps = {
  className: null,
  src: '',
  size: '',
  borderRadius: 3,
};
