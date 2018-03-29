import React from 'react';
import PDF from 'react-pdf-js';

import styles from './styles';

class PdfViewer extends React.Component {
  state = {};

  onDocumentComplete = (pages) => {
    this.setState({ page: 1, pages });
  }

  onPageComplete = (page) => {
    this.setState({ page });
  }

  handlePrevious = () => {
    const prevPage = this.state.page - 1;
    if (prevPage > 0) { this.setState({ page: prevPage }); }
  }

  handleNext = () => {
    const nextPage = this.state.page + 1;
    if (nextPage <= this.state.pages) this.setState({ page: this.state.page + 1 });
  }

  renderPagination() {
    return (
      <React.Fragment>
        <button onClick={this.handlePrevious}>Previous</button>
        <button onClick={this.handleNext}>Next</button>
      </React.Fragment>
    );
  }

  render() {
    const pdfFile = this.props.file;
    return (
      <div className="pdf-container">
        <PDF
          file={pdfFile}
          onDocumentComplete={this.onDocumentComplete}
          onPageComplete={this.onPageComplete}
          page={this.state.page}
          fillHeight
        />
        {this.renderPagination()}
        <style>{styles}</style>
      </div>
    );
  }
}

module.exports = PdfViewer;
