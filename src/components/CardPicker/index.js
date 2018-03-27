import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

export default class CardPicker extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: this.props.selectedOption };
  }
  handleChange(e) {
    this.setState({
      selectedOption: e.target.value,
    });
  }

  render() {
    const { cards, onClick } = this.props;

    const children = cards.map(card => (
      <React.Fragment>
        <label className="content-label" htmlFor={card.value} >
          <div className={this.state.selectedOption === card.value ? 'card active' : 'card'} key={card.value}>
            <input
              type="radio"
              name={card.value}
              id={card.value}
              value={card.value}
              checked={this.state.selectedOption === card.value}
              onChange={e => this.handleChange(e)}
              onClick={onClick}
            />
            <img src={card.img} alt="" />

            <p className="content">{card.content}</p>

          </div>
        </label>
        <style jsx>{styles}</style>
      </React.Fragment>
    ));

    return (
      <div className="card-picker">
        {children}
        <style jsx>{styles}</style>
      </div>
    );
  }
}
CardPicker.propTypes = {
  cards: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
