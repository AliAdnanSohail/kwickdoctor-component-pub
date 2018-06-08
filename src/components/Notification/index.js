import React, { Component } from 'react';
import { CheckmarkIcon, TrashIcon } from 'grommet/components/icons';
import classnames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';

import { notification, notificationCard } from './styles';
import { Button, Card } from '../';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonsVisible: false,
    };
  }

  handleShowButtons = () => {
    this.setState({ buttonsVisible: !this.state.buttonsVisible });
  };

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
          <Button
            flat
            icon={<CheckmarkIcon />}
            onClick={onComplete}
            rounded
            size="s"
          />

          <Button
            flat
            icon={<TrashIcon />}
            onClick={onDelete}
            rounded
            size="s"
          />

        </div>

        <div className="notification__actions--mobile">
          <button className="notification__points" onClick={this.handleShowButtons}>
            <span className="notification__point" />
            <span className="notification__point" />
            <span className="notification__point" />
          </button>
          {this.state.buttonsVisible && (
            <div className="notification__buttons">
              <Button
                flat
                icon={<CheckmarkIcon />}
                onClick={onComplete}
                size="s"
              >
                Read
              </Button>

              <Button
                flat
                icon={<TrashIcon />}
                onClick={onDelete}
                size="s"
              >
                Delete
              </Button>
            </div>
          )}
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
