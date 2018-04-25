import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';
import { mount } from 'enzyme';

import { Calendar } from '../src';

describe('Calendar', () => {
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

  it('renders correctly', () => {
    const element = renderer.create(<Calendar {...baseProps} />).toJSON();

    expect(element).toMatchSnapshot();
  });

  it('change months correctly', () => {
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

  describe('onSelect', () => {
    const expected = {};
    const props = {
      ...baseProps,
      onSelect: (day, events) => {
        expected.dayMoment = day;
        expected.eventsArray = events;
      },
    };

    it('should receive clicked day', () => {
      const clickDate = moment(testDate).add(1, 'day');

      const element = mount(<Calendar {...props} />);
      const button = element.find(`.day--date--${clickDate.format('YYYY-MM-DD')}`);
      button.simulate('click');

      expect(clickDate.isSame(expected.dayMoment, 'day')).toEqual(true);
    });

    it('should receive events only equal to current day', () => {
      const clickDate = moment(testDate).add(1, 'day');

      const element = mount(<Calendar {...props} />);
      const button = element.find(`.day--date--${clickDate.format('YYYY-MM-DD')}`);
      button.simulate('click');

      expect(expected.eventsArray).toHaveLength(4);
    });
  });

  describe('Dots', () => {
    it('should show 3 dots if there are more than 3 events', () => {
      const clickDate = moment(testDate).add(1, 'day');
      const element = mount(<Calendar {...baseProps} />);
      const button = element.find(`.day--date--${clickDate.format('YYYY-MM-DD')}`);
      button.simulate('click');

      expect(element.find(`.day--selected--with-events.day--date--${clickDate.format('YYYY-MM-DD')}`)).toHaveLength(1);
      expect(element.find(`.day--selected--with-events.day--date--${clickDate.format('YYYY-MM-DD')} .events__item`)).toHaveLength(3);
    });

    it('should show 3 dots if there are 3 events', () => {
      const clickDate = moment(testDate).add(2, 'day');
      const element = mount(<Calendar {...baseProps} />);
      const button = element.find(`.day--date--${clickDate.format('YYYY-MM-DD')}`);
      button.simulate('click');

      expect(element.find(`.day--selected--with-events.day--date--${clickDate.format('YYYY-MM-DD')}`)).toHaveLength(1);
      expect(element.find(`.day--selected--with-events.day--date--${clickDate.format('YYYY-MM-DD')} .events__item`)).toHaveLength(3);
    });

    it('should show 2 dots if there are 2 events', () => {
      const clickDate = moment(testDate).add(3, 'day');
      const element = mount(<Calendar {...baseProps} />);
      const button = element.find(`.day--date--${clickDate.format('YYYY-MM-DD')}`);
      button.simulate('click');

      expect(element.find(`.day--selected--with-events.day--date--${clickDate.format('YYYY-MM-DD')}`)).toHaveLength(1);
      expect(element.find(`.day--selected--with-events.day--date--${clickDate.format('YYYY-MM-DD')} .events__item`)).toHaveLength(2);
    });

    it('should show 1 dot if there is 1 event', () => {
      const clickDate = moment(testDate).add(4, 'day');
      const element = mount(<Calendar {...baseProps} />);
      const button = element.find(`.day--date--${clickDate.format('YYYY-MM-DD')}`);
      button.simulate('click');

      expect(element.find(`.day--selected--with-events.day--date--${clickDate.format('YYYY-MM-DD')}`)).toHaveLength(1);
      expect(element.find(`.day--selected--with-events.day--date--${clickDate.format('YYYY-MM-DD')} .events__item`)).toHaveLength(1);
    });

    it('does not show any dots if there are no events', () => {
      const clickDate = moment(testDate).add(5, 'day');
      const element = mount(<Calendar {...baseProps} />);
      const button = element.find(`.day--date--${clickDate.format('YYYY-MM-DD')}`);
      button.simulate('click');

      expect(element.find(`.day--selected--with-events.day--date--${clickDate.format('YYYY-MM-DD')}`)).toHaveLength(0);
      expect(element.find(`.day--selected--without-events.day--date--${clickDate.format('YYYY-MM-DD')}`)).toHaveLength(1);
    });
  });

  it('should set min and max correctly', () => {
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
});
