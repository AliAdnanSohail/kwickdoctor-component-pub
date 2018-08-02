import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import { withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import { Navigation, NavigationItem, NavigationAction } from '../src';
import results from '../.jest-test-results.json';

const Dashboard = () => <div>Dashboard component</div>;
const Notifications = () => <div>Notifications component</div>;

class NavigationWrapper extends Component {
  render() {
    return (
      <BrowserRouter>
        <main style={{ minHeight: '100vh', display: 'flex' }}>
          <Navigation>
            <NavigationItem
              route="/dashboard"
              icon={<i className="material-icons">dashboard</i>}
              label="Dashboards"
            />
            <NavigationItem
              route="/notifications"
              icon={<i className="material-icons">assignment_outline</i>}
              label="Notifications"
            />
            <NavigationAction
              icon={<i className="material-icons">photo_camera_outline</i>}
              label="Sign out"
            />
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
