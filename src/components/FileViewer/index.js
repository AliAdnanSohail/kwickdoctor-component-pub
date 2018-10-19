import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

import styles from './styles';

function FileExtension(filename) {
  // rocket jump : all files which are not pdf renders as image
  return !(/\.(jpeg|png)$/i).test(filename);
}

export default class FileViewer extends Component {
  constructor(props) {
    super(props);
    this.state = { isPdf: FileExtension(props.file.src), file: props.file.src, numPages: null };
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { file, numPages } = this.state;

    return (
      <React.Fragment>
        {this.state.isPdf ? (
          <div className="pdf__wrapper">
            <Document file={file} onLoadSuccess={this.onDocumentLoad}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        ) : (
          <img className="image" src={file} alt="This document can't be displayed" />
        )}
        <style jsx>{styles}</style>
      </React.Fragment>
    );
  }
}

FileViewer.propTypes = {
  file: PropTypes.object.isRequired,
};
