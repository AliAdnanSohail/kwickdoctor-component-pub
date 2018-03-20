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
          <input type="file" name={name} id={id} className="inputFile" ref={(input) => { this.fileUpload = input; }} onChange={e => this.handleFile(e)} />
          <label className="upload-license-copy" htmlFor={id}>
            <svg className="icon-upload" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="#4695ef" ><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" /></svg>
            <span>{message}</span>
          </label>
          <style jsx>{styles}</style>
        </React.Fragment>);
    }
    return (
      <div className="box">
        <input type="file" name={name} id={id} className="inputFile" ref={(input) => { this.fileUpload = input; }} onChange={e => this.handleFile(e)} />
        <svg className="icon-board" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="#4695ef" ><path d="M3.5,3.5 C2.94771525,3.5 2.5,3.94771525 2.5,4.5 L2.5,17.5 C2.5,18.0522847 2.94771525,18.5 3.5,18.5 L15.5,18.5 C16.0522847,18.5 16.5,18.0522847 16.5,17.5 L16.5,4.5 C16.5,3.94771525 16.0522847,3.5 15.5,3.5 L3.5,3.5 Z M3.5,1.5 L15.5,1.5 C17.1568542,1.5 18.5,2.84314575 18.5,4.5 L18.5,17.5 C18.5,19.1568542 17.1568542,20.5 15.5,20.5 L3.5,20.5 C1.84314575,20.5 0.5,19.1568542 0.5,17.5 L0.5,4.5 C0.5,2.84314575 1.84314575,1.5 3.5,1.5 Z M7,0.5 L12,0.5 C12.8284271,0.5 13.5,1.17157288 13.5,2 L13.5,4 C13.5,4.82842712 12.8284271,5.5 12,5.5 L7,5.5 C6.17157288,5.5 5.5,4.82842712 5.5,4 L5.5,2 C5.5,1.17157288 6.17157288,0.5 7,0.5 Z M6.9761486,10.5542814 C6.63845919,10.2324554 6.09095647,10.2324554 5.75326706,10.5542814 C5.41557765,10.8761075 5.41557765,11.3978906 5.75326706,11.7197167 L8.67059538,14.5 L13.2467329,10.192519 C13.5844224,9.87069299 13.5844224,9.34890987 13.2467329,9.02708382 C12.9090435,8.70525777 12.3615408,8.70525777 12.0238514,9.02708382 L8.67059538,12.1691296 L6.9761486,10.5542814 Z" /></svg>
        <label className="filename" htmlFor={id}>
          <span>{this.fileUpload.files[0].name}</span>
        </label>

        <svg className="icon-remove" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="#DCDCE4" onClick={e => this.handleRemove(e)} > <path d="M8.62132034,6.5 L12.5104076,2.6109127 C13.0961941,2.02512627 13.0961941,1.0753788 12.5104076,0.48959236 C11.9246212,-0.0961940777 10.9748737,-0.0961940777 10.3890873,0.48959236 L6.5,4.37867966 L2.6109127,0.48959236 C2.02512627,-0.0961940777 1.0753788,-0.0961940777 0.48959236,0.48959236 C-0.0961940777,1.0753788 -0.0961940777,2.02512627 0.48959236,2.6109127 L4.37867966,6.5 L0.48959236,10.3890873 C-0.0961940777,10.9748737 -0.0961940777,11.9246212 0.48959236,12.5104076 C1.0753788,13.0961941 2.02512627,13.0961941 2.6109127,12.5104076 L6.5,8.62132034 L10.3890873,12.5104076 C10.9748737,13.0961941 11.9246212,13.0961941 12.5104076,12.5104076 C13.0961941,11.9246212 13.0961941,10.9748737 12.5104076,10.3890873 L8.62132034,6.5 Z" /> </svg>

        <style jsx>{styles}</style>
      </div>
    );
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
