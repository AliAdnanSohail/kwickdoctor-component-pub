import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';
import { mount } from 'enzyme';

import { Calendar } from '../src';

const testDate = '2018-03-15';
const baseProps = {
  min: moment(testDate),
  max: moment(testDate).add(1, 'month'),
  events: [
    { date: moment(testDate), name: 'event' },
    { date: moment(testDate), name: 'event' },
    { date: moment(testDate), name: 'event' },
    { date: moment(testDate), name: 'event' },
    { date: moment(testDate), name: 'event' },
    { date: moment(testDate).add(1, 'day'), name: 'event' },
    { date: moment(testDate).add(1, 'day'), name: 'event' },
    { date: moment(testDate).add(1, 'day'), name: 'event' },
    { date: moment(testDate).add(1, 'day'), name: 'event' },
    { date: moment(testDate).add(2, 'day'), name: 'event' },
    { date: moment(testDate).add(2, 'day'), name: 'event' },
    { date: moment(testDate).add(2, 'day'), name: 'event' },
    { date: moment(testDate).add(3, 'day'), name: 'event' },
    { date: moment(testDate).add(3, 'day'), name: 'event' },
    { date: moment(testDate).add(4, 'day'), name: 'event' },
  ],
  onSelect() {},
  selected: moment(testDate),
  hasEvents: true,
};

it('Calendar renders correctly', () => {
  const element = renderer.create(<Calendar {...baseProps} />).toJSON();

  expect(element).toMatchSnapshot();
});

it('Calendar month changes correctly', () => {
  const dateNext = moment(testDate).add(1, 'month');
  const datePrev = moment(testDate).add(-1, 'month');

  const element = mount(<Calendar {...baseProps} />);
  expect(element.find(`.day--date--${dateNext.format('YYYY-MM-DD')}`)).toHaveLength(0);
  expect(element.find(`.day--date--${datePrev.format('YYYY-MM-DD')}`)).toHaveLength(0);

  const nextButton = element.find('button.next');
  nextButton.simulate('click');
  expect(element.find(`.day--date--${dateNext.format('YYYY-MM-DD')}`)).toHaveLength(1);

  const prevButton = element.find('button.prev');
  prevButton.simulate('click');
  prevButton.simulate('click');
  expect(element.find(`.day--date--${datePrev.format('YYYY-MM-DD')}`)).toHaveLength(1);
});

it('Calendar onSelect event correctly', () => {
  const props = Object.assign({}, baseProps);
  const clickDate = moment(testDate).add(1, 'day');
  let dayMoment;
  let eventsArray;
  props.onSelect = (day, events) => {
    dayMoment = day;
    eventsArray = events;
  };

  const element = mount(<Calendar {...props} />);
  const button = element.find(`.day--date--${clickDate.format('YYYY-MM-DD')}`);
  button.simulate('click');

  expect(clickDate.isSame(dayMoment, 'day')).toEqual(true);
  expect(eventsArray).toHaveLength(3);
});

it('Calendar events dots shows correctly', () => {
  const clickDate = moment(testDate).add(1, 'day');
  const element = mount(<Calendar {...baseProps} />);
  const button = element.find(`.day--date--${clickDate.format('YYYY-MM-DD')}`);
  button.simulate('click');

  expect(element.find(`.day--selected--with-events.day--date--${clickDate.format('YYYY-MM-DD')}`)).toHaveLength(1);
  expect(element.find(`.day--selected--with-events.day--date--${clickDate.format('YYYY-MM-DD')} .events__item`)).toHaveLength(4);
});

it('Calendar min and max sets correctly', () => {
  const props = Object.assign({}, baseProps);
  let selectCount = 0;
  props.onSelect = () => {
    selectCount += 1;
  };
  const minDate = moment(testDate);
  const disabledDate1 = moment(testDate).add(-1, 'day');
  const disabledDate2 = moment(testDate).add(1, 'month').add(1, 'day');
  const element = mount(<Calendar {...props} />);

  element.find(`.day--date--${minDate.format('YYYY-MM-DD')}`).simulate('click');
  expect(selectCount === 1).toEqual(true);
  element.find(`.day--disabled.day--date--${disabledDate1.format('YYYY-MM-DD')}`).simulate('click');
  element.find('button.next').simulate('click');
  element.find(`.day--disabled.day--date--${disabledDate2.format('YYYY-MM-DD')}`).simulate('click');
  expect(selectCount === 1).toEqual(true);
});
