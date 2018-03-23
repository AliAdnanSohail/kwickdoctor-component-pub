import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import styles from '../styles';
import TagButton from '../TagButton';


export default class TagInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      input: '',
      defaultTags: ['Hello', 'from', 'defaultTags', 'array'],
    };
  }

  addTag(e) {
    if (e.key === 'Enter' && this.state.input !== '') {
      this.setState(prevState => ({
        tags: [...prevState.tags, this.state.input],
      }));
      this.clearInput(e);
    }
  }

  clearInput(e) {
    this.setState({ input: '' });
    e.target.value = '';
  }

  handleInputChange(e) {
    this.setState({ input: e.target.value.trim() });
  }

  deleteTag(e) {
    const index = +e.currentTarget.attributes['data-tag-index'].value;
    const { tags } = this.state;

    tags.splice(index, 1);
    this.setState({ tags });
  }


  renderTags() {
    if (this.state.tags.length) {
      const tagList = this.state.tags.map((tag, index) =>
        (
          <TagButton
            title={tag}
            deleteTag={e => this.deleteTag(e)}
            tagIndex={index}
            type="tag"
            key={tag + index}
          />
        ));

      return tagList;
    }
    return '';
  }

  renderTagList() {
    console.log('OPen');
  }


  render() {
    return (
      <section>
        <div className="tag-input__wrapper">
          <div className="tag-input__input-wrapper">
            <TagButton
              type="addButton"
              title="Add existing tag"
              addButton={e => this.renderTagList(e)}
            />
            {this.renderTags()}
            <div className="tag-input__input">
              <input
                type="text"
                tabIndex="0"
                onKeyPress={e => this.addTag(e)}
                onChange={e => this.handleInputChange(e)}
              />
            </div>
          </div>
          
          <style jsx>{styles}</style>
        </div>

      </section>
    );
  }
}

// TextInput.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string,
//   placeholder: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
//   label: PropTypes.string,
// };

// TextInput.defaultProps = {
//   name: '',
//   placeholder: '',
//   label: '',
// };
