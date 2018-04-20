import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StarIcon } from 'grommet/components/icons/base';

import styles from './styles';

const greyTheme = {
  icon: {
    size: {
      large: '40px',
    },
    color: '#bcbecf',
  },
};
const greenTheme = {
  icon: {
    size: {
      large: '40px',
    },
    color: '#70c983',
  },
};

export default class StarPicker extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: this.props.rank, stars: this.generateStars() };
  }
  handleChange(e) {
    this.setState({
      selectedOption: parseInt(e.target.value, 10),
    });
  }
  generateStars() {
    const res = [];
    for (let i = 1; i <= this.props.amount; i += 1) {
      res.push({ key: `star${i.toString()}`, value: parseInt(i, 10) });
    }
    return res;
  }

  render() {
    return (
      <React.Fragment>
        {this.state.stars.map(star => (
          <label className="star" key={star.key} htmlFor={`${star.value}-${star.key}`}>
            <input
              type="radio"
              name={star.value}
              id={`${star.value}-${star.key}`}
              value={star.value}
              checked={this.state.selectedOption === star.value}
              onChange={e => this.handleChange(e)}
              onClick={this.props.onClick}
            />
            <StarIcon
              theme={this.state.selectedOption >= star.value ? greenTheme : greyTheme}
              size="large"
            />
          </label>
        ))}
        <style jsx>{styles}</style>
      </React.Fragment>
    );
  }
}
StarPicker.propTypes = {
  rank: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
