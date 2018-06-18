import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import { NavLink } from 'react-router-dom';

import styles from './styles';

export default class NavigationItem extends Component {
  render() {
    const { route, label, icon } = this.props;

    return (
      <li>
        <NavLink activeClassName="nav-item--active" className="nav-item" to={route}>
          <MaterialIcon color="#ffffff" icon={icon} size={24} />
          <span className="nav-item__label">{label}</span>
        </NavLink>

        <style>{styles}</style>
      </li>
    );
  }
}
