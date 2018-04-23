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
    this.avatar.value = null;
    this.props.onChange();
    event.stopPropaganation();
    event.preventDefault();
  };

<<<<<<< HEAD
  render() {
    const {
      id,
      name,
      src,
      squared,
    } = this.props;
    const thumbStyle = {
      backgroundImage: src ? `url(${src})` : 'none',
    };
    const classes = classnames(
      'avatar__thumb',
      { 'avatar__thumb--circle': !squared },
    );
    const avatar = classnames(
      'avatar',
      { 'avatar--circle': !squared },
    );
=======
  renderBig = () => {
    const { id, name } = this.props;
    const { image } = this.state;

    const thumbStyle = {
      backgroundImage: image ? `url(${image})` : 'none',
    };

    return (
      <div className="avatar">
        <label className="avatar__container" htmlFor={id} aria-label="Edit image">
          <input
            id={id}
            type="file"
            name={name}
            className="file-input"
            ref={(input) => {
              this.fileUpload = input;
            }}
            onChange={this.handleUpload}
          />

          <div className="avatar__thumb" style={thumbStyle}>
            {!image && <CameraIcon />}
          </div>
        </label>

        {image && (
          <div className="avatar__button-container">
            <Button onClick={this.handleRemove} icon={<TrashIcon />} size={90} rounded danger />
            <Button onClick={this.handleEdit} icon={<EditIcon />} size={90} rounded />
          </div>
        )}

        <style jsx>{avatarBig}</style>
        <style jsx>{fileInput}</style>
      </div>
    );
  };

  renderMedium = () => {
    const { id, name } = this.props;
    const { image } = this.state;

    const thumbStyle = { backgroundImage: image ? `url(${image})` : 'none' };

    const classes = classnames('avatar__thumb', 'avatar__thumb_medium');

>>>>>>> a092ab6161ae70b89a47cb0e6ae48fcec9c354d4
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
<<<<<<< HEAD
=======
  };

  render() {
    const { size } = this.props;

    switch (size) {
    case 'big':
      return this.renderBig();
    default:
      return this.renderMedium();
    }
>>>>>>> a092ab6161ae70b89a47cb0e6ae48fcec9c354d4
  }
}

AvatarPicker.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
<<<<<<< HEAD
  squared: PropTypes.oneOf([false, true]),
=======
  size: PropTypes.oneOf(['big', 'small', '']),
>>>>>>> a092ab6161ae70b89a47cb0e6ae48fcec9c354d4
};

AvatarPicker.defaultProps = {
  name: 'input-avatar',
<<<<<<< HEAD
  squared: false,
=======
  size: '',
>>>>>>> a092ab6161ae70b89a47cb0e6ae48fcec9c354d4
};
