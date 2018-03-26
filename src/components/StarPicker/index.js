import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

export default class StarPicker extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: this.props.rank };
  }
  handleChange(e) {
    this.setState({
      selectedOption: parseInt(e.target.value, 10),
    });
  }

  render() {
    const stars = [
      { key: 'one', value: 1 },
      { key: 'two', value: 2 },
      { key: 'three', value: 3 },
      { key: 'four', value: 4 },
      { key: 'five', value: 5 },
    ];

    const children = stars.map(star => (
      <React.Fragment key={star.value}>
        <label className={this.state.selectedOption >= star.value ? 'star active' : 'star'} htmlFor={`${star.value}-${star.key}`} >
          <input
            type="radio"
            name={star.value}
            id={`${star.value}-${star.key}`}
            value={star.value}
            checked={this.state.selectedOption === star.value}
            onChange={e => this.handleChange(e)}
            onClick={this.props.onClick}
          />
        </label>
        <style jsx>{styles}</style>
      </React.Fragment>
    ));

    return (

      <React.Fragment>
        {children}
      </React.Fragment>
    );
  }
}
StarPicker.propTypes = {
  rank: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
