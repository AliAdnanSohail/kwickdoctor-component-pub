import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CloseIcon, DocumentIcon, UploadIcon } from 'grommet/components/icons/base';

import styles from './styles';
import { Button } from '../';

export default class FilePicker extends Component {
  constructor(props) {
    super(props);

    this.state = { filename: '' };
  }

  handleChange = (event) => {
    const {
      input: { onChange },
    } = this.props;

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      const { name, type } = event.target.files[0];

      reader.onload = (e) => {
        const blob = new Blob([e.target.result], { type });

        this.setState({ filename: name });
        onChange(blob);
      };

      reader.readAsArrayBuffer(event.target.files[0]);
    }
  };

  handleRemove = (event) => {
    event.stopPropagation();
    event.preventDefault();

    this.input.value = '';
    this.props.onChange();
  };

  render() {
    const { id, input, placeholder } = this.props;

    const { filename } = this.state;

    const classes = classnames('upload-file', { 'upload-file--selected': input && input.value });

    return (
      <Fragment>
        <label className={classes} htmlFor={id}>
          <div className="upload-file__label-container">
            {input && input.value ? <DocumentIcon /> : <UploadIcon />}

            <div className="upload-file__label">{filename || placeholder}</div>
          </div>

          {input &&
            input.value && (
            <Button
              className="upload-file__close-icon"
              flat
              icon={<CloseIcon />}
              onClick={this.handleRemove}
              rounded
              size="xs"
            />
          )}

          <input
            {...input}
            className="input-file"
            id={id}
            onChange={this.handleChange}
            type="file"
          />
        </label>

        <style jsx>{styles}</style>
      </Fragment>
    );
  }
}

FilePicker.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

FilePicker.defaultProps = {
  placeholder: 'Upload file',
};
