import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import { UserIcon } from 'grommet/components/icons';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Avatar extends Component {
  render() {
    const { src, squared, size } = this.props;

    const thumbStyle = {
      backgroundImage: `url(${src})`,
    };

    const classes = classnames(
      'avatar-container',
      { 'avatar-container--circle': !squared },
      { [`avatar-container--${size}`]: size },
    );
    return (
      <Fragment>
        <div className={classes} style={thumbStyle} squared={squared}>
          <div className="avatar-icon" style={{ backgroundImage: src }}>
            {!src && <UserIcon size="large" />}
          </div>
        </div>
        <style jsx>{styles}</style>
      </Fragment>
    );
  }
}

Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
  squared: PropTypes.bool,
};

Avatar.defaultProps = {
  src: '',
  size: '',
  squared: false,
};
