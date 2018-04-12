import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

export default class CardPicker extends Component {
  constructor(props) {
    super(props);

    this.state = { selected: this.props.selected };
  }

  handleChange = (event) => {
    this.setState({ selected: event.target.value }, () => {
      this.props.onSelect(this.state.selected);
    });
  };

  render() {
    const { cards } = this.props;
    const { selected } = this.state;

    return (
      <div className="card-picker">
        {cards.map((card) => {
          const classes = classnames('card', { 'card--active': card.value === selected });

          return (
            <label className={classes} htmlFor={card.value} key={card.value}>
              <input
                type="radio"
                id={card.value}
                name={card.value}
                value={card.value}
                checked={selected === card.value}
                onChange={this.handleChange}
              />
              <img src={card.img} alt={card.content} />

              <p className="content">{card.content}</p>
            </label>
          );
        })}
        <style jsx>{styles}</style>
      </div>
    );
  }
}

CardPicker.propTypes = {
  cards: PropTypes.array.isRequired,
  selected: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

CardPicker.defaultProps = {
  selected: '',
};
