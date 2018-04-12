import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { suggestions, suggestion as suggestionStyles } from './styles';

export default class Suggestions extends Component {
  renderSuggestions = () => {
    const { items, onClick } = this.props;

    return items.map((suggestion, index) => (
      <li key={suggestion} className="suggestion">
        <button
          onMouseDown={(event) => {
            event.stopPropagation();

            onClick(suggestion, index);
          }}
        >
          {suggestion}
        </button>

        <style jsx>{suggestionStyles}</style>
      </li>
    ));
  };

  render() {
    const { items, active } = this.props;

    return (
      !!items.length &&
      active && (
        <Fragment>
          <ul className="suggestions">{this.renderSuggestions()}</ul>

          <style jsx>{suggestions}</style>
        </Fragment>
      )
    );
  }
}

Suggestions.propTypes = {
  active: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
