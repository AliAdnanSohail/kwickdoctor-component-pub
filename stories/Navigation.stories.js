import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { DashboardIcon, NotificationIcon } from 'grommet/components/icons/base';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Navigation, NavigationItem } from '../src';
import results from '../.jest-test-results.json';

const links = [
  {
    route: '/dashboard',
    icon: DashboardIcon,
    label: 'Dashboards',
  },
  {
    route: '/notifications',
    icon: NotificationIcon,
    label: 'Notifications',
  },
];

const Dashboard = () => <div>Dashboard component</div>;
const Notifications = () => <div>Notifications component</div>;

class NavigationWrapper extends Component {
  render() {
    return (
      <BrowserRouter>
        <main style={{ minHeight: '100vh', display: 'flex' }}>
          <Navigation>
            {links.map(item => <NavigationItem key={item.route} {...item} />)}
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

storiesOf('Navigation', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Navigation'))
  .add('default', () => <NavigationWrapper />);
