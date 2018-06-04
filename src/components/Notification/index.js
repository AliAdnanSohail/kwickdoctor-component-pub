import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import { CheckmarkIcon, TrashIcon } from 'grommet/components/icons';

import { Button, Card } from '../';
import { notification, notificationCard } from './styles';

export default class Notification extends Component {
  renderDate = () => moment(this.props.date).format('h:mm A, MMM D');

  render() {
    const {
      message, primary, read, onComplete, onDelete,
    } = this.props;

    const dotClasses = classnames('notification__dot', {
      'notification__dot--primary': primary,
      'notification__dot--read': read,
    });

    return (
      <Card className="notification-card">
        <div className="notification__time">{this.renderDate()}</div>

        <div className="notification__message">
          <span className={dotClasses} />
          {message}
        </div>

        <div className="notification__actions">
          <Button flat icon={<CheckmarkIcon />} onClick={onComplete} rounded size="s" />
          <Button flat icon={<TrashIcon />} onClick={onDelete} rounded size="s" />
        </div>

        <style jsx>{notification}</style>
        <style jsx>{notificationCard}</style>
      </Card>
    );
  }
}

Notification.propTypes = {
  date: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
  primary: PropTypes.bool,
  read: PropTypes.bool,
};

Notification.defaultProps = {
  onComplete: () => {},
  onDelete: () => {},
  primary: false,
  read: false,
};
