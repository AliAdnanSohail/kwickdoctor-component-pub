import React, { Component } from 'react';
import { SpinningIcon } from 'grommet/components/icons';
import styles from './styles';

export default class Loader extends Component {
  render() {
    return (
      <div className="loader-container">
        <SpinningIcon size="large" className="button__icon" />

        <style jsx>{styles}</style>
      </div>
    );
  }
}
