import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CameraIcon, TrashIcon } from 'grommet/components/icons';
import classnames from 'classnames';

import { avatarCircle, fileInput } from './styles';
import { Button } from '../../';

export default class AvatarPicker extends Component {
  handleChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const blob = new Blob([e.target.result], { type: 'image/jpg' });
        this.props.onChange(blob);
      };

      reader.readAsArrayBuffer(event.target.files[0]);
    }
  };

  handleRemove = (event) => {
    event.preventDefault();
    event.stopPropaganation();

    this.avatar.value = null;
    this.props.onChange();
  };

  render() {
    const {
      id, name, src, squared,
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
            id={id}
            type="file"
            name={name}
            className="file-input"
            ref={(input) => {
              this.avatar = input;
            }}
            onChange={this.handleChange}
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
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  squared: PropTypes.bool,
};

AvatarPicker.defaultProps = {
  name: 'input-avatar',
  squared: false,
};
