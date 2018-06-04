import React, { Component } from 'react';
import classnames from 'classnames';
import { UserIcon } from 'grommet/components/icons';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Avatar extends Component {
  render() {
    const {
      className, src, squared, size,
    } = this.props;

    const classes = classnames(
      'avatar-container',
      { 'avatar-container--circle': !squared },
      { [`avatar-container--${size}`]: size },
      className,
    );

    return (
      <div className={classes}>
        {src ? (
          <div className="avatar" style={{ backgroundImage: `url(${src})` }} />
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
  size: PropTypes.oneOf(['s', 'l', '']),
  squared: PropTypes.bool,
};

Avatar.defaultProps = {
  className: null,
  src: '',
  size: '',
  squared: false,
};
