import React, { Component } from 'react';
import classnames from 'classnames';
import { UserIcon } from 'grommet/components/icons';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Avatar extends Component {
  render() {
    const {
      borderRadius, className, size, src,
    } = this.props;

    const avatarStyle = {
      backgroundImage: `url(${src})`,
      borderRadius: `${borderRadius}px`,
      height: `${size}px`,
      width: `${size}px`,
    };

    const classes = classnames('avatar', className);

    return (
      <div className={classes} style={avatarStyle}>
        {!src && <UserIcon className="avatar-icon" size="large" />}

        <style jsx>{styles}</style>
      </div>
    );
  }
}

Avatar.propTypes = {
  borderRadius: PropTypes.number,
  className: PropTypes.string,
  size: PropTypes.number,
  src: PropTypes.string,
};

Avatar.defaultProps = {
  borderRadius: 3,
  className: null,
  size: 40,
  src: '',
};
