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

    this.input.value = null;

    this.props.input.onChange(null);
  };

  render() {
    const {
      id,
      input: { value, ...inputProps },
      resetKey,
      src,
      squared,
    } = this.props;

    const thumbStyle = {
      backgroundImage: src ? `url(${src})` : 'none',
    };

    const classes = classnames('avatar__thumb', { 'avatar__thumb--circle': !squared });
    const avatar = classnames('avatar', { 'avatar--circle': !squared });

    return (
      <div className={avatar}>
        <div className="avatar__button--remove">
          {src && (
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

          <div className={classes} style={thumbStyle}>
            {!src && <CameraIcon />}
          </div>
        </label>

        <style jsx>{avatarCircle}</style>
        <style jsx>{fileInput}</style>
      </div>
    );
  }
}

AvatarPicker.propTypes = {
  id: PropTypes.string.isRequired,
  input: PropTypes.object,
  squared: PropTypes.bool,
};

AvatarPicker.defaultProps = {
  input: {
    onChange: () => {},
    value: '',
  },
  squared: false,
};
