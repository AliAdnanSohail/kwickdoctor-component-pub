import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

export default class FileInput extends Component {
  constructor(props) {
    super(props);
    this.state = { showFile: false };

    this.handleFile = this.handleFile.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleFile() {
    this.setState({ showFile: true });
  }
  handleClick() {
    this.fileUpload.click();
  }
  handleRemove() {
    this.setState({ showFile: false });
  }
  render() {
    const {
      id, name, message
    } = this.props;

    if (!this.state.showFile) {
      return (
        <React.Fragment key={id}>
          <button className="upload-license-copy" onClick={this.handleClick}>
            <i className="icon-upload" /> {message}
          </button>
          <input className="inputFile" type="file" name={name} ref={(input) => { this.fileUpload = input; }} onChange={this.handleFile} />
          <style jsx>{styles}</style>
        </React.Fragment>);
    }
    return (
      <div className="box">
        <div className="med" />
        <div className="filename">
          {this.fileUpload.files[0].name}
        </div>
        <div className="icons">
          <div className="remove" onClick={this.handleRemove} />
        </div>
        <style jsx>{styles}</style>
      </div>);
  }
}

FileInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  message: PropTypes.string.isRequired,
};

FileInput.defaultProps = {
  name: '',
  message: 'Upload file',
};
