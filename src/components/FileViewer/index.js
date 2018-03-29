import React, { Component } from 'react';
import PropTypes from 'prop-types';

function FileExtension(filename) {
  // rocket jump : all files which are not pdf renders as image
  return /[^.]+$/.exec(filename).toString() === 'pdf';
}

export default class FileViewer extends Component {
  constructor(props) {
    super(props);
    this.state = { isPdf: FileExtension(props.src[0].src) };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isPdf ? ('yes') : ('no') }
      </React.Fragment>
    );
  }
}

FileViewer.propTypes = {
  src: PropTypes.array.isRequired,
};
