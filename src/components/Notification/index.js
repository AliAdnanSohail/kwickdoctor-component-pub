import classnames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { notification, notificationCard } from './styles';
import { Button, Card } from '../';

export default class Notification extends Component {
  constructor() {
    super();

    this.state = { buttonsVisible: false };
  }

  handleShowButtons = () => {
    this.setState({ buttonsVisible: !this.state.buttonsVisible });
  };

  renderDate = () => moment(this.props.date).format('h:mm A, MMM D');

  render() {
    const {
      message, primary, read, onComplete, onDelete,
    } = this.props;

    const classes = classnames('notification__dot', {
      'notification__dot--primary': primary,
      'notification__dot--read': read,
    });

    return (
      <Card className="notification">
        <div className="notification__time">{this.renderDate()}</div>
        <div className="notification__message">
          <span className={classes} />
          {message}
        </div>

        <div className="notification__actions">
          {!read && (
            <Button
              flat
              icon={<i className="material-icons">done</i>}
              onClick={onComplete}
              rounded
              size="small"
            />
          )}

          <Button
            flat
            icon={<i className="material-icons">delete</i>}
            onClick={onDelete}
            rounded
            size="small"
          />
        </div>

        <div className="notification__actions--mobile">
          <Button
            flat
            icon={<i className="material-icons">more_horiz</i>}
            onClick={this.handleShowButtons}
            rounded
          />
          {this.state.buttonsVisible && (
            <ul className="notification__buttons">
              {!read && (
                <button onClick={onComplete} type="button" className="notification__button--mobile">
                  <i className="material-icons">done</i>Read
                </button>
              )}

              <button onClick={onDelete} type="button" className="notification__button--mobile">
                <i className="material-icons">delete</i>Delete
              </button>
            </ul>
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
