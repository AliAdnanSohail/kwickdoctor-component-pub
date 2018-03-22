import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import styles from './styles';

export default class TagInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      input: '',
      _tagsCounter: 0,
    };
  }

  hasNewTags() {
    const counter = 0;
  }

  addTag(e) {
    if (e.key === 'Enter') {
      this.setState(prevState => ({
        tags: [...prevState.tags, this.state.input],
      }));
      this.clearInput(e);
      console.log('Key');
    }
  }

  clearInput(e) {
    this.setState({ input: '' });
    e.target.value = '';
  }

  handleInputChange(e) {
    this.setState({ input: e.target.value });
  }

  renderTags() {
    if (this.state.tags.length) {
      // this.state.tags.map(item => (
      // return (
      //   <span className="b-tag-box">
      //     123
      //     <span className="b-tag-box__cross" />
      //     <style jsx>{styles}</style>
      //   </span>
      // );
      // ));
      this.state.tags.map((item) => {
        console.log(item);
      });
    }
    return '';
  }

  render() {
    // const {
    //   id, label, name, placeholder, onChange,
    // } = this.props;

    return (
      <section>
        <div className="tag-input__wrapper">
          <div className="tag-input__input">
            {this.renderTags()}
            <input type="text" onKeyPress={e => this.addTag(e)} onChange={e => this.handleInputChange(e)} />
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
