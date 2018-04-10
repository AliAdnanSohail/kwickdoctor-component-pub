import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import navItemCSS from './styles';

export default class NavItem extends Component {
  render() {
    const {
      route,
      label,
      Icon,
    } = this.props;
    const classes = classNames('link', { 'link__active' : true === route });
    return (
      <Fragment>
        <li className="navItem">
          <Link href to={route} className={classes}>
            <div className="link__img-container">
              <Icon className="link__icon" />
            </div>
            <div className="link__txt">
              {label}
            </div>
          </Link>
        </li>
        <style>{navItemCSS}</style>
      </Fragment>
    );
  }
}
