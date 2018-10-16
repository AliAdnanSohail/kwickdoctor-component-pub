import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Avatar extends Component {
  render() {
    const {
      borderRadius, className, size, src,
    } = this.props;

    const avatarStyle = {
      backgroundImage: src ? `url(${src})` : '',
      borderRadius: `${borderRadius}px`,
      height: `${size}px`,
      width: `${size}px`,
      maxHeight: `${size}px`,
      maxWidth: `${size}px`,
    };

    const classes = classnames('avatar', className);

    return (
      <div className={classes} style={avatarStyle}>
        {!src && (
          <i className="material-icons" style={{ fontSize: size / 2 }}>
            person_outline
          </i>
        )}
        <style jsx>{styles}</style>
      </div>
    );
  }
}

Avatar.propTypes = {
  borderRadius: PropTypes.number,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  size: PropTypes.number,
  src: PropTypes.string,
};

Avatar.defaultProps = {
  borderRadius: 3,
  className: null,
  size: 40,
  src: '',
};
