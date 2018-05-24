import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Suggestions, Tag } from '../';
import autocompleteStyles from './styles';
import styles, { label as labelStyles, error as errorStyles } from '../../styles';
import KEYS from '../../../../utils/keys';

export default class Autocomplete extends Component {
  static getDerivedStateFromProps(props) {
    return {
      suggestions: props.suggestions.filter((value, index, self) => self.indexOf(value) === index),
    };
  }

  constructor(props) {
    super(props);

    const list = props.suggestions.filter((value, index, self) => self.indexOf(value) === index);

    this.state = {
      focused: false,
      filteredSuggestions: list,
      suggestions: list,
      value: '',
      values: [],
    };
  }

  removeTag = (value) => {
    const { values, suggestions } = this.state;

    const newValues = values.filter(item => item !== value);

    const filtered = suggestions.filter(item => !newValues.some(innerItem => innerItem === item));

    this.setState({ values: newValues, filteredSuggestions: filtered });
  };

  handleFocusWrapper = (event) => {
    if (event.target === this.wrapper) {
      this.input.focus();
    }
  };

  handleRemoveTag = (value) => {
    this.removeTag(value);
  };

  handleChangeInput = (event) => {
    const { value } = event.target;
    const { values, suggestions } = this.state;
    const filtered = suggestions.filter(item => item.includes(value) && !values.some(innerItem => innerItem === item));
    this.setState({
      value,
      filteredSuggestions: filtered,
    });
    this.props.input.onChange(values);
  };

  handleFocusInput = () => {
    this.setState({ focused: true });
  };

  handleBlurInput = () => {
    this.setState({ focused: false });
  };

  handleKeyDownInput = (event) => {
    const { value, values } = this.state;

    if (
      this.props.delimiters.indexOf(event.keyCode) !== -1 &&
      !event.shiftKey &&
      value !== '' &&
      !values.some(item => item === value)
    ) {
      event.preventDefault();
      if (this.props.notEditable === false) {
        this.setState({
          value: '',
          values: this.state.values.concat([value]),
        });
      } else {
        this.setState({
          value: '',
        });
      }
    }

    if (event.keyCode === KEYS.ESCAPE) {
      event.preventDefault();
      event.stopPropagation();

      this.input.blur();

      this.setState({ focused: false });
    }

    if (event.keyCode === KEYS.BACKSPACE && event.target.value === '' && values.length) {
      event.preventDefault();
      event.stopPropagation();

      this.removeTag(values[values.length - 1]);
    }
  };

  handleClickSuggestion = (value) => {
    const { values, suggestions } = this.state;

    const filtered = suggestions.filter(item => item !== value && !values.some(innerItem => innerItem === item));

    this.setState({
      values: this.state.values.concat([value]),
      filteredSuggestions: filtered,
      value: '',
    });
  };

  renderTags = () => {
    const { values } = this.state;

    return values.map(item => (
      <Tag
        key={item}
        name={item.toString()}
        onRemove={() => {
          this.handleRemoveTag(item);
        }}
      />
    ));
  };

  render() {
    const {
      containerClassName, id, label, meta, placeholder,
    } = this.props;
    const { focused, filteredSuggestions, value } = this.state;

    const containerClasses = classnames('form-field', containerClassName);
    const classes = classnames('autocomplete', {
      invalid: meta && meta.error && meta.touched,
      active: meta && meta.active,
      focused,
    });

    return (
      <div className={containerClasses}>
        <label htmlFor={id}>{label}</label>

        <div
          role="textbox"
          tabIndex={0}
          ref={(wrapper) => {
            this.wrapper = wrapper;
          }}
          onFocus={this.handleFocusWrapper}
          className={classes}
        >
          {this.renderTags()}
          <div className="autocomplete__input">
            <input
              id={id}
              type="text"
              ref={(input) => {
                this.input = input;
              }}
              value={value}
              placeholder={placeholder}
              onChange={this.handleChangeInput}
              onKeyDown={this.handleKeyDownInput}
              onFocus={this.handleFocusInput}
              onBlur={this.handleBlurInput}
            />
            <Suggestions
              active={focused}
              items={filteredSuggestions}
              onClick={this.handleClickSuggestion}
            />
          </div>
        </div>

        {meta && meta.error && meta.touched ? <div className="error">{meta.error}</div> : undefined}

        <style jsx>{styles}</style>
        <style jsx>{labelStyles}</style>
        <style jsx>{errorStyles}</style>
        <style>{autocompleteStyles}</style>
      </div>
    );
  }
}

Autocomplete.propTypes = {
  containerClassName: PropTypes.string,
  delimiters: PropTypes.array,
  notEditable: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
  suggestions: PropTypes.array.isRequired,
};

Autocomplete.defaultProps = {
  containerClassName: undefined,
  delimiters: [KEYS.ENTER, KEYS.TAB],
  label: undefined,
  meta: {},
  notEditable: false,
  placeholder: 'Start typing...',
};
