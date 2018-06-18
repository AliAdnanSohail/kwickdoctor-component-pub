import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';

import styles from './styles';

export default class NavigationAction extends Component {
  render() {
    const { onClick, label, icon } = this.props;

    return (
      <li>
        <button onClick={onClick} className="nav-item">
          <MaterialIcon color="#ffffff" icon={icon} size={24} />
          <span className="nav-item__label">{label}</span>
        </button>

        <style>{styles}</style>
      </li>
    );
  }
}
