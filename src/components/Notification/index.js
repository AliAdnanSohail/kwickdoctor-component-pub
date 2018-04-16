import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import AriaModal from 'react-aria-modal';
// import { CloseIcon } from 'grommet/components/icons/base';
import { TrashIcon } from 'grommet/components/icons';

import styles from './styles';

export default class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      delete: false,
      startDelete: false,
    };
  }

  handleClick() {
    this.setState({ startDelete: true });
    setTimeout(() => {
      this.setState({ delete: true });
    }, 500);
  }

  render() {
    const { success, date, message } = this.props;

    const statusClass = classnames(
      'notification__status',
      `notification__status_color_${success ? 'blue' : 'grey'}`,
    );

    const notificationClass = classnames('notification', { notification_animated: this.state.startDelete });

    function dateFormat(d) {
      const tempDate = new Date(d);
      const monthNames = [
        'Jan',
        'Feb',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      const hours = tempDate.getHours();
      const minutes = tempDate.getMinutes();
      const day = tempDate.getDate();
      const month = monthNames[tempDate.getMonth()];

      return `${hours}:${minutes}, ${month} ${day}`;
    }


    const renderNotification = () =>
      (
        <section>
          <div className={notificationClass}>
            <div className="notification__wrapper">
              <div className="notification__time-box">
                <div className="notification__time">{dateFormat(date)}</div>
              </div>
              <div className="notification__message-box">
                <div className={statusClass} />
                <div className="notification__message">{message}</div>
              </div>
              <div
                className="notification__delete-box"
                onClick={e => this.handleClick(e)}
                onKeyPress={e => this.handleClick(e)}
                tabIndex="-1"
                role="button"
              >
                <TrashIcon />
              </div>
            </div>
          </div>
          <style jsx>{styles}</style>
        </section>
      );
    return this.state.delete ? null : renderNotification();
  }
}

Notification.propTypes = {
  // date: PropTypes.instanceOf(Date).isRequired,
  success: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

