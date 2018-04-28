import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CameraIcon, TrashIcon } from 'grommet/components/icons';
import classnames from 'classnames';

import { avatarCircle, fileInput } from './styles';
import { Button } from '../../';

export default class AvatarPicker extends Component {
  handleChange = (event) => {
    const { input } = this.props;

    input.onChange(event.target.files[0]);
  };

  handleRemove = (event) => {
    event.preventDefault();

    this.props.input.onChange(null);
  };

  render() {
    const {
      id,
      input: { value, ...inputProps },
      resetKey,
      squared,
      defaultValue,
    } = this.props;

    let src = 'none';

    if (value) {
      src = `url(${URL.createObjectURL(value)})`;
    } else {
      src = `url(${defaultValue})`;
    }

    const classes = classnames('avatar__thumb', { 'avatar__thumb--circle': !squared });
    const avatar = classnames('avatar', { 'avatar--circle': !squared });

    return (
      <div className={avatar}>
        <div className="avatar__button--remove">
          {(value || defaultValue) && (
            <Button onClick={this.handleRemove} icon={<TrashIcon />} size="xs" rounded danger />
          )}
        </div>

        <label className="avatar__container" htmlFor={id} aria-label="Edit image">
          <input
            {...inputProps}
            className="file-input"
            id={id}
            key={resetKey}
            onBlur={() => {}}
            onChange={this.handleChange}
            ref={(input) => {
              this.input = input;
            }}
            type="file"
          />

          <div className={classes} style={{ backgroundImage: src }}>
            {!(value || defaultValue) && <CameraIcon />}
          </div>
        </label>

        <style jsx>{avatarCircle}</style>
        <style jsx>{fileInput}</style>
      </div>
    );
  }
}

AvatarPicker.propTypes = {
  defaultValue: PropTypes.string,
  id: PropTypes.string.isRequired,
  input: PropTypes.object,
  squared: PropTypes.bool,
};

AvatarPicker.defaultProps = {
  defaultValue: '',
  input: {
    onChange: () => {},
    value: '',
  },
  squared: false,
};
