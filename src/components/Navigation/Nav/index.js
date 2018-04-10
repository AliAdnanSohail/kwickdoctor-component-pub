import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotificationIcon from 'grommet/components/icons/base/Notification';
import LogoutIcon from 'grommet/components/icons/base/Logout';
// import DocumentVerifiedIcon from 'grommet/components/icons/base/DocumentVerified';
import UserIcon from 'grommet/components/icons/base/User';
import DashboardIcon from 'grommet/components/icons/base/Dashboard';
import MoneyIcon from 'grommet/components/icons/base/Money';
import CycleIcon from 'grommet/components/icons/base/Cycle';
import NavItem from '../NavItem';
import ShortProfileInfo from '../ShortProfileInfo';


import navCSS from './styles';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }
  render() {
    const Default = () => (
      <div>
        Default component
      </div>
    );
    const Dashboards = () => (
      <div>
        Dashboards component
      </div>
    );
    const Notifications = () => (
      <div>
        Notifications component
      </div>
    );
    const Main = () => (
      <Fragment>
        <main>
          <Switch>
            <Route exact path="/" component={Default} />
            <Route path="/dashboards" component={Dashboards} />
            <Route path="/notifications" component={Notifications} />
          </Switch>
        </main>
      </Fragment>
    );    
    const navLinks = [
      {
        route: '/dashboards',
        Icon: DashboardIcon,
        label: 'Dashboards',
      },
      // {
      //   route: '/appointments',
      //   Icon: DashboardIcon,
      //   label: 'My appointments',
      // },
      {
        route: '/notifications',
        Icon: NotificationIcon,
        label: 'Notifications',
      },
      {
        route: '/finances',
        Icon: MoneyIcon,
        label: 'Finances',
      },
      {
        route: '/my-profile',
        Icon: UserIcon,
        label: 'My profile',
      },
      // {
      //   route: '/my-documents',
      //   Icon: DocumentVerifiedIcon,
      //   label: 'My documents',
      // },
      {
        route: '/switch-account',
        Icon: CycleIcon,
        label: 'Switch account',
      },
      {
        route: '/',
        Icon: LogoutIcon,
        label: 'Log out',
      },
    ];
    const userName = 'User Name';
    const imgSource = 'link';
    return (
      <BrowserRouter>
        <Fragment>
          <nav className="nav">
            <div className="nav__logo">
              LOGO
              {/* <img src={logoSource} alt="logo" /> */}
            </div>
            <ShortProfileInfo img={imgSource} name={userName} />
            <ul className="nav__list">
              {navLinks.map(item => <NavItem key={item.route} {...item} />)}
            </ul>
          </nav>
          <Main />
          <style jsx>{navCSS}</style>
        </Fragment>
      </BrowserRouter>
    );
  }
}
