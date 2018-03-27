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
         <svg xmlns="http://www.w3.org/2000/svg" id="svg4" version="1.1" width="40px" viewBox="0 0 40 40">
          <path className="star-grey" d="M 37.951373,13.397766 27.028023,11.733906 22.14579,1.3914364 c -0.874761,-1.84351002 -3.409338,-1.86695002 -4.29158,0 L 12.971977,11.733906 2.0486264,13.397766 c -1.95886788,0.29684 -2.74391636,2.81997 -1.32336173,4.26509 l 7.90279193,8.04589 -1.8691563,11.36578 c -0.3364469,2.05443 1.7345758,3.59331 3.4691517,2.63249 L 20,34.340486 l 9.771948,5.36653 c 1.734576,0.953 3.805598,-0.57806 3.469152,-2.63249 l -1.869157,-11.36578 7.902792,-8.04589 c 1.420555,-1.44512 0.635506,-3.96825 -1.323362,-4.26509 z M 27.521485,24.396406 29.29344,35.207566 20,30.106636 10.70656,35.207566 12.478515,24.396406 4.9570386,16.741106 15.34954,15.163176 20,5.3206464 l 4.65046,9.8425296 10.392501,1.57793 z" />
          <path className="star-green" d="M 17.854209,1.3914401 12.971975,11.73391 2.0486301,13.39777 c -1.95887513,0.29684 -2.74392047,2.81997 -1.32336223,4.2651 L 8.6280573,25.70875 6.7589021,37.07453 c -0.336448,2.05443 1.734576,3.59331 3.4691519,2.63249 L 20,34.34049 l 9.771945,5.36653 c 1.734577,0.95301 3.805601,-0.57806 3.469153,-2.63249 l -1.869156,-11.36578 7.90279,-8.04588 c 1.420558,-1.44513 0.635513,-3.96826 -1.323362,-4.2651 L 27.028025,11.73391 22.14579,1.3914401 c -0.874764,-1.84351998 -3.409339,-1.86694998 -4.291581,0 z"/>
        </svg>
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
