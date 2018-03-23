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
      defaultTags: ['Hello', 'from', 'defaultTags', 'array', 'tet', '423', 'Сочи', ''],
      showTagsList: false,
    };
  }

  addTag(value) {
    this.setState(prevState => ({
      tags: [...prevState.tags, value],
    }));
  }

  addTagFromInput(e) {
    if (e.key === 'Enter' && this.state.input !== '') {
      this.addTag(this.state.input);
      this.clearInput(e);
    }
  }

  addTagFromTagsList(e) {
    this.addTag(e.currentTarget.textContent);
    this.handleTagList();
  }

  clearInput(e) {
    this.setState({ input: '' });
    e.target.value = '';
  }

  searchTags(e) {
    const value = e.currentTarget.value.toLowerCase();
    const tags = this.state.defaultTags;
    const splitValue = value.split('');

    tags.map((item) => {
      let matches = 0;
      splitValue.map((eachLetter, index) => {
        const tagLetter = item.split('')[index];

        if (!tagLetter) {
          return;
        }

        // if(tagLetter == ''){
        //   continue;
        // }

        if (eachLetter == tagLetter.toLowerCase()) {
          matches++;
        }
      });
      
      if (matches >= 2) {
        console.log(item);
      }
    });

    // console.log(`${value} : ${tags}`);


    this.handleInputChange(e);
  }

  handleInputChange(e) {
    this.setState({ input: e.target.value.trim() });
  }

  deleteTag(e) {
    const index = +e.currentTarget.attributes['data-tag-index'].value;
    const { tags } = this.state;

    this.closeTagslistIfActive();
    tags.splice(index, 1);
    this.setState({ tags });
  }

  handleTagList() {
    this.setState(prevState => ({ showTagsList: !prevState.showTagsList }));
  }

  closeTagslistIfActive() {
    if (this.state.showTagsList) {
      this.handleTagList();
    }
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
    if (this.state.showTagsList) {
      const tagList = this.state.defaultTags.map((tag, index) => (
        <div
          className="b-tags-list__tag"
          key={tag + index}
          tabIndex="0"
          onClick={e => this.addTagFromTagsList(e)}
          onKeyPress={e => this.addTagFromTagsList(e)}
          role="button"
        >
          {tag}
          <style jsx>{styles}</style>
        </div>

      ));
      return (
        <div className="b-tags-list">
          <div className="b-tags-list__wrapper">
            {tagList}
          </div>
          <style jsx>{styles}</style>
        </div>
      );
    }
    return '';
  }


  render() {
    return (
      <section>
        <div className="tag-input__wrapper">
          <div className="tag-input__input-wrapper">
            <TagButton
              type="addButton"
              title="Add existing tag"
              addButton={e => this.handleTagList(e)}
            />
            {this.renderTags()}
            <div className="tag-input__input">
              <input
                type="text"
                tabIndex="0"
                onKeyPress={e => this.addTagFromInput(e)}
                onChange={e => this.searchTags(e)}
                onFocus={e => this.closeTagslistIfActive(e)}
              />
              <div className="b-tags-list">
                <div className="b-tags-list__wrapper b-tags-list__wrapper_no-overflow">
                  <div className="b-tags-list__tag">
                    432143
                  </div>
                </div>
              </div>
            </div>
            {this.renderTagList()}
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
