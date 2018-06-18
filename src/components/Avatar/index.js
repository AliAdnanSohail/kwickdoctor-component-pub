import React, { Component } from 'react';
import classnames from 'classnames';
import MaterialIcon from 'material-icons-react';
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
    };

    const classes = classnames('avatar', className);

    return (
      <div className={classes} style={avatarStyle}>
        {!src && <MaterialIcon color="#BBBCCD" icon="person_outline" size={size / 2} />}

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
