import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles';

export default class NavigationItem extends Component {
  render() {
    const { route, label, icon } = this.props;

    return (
      <li>
        <NavLink activeClassName="nav-item--active" className="nav-item" to={route}>
          {icon}
          <span className="nav-item__label">{label}</span>
        </NavLink>

        <style>{styles}</style>
      </li>
    );
  }
}
