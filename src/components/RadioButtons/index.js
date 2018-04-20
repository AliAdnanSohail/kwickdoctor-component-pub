import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles';

export default class RadioButtons extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { options, selected, onChange } = this.props;

    return (
      <fieldset>
        <div className="radio__wrapper">
          {options.map((option) => {
            const classes = classnames('radio__box', {
              radio__box_active:
                selected.toLowerCase() === option.value.toLowerCase(),
            });
            const iconClasses = classnames('radio__icon', {
              radio__icon_active:
                selected.toLowerCase() === option.value.toLowerCase(),
            });
            return (
              <div className={classes} key={option.value}>
                <div className={iconClasses}>{option.icon}</div>
                <input
                  type="radio"
                  name="group"
                  value={option.value}
                  className="radio__select"
                  onChange={e => onChange(e.target.value)}
                  defaultChecked={selected === option.value}
                />
                {option.value}
              </div>
            );
          })}
        </div>
        <style>{styles}</style>
      </fieldset>
    );
  }
}

RadioButtons.propTypes = {
  options: PropTypes.array.isRequired,
  selected: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

RadioButtons.defaultProps = {
  selected: 'lab analysis',
};
