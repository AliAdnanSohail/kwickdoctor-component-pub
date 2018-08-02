import React, { Component } from 'react';

import styles from './styles';

export default class NavigationAction extends Component {
  render() {
    const { onClick, label, icon } = this.props;

    return (
      <li>
        <button onClick={onClick} className="nav-item">
          {icon}
          <span className="nav-item__label">{label}</span>
        </button>

        <style>{styles}</style>
      </li>
    );
  }
}
