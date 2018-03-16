import React, { Component } from 'react';

import styles from './../styles';

export default class Background extends Component {
  render() {
    return (
      <div className="modal-background">
        {this.props.children}
        <style jsx>{styles}</style>
      </div>
    );
  }
}
