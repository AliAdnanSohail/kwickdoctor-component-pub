import React, { Component } from 'react';

import styles from './styles';

export default class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <svg className="circular">
          <circle
            className="path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </svg>

        <style jsx>{styles}</style>
      </div>
    );
  }
}
