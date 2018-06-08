import React, { Component } from 'react';

import styles from './styles';

export default class NavigationAction extends Component {
  render() {
    const { onClick, label, icon: Icon } = this.props;

    return (
      <li>
        <button onClick={onClick} className="nav-item">
          <Icon className="nav-item__icon" />
          <span className="nav-item__label">{label}</span>
        </button>

        <style>{styles}</style>
      </li>
    );
  }
}
