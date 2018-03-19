import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

export default class FileInput extends Component {
  constructor(props) {
    super(props);
    this.state = { showFile: false };
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
      id, name, message,
    } = this.props;

    if (!this.state.showFile) {
      return (
        <React.Fragment key={id}>
          <button className="upload-license-copy" onClick={e => this.handleClick(e)}>
            <i className="icon-upload" /> {message}
          </button>
          <input className="inputFile" type="file" name={name} ref={(input) => { this.fileUpload = input; }} onChange={e => this.handleFile(e)} />
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
          <div className="remove" onClick={e => this.handleRemove(e)} />
        </div>
        <style jsx>{styles}</style>
      </div>);
  }
}

FileInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  message: PropTypes.string,
};

FileInput.defaultProps = {
  name: '',
  message: 'Upload file',
};
