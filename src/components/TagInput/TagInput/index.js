import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import Tag from './../Tag';
import Suggestions from './../Suggestions';

import styles from './styles';

const KEYS = {
  ENTER: 13,
  TAB: 9,
  BACKSPACE: 8,
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  ESCAPE: 27,
  RIGHT_ARROW: 39,
};

export default class TagInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      isFocused: false,
      selectedIndex: -1,
      selectionMode: false,
      suggestions: [],
      tags: this.props.tags,
    };
  }

  getTagName = (tag) => {
    if (tag !== null && typeof tag === 'object') {
      return tag[this.props.tagNameProp].toString();
    }

    return tag.toString();
  }

  getLowerCaseTagsNames = () => this.state.tags.map(tag => this.getTagName(tag).toLowerCase())

  getFilteredSuggestions = (query) => {
    const { suggestions, minQueryLength } = this.props;

    if (query.length < minQueryLength) {
      return [];
    }

    const tagsNames = this.getLowerCaseTagsNames();

    if (typeof suggestions === 'function') {
      return suggestions(query, tagsNames);
    }

    return suggestions
      .filter((value, index) => suggestions.indexOf(value) === index)
      .filter(item => (
        item.toLowerCase().indexOf(query.toLowerCase()) === 0 && tagsNames.indexOf(item) === -1
      ))
      .slice(0, 10);
  }

  addTag = (name) => {
    const { tags } = this.state;
    const { tagCreate } = this.props;

    const newTag = tagCreate(name);

    if (tags.find(tag => (
      this.getTagName(newTag).toLowerCase() === this.getTagName(tag).toLowerCase()
    )) !== undefined) {
      return;
    }

    const newTags = tags.slice(0);
    newTags.push(newTag);

    this.setState({
      tags: newTags,
    });
    this.handleTagsChange(newTags);
    this.resetAndFocusInput();
  }

  removeTag = (name) => {
    const { tags } = this.state;
    const newTags = tags.filter(tag => this.getTagName(tag) !== name);
    this.setState({
      tags: newTags,
    });
    this.handleTagsChange(newTags);
  }

  resetAndFocusInput = () => {
    this.setState({
      query: '',
      suggestions: [],
      selectedIndex: -1,
      selectionMode: false,
    });
    if (this.textInput) {
      this.textInput.focus();
    }
  }

  updateSuggestions = debounce(() => {
    const { query } = this.state;
    const suggestions = this.getFilteredSuggestions(query);
    if ((typeof suggestions === 'object' || typeof suggestions === 'function') && typeof suggestions.then === 'function') {
      suggestions.then((result) => {
        this.setState({ suggestions: result });
      });
    } else {
      this.setState({ suggestions });
    }
  }, this.props.suggestionsDelay);

  handleInputChange = (e) => {
    const query = e.target.value;
    this.updateSuggestions();
    this.setState({
      query,
      selectedIndex: -1,
      selectionMode: false,
    });
  }

  handleInputKeyDown = (e) => {
    const {
      query, selectedIndex, suggestions, selectionMode, tags,
    } = this.state;

    if (e.keyCode === KEYS.ESCAPE) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({
        selectedIndex: -1,
        selectionMode: false,
        suggestions: [],
      });
    }

    if (this.props.delimiters.indexOf(e.keyCode) !== -1 && !e.shiftKey) {
      if (e.keyCode !== KEYS.TAB || query !== '') {
        e.preventDefault();
      }

      const selectedQuery =
        selectionMode && selectedIndex !== -1
          ? suggestions[selectedIndex]
          : query;

      if (selectedQuery !== '') {
        this.addTag(selectedQuery);
      }
    }

    if (
      e.keyCode === KEYS.BACKSPACE &&
      query === '' &&
      tags.length
    ) {
      this.removeTag(this.getTagName(tags[tags.length - 1]));
    }

    if (
      e.keyCode === KEYS.RIGHT_ARROW &&
      suggestions.length &&
      selectedIndex !== -1
    ) {
      this.setState({
        query: suggestions[selectedIndex],
        selectedIndex: -1,
        selectionMode: false,
        suggestions: [],
      });
      this.updateSuggestions();
    }

    if (e.keyCode === KEYS.UP_ARROW) {
      e.preventDefault();
      this.setState({
        selectedIndex:
          selectedIndex <= 0 ? suggestions.length - 1 : selectedIndex - 1,
        selectionMode: true,
      });
    }

    if (e.keyCode === KEYS.DOWN_ARROW) {
      e.preventDefault();
      this.setState({
        selectedIndex:
          suggestions.length === 0
            ? -1
            : (selectedIndex + 1) % suggestions.length,
        selectionMode: true,
      });
    }
  }

  handleFocus = () => {
    this.setState({
      isFocused: true,
    });
  }

  handleBlur = () => {
    this.setState({
      isFocused: false,
    });
  }

  handleTagsChange = (tags) => {
    this.props.onChange(tags);
  }

  handleWrapperElementOnClick = (e) => {
    if (e.target === this.wrapperElement) {
      this.textInput.focus();
    }
  }

  handleSuggestionClick = (i) => {
    this.addTag(this.state.suggestions[i]);
  }


  renderTags = () => {
    const { tags } = this.state;

    return tags.map((tag) => {
      const name = this.getTagName(tag);
      return (
        <Tag
          key={name}
          name={name}
          onRemoveClick={() => { this.removeTag(name); }}
        />
      );
    });
  }

  render() {
    const {
      query, suggestions, selectedIndex, isFocused,
    } = this.state;
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div ref={(wrapper) => { this.wrapperElement = wrapper; }} onClick={this.handleWrapperElementOnClick} className="tag-input">
        {/* eslint-enable */}
        <ul className="tag-input__tag-list">
          {this.renderTags()}
        </ul>
        <div className="tag-input__input">
          <input
            type="text"
            ref={(input) => { this.textInput = input; }}
            value={query}
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputKeyDown}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          <Suggestions
            isFocused={isFocused}
            selected={selectedIndex}
            handleClick={this.handleSuggestionClick}
            items={suggestions}
          />
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

TagInput.propTypes = {
  tags: PropTypes.array,
  tagNameProp: PropTypes.string,
  tagCreate: PropTypes.func,
  suggestions: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array,
  ]),
  suggestionsDelay: PropTypes.number,
  onChange: PropTypes.func,
  delimiters: PropTypes.array,
  minQueryLength: PropTypes.number,
};

TagInput.defaultProps = {
  tags: [],
  tagNameProp: 'name',
  tagCreate(name) { return name; },
  suggestions: [],
  suggestionsDelay: 0,
  onChange() {},
  delimiters: [KEYS.ENTER, KEYS.TAB],
  minQueryLength: 1,
};
