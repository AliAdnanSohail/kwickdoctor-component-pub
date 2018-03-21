import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import CalendarDay from './CalendarDay';

import styles from './styles';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined,
      pageDate: moment(this.props.startPageDate),
    };
  }

  getEventsForDay = date => this.props.events.filter(event => date.isSame(event[this.props.eventDatePropName], 'day'))

  getDays = () => {
    const { selectedDay } = this.state;
    const date = this.state.pageDate.clone();
    date.startOf('month');
    let dayOfweek = date.day();
    dayOfweek = dayOfweek === 0 ? 7 : dayOfweek;
    if (dayOfweek > 1) {
      date.date((dayOfweek - 2) * -1);
    }

    const days = [];
    const iterateDate = date.clone();
    /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
    for (let i = 0; i < this.props.numberOfDays; i++) {
      days.push({
        isNotPageMonth: !this.state.pageDate.isSame(iterateDate, 'month'),
        selected: !!(selectedDay && selectedDay.isSame(iterateDate, 'day')),
        key: i,
        day: iterateDate.date(),
        moment: iterateDate.clone().startOf('day'),
        weekEnd: iterateDate.day() === 0 || iterateDate.day() === 6,
        events: this.getEventsForDay(iterateDate),
        now: iterateDate.isSame(moment(), 'day'),
        onClick: this.clickByDayHandler,
      });
      iterateDate.add('days', 1);
    }
    return days;
  }

  navigationHandler = n => () => {
    const newPageDate = this.state.pageDate.clone().add(n, 'month');
    this.setState({
      pageDate: newPageDate,
    });
    this.props.onChangeMonth(newPageDate.clone().startOf('month'));
  }

  clickByDayHandler = (dayMoment, events) => {
    this.setState({
      selectedDay: dayMoment,
    });
    this.props.onClickByDay(dayMoment, events);
  }

  render() {
    const daysList = this.getDays()
      .map(day => <CalendarDay {...day} />);
    const { pageDate } = this.state;
    const month = (
      <React.Fragment>
        {pageDate.format('MMMM')}
        <span className="calendar__header__month__center-point">·</span>
        {pageDate.format('YYYY')}
        <style jsx>{styles}</style>
      </React.Fragment>
    );

    return (
      <div className="calendar">
        <div className="calendar__header">
          <div className="calendar__header__navigation">
            <button onClick={this.navigationHandler(-1)} className="calendar__header__navigation__button calendar__header__navigation__button_prev" />
            <button onClick={this.navigationHandler(1)} className="calendar__header__navigation__button calendar__header__navigation__button_next" />
          </div>
          <div className="calendar__header__month">{month}</div>
          <ul className="calendar__header__days-of-week">
            <li className="calendar__header__days-of-week__day">MON</li>
            <li className="calendar__header__days-of-week__day">TUE</li>
            <li className="calendar__header__days-of-week__day">WED</li>
            <li className="calendar__header__days-of-week__day">THU</li>
            <li className="calendar__header__days-of-week__day">FRI</li>
            <li className="calendar__header__days-of-week__day">SAT</li>
            <li className="calendar__header__days-of-week__day">SUN</li>
          </ul>
        </div>
        <ul className="calendar__month">
          {daysList}
        </ul>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

Calendar.propTypes = {
  numberOfDays: PropTypes.number,
  startPageDate: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  events: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  onChangeMonth: PropTypes.func,
  onClickByDay: PropTypes.func,
  eventDatePropName: PropTypes.string,
};

Calendar.defaultProps = {
  numberOfDays: 42,
  startPageDate: moment(),
  events: [],
  onChangeMonth() {},
  onClickByDay() {},
  eventDatePropName: 'date',
};
