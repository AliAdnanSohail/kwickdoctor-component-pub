import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { DashboardIcon, NotificationIcon } from 'grommet/components/icons/base';
import { mount } from 'enzyme';
import EnzymeToJson from 'enzyme-to-json';

import { Navigation, NavigationItem } from '../src';

const Dashboard = () => <div>Dashboard component</div>;
const Notifications = () => <div>Notifications component</div>;

class NavigationWrapper extends Component {
  render() {
    return (
      <BrowserRouter>
        <main style={{ minHeight: '100vh', display: 'flex' }}>
          <Navigation>
            <NavigationItem route="/dashboard" icon={DashboardIcon} label="Dashboards" />
            <NavigationItem route="/notifications" icon={NotificationIcon} label="Notifications" />
          </Navigation>
          <Switch>
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/notifications" component={Notifications} exact />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

it('renders correctly', () => {
  const element = mount(<NavigationWrapper />);

  expect(EnzymeToJson(element)).toMatchSnapshot();
});
