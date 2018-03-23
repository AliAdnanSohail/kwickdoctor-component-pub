import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import styles from '../styles';

export default class TagButton extends Component {
  constructor(props) {
    super(props);
    /**
     * / props
     * @param { string } title - title for button.
     * @param { string } type - Type for button options 'tag' 'addButton'.
     * @param { number } tagIndex - Only for type="tag". Index each tag for easier delete from tags array.
     * @param { function } deleteTag - Only for type="tag".Trigger for delete tag. Works when user clicked on cross icon.
     * @param { function } addButton - Only for type="addButton". Works when user clicked on whole button.
    */
    this.state = {
    };
  }

  renderButton() {
    if (this.props.type === 'tag') {
      return this.renderTagButton();
    }
    return this.renderAddButton();
  }

  renderTagButton() {
    return (
      <span
        className="b-tag-box"

      > {this.props.title}
        <span
          className="b-tag-box__cross"
          data-tag-index={this.props.tagIndex}
          onClick={this.props.deleteTag}
          onKeyPress={this.props.deleteTag}
          role="button"
          tabIndex="0"
        />
        <style jsx>{styles}</style>
      </span>
    );
  }

  renderAddButton() {
    return (
      <span
        className="b-tag-box b-tag-box_type_add"
        onClick={this.props.addButton}
        onKeyPress={this.props.addButton}
        role="button"
        tabIndex="0"
      > {this.props.title}
        <span
          className="b-tag-box__cross b-tag-box__cross_type_plus"
        />
        <style jsx>{styles}</style>
      </span>
    );
  }

  render() {
    return this.renderButton();
  }
}
