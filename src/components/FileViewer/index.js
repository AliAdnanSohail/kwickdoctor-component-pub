import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PdfViewer from './PdfViewer';
import styles from './styles';

function FileExtension(filename) {
  // rocket jump : all files which are not pdf renders as image
  return /[^.]+$/.exec(filename).toString() === 'pdf';
}

export default class FileViewer extends Component {
  constructor(props) {
    super(props);
    this.state = { isPdf: FileExtension(props.file.src) };
  }

  render() {
    const {
      file,
    } = this.props;
    return (
      <React.Fragment>
        {this.state.isPdf ? (
          <PdfViewer file={file.src} fillHeight />
        ) : (
          <img className="image" src={file.src} alt="This document can't be displayed" />

        ) }
        <style jsx>{styles}</style>
      </React.Fragment>
    );
  }
}

FileViewer.propTypes = {
  file: PropTypes.object.isRequired,
};
