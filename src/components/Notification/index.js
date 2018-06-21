import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import classnames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';

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

    const сlasses = classnames('notification__dot', {
      'notification__dot--primary': primary,
      'notification__dot--read': read,
    });

    return (
      <Card className="notification">
        <div className="notification__time">{this.renderDate()}</div>
        <div className="notification__message">
          <span className={сlasses} />
          {message}
        </div>

        <div className="notification__actions">
          {!read && <Button flat icon="done" onClick={onComplete} rounded size="small" />}

          <Button flat icon="delete" onClick={onDelete} rounded size="small" />
        </div>

        <div className="notification__actions--mobile">
          <Button flat icon="more_horiz" onClick={this.handleShowButtons} rounded />
          {this.state.buttonsVisible && (
            <ul className="notification__buttons">
              {!read && (
                <button onClick={onComplete} type="button" className="notification__button--mobile">
                  <MaterialIcon icon="done" />Read
                </button>
              )}

              <button onClick={onDelete} type="button" className="notification__button--mobile">
                <MaterialIcon icon="delete" />Delete
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
