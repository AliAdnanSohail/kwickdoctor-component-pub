import React, { Component, Fragment } from 'react';

import styles from './styles';

export default class Avatar extends Component {
  render() {
    const imgSrc = this.props;
    const thumbStyle = {
      backgroundImage: `url(${imgSrc.src})`,
    };
    return (
      <Fragment>
        <div className="avatar-container" style={thumbStyle} />
        <style jsx>{styles}</style>
      </Fragment>
    );
  }
}


Avatar.defaultProps = {
  imgSrc: '',
};
