import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles';

export default class NavigationItem extends Component {
  render() {
    const { route, label, icon: Icon } = this.props;

    return (
      <li>
        <NavLink to={route} className="nav-item" activeClassName="nav-item--active">
          <Icon className="nav-item__icon" />
          <span className="nav-item__label">{label}</span>
        </NavLink>

        <style>{styles}</style>
      </li>
    );
  }
}
