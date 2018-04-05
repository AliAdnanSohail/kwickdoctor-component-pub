import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

export default class Suggestions extends React.Component {
  componentDidUpdate(prevProps) {
    const { items, isFocused, selected } = this.props;
    if (selected !== -1 && prevProps.selected !== selected && isFocused && items.length) {
      this.wrapperElement.scrollTo(0, this.selectedElement.offsetTop);
    }
  }

  renderSuggestions = () => {
    const { items, handleClick, selected } = this.props;

    return items.map((suggestion, index) => (
      <li
        ref={(li) => {
          if (index === selected) {
            this.selectedElement = li;
          }
        }}
        className={classnames(
          'tag-input__suggestion',
          { 'tag-input__suggestion--selected': index === selected },
        )}
        key={suggestion}
      >
        <button onMouseDown={() => { handleClick(index); }}>{suggestion}</button>
        <style jsx>{styles}</style>
      </li>
    ));
  }

  render() {
    const { items, isFocused } = this.props;

    return !!items.length && isFocused && (
      <ul ref={(ul) => { this.wrapperElement = ul; }} className="tag-input__suggestions">
        {this.renderSuggestions()}
        <style jsx>{styles}</style>
      </ul>
    );
  }
}

Suggestions.propTypes = {
  items: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  isFocused: PropTypes.bool.isRequired,
  selected: PropTypes.number.isRequired,
};
