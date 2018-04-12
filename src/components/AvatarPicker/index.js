import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EditIcon, CameraIcon, TrashIcon } from 'grommet/components/icons';

import { avatarMedium, avatarBig, fileInput } from './styles';
import { Button } from '../../';

export default class AvatarPicker extends Component {
  constructor(props) {
    super(props);

    this.state = { image: null };
  }

  handleRemove = (event) => {
    this.setState({ image: null });

    this.fileUpload.value = null;

    this.props.onChange(event);
  };

  handleUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.setState({ image: e.target.result });
      };

      reader.readAsDataURL(event.target.files[0]);
    }

    this.props.onChange(event);
  };

  handleEdit = (event) => {
    this.fileUpload.click();

    this.props.onChange(event);
  };

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
  }

  renderMedium= () => {
    const { id, name } = this.props;
    const { image } = this.state;

    const thumbStyle = {
      backgroundImage: image ? `url(${image})` : 'none',
    };

    return (
      <div className="avatar">
        <div className="avatar__button">
          {image && (
            <Button onClick={this.handleRemove} icon={<TrashIcon />} size={32} rounded danger />
          )}
        </div>

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

        <div className="avatar__button">
          {image && <Button onClick={this.handleEdit} icon={<EditIcon />} size={32} rounded />}
        </div>

        <style jsx>{avatarMedium}</style>
        <style jsx>{fileInput}</style>
      </div>
    );
  }

  render() {
    const { size } = this.props;

    switch (size) {
    case 'big':
      return this.renderBig();
    default:
      return this.renderMedium();
    }
  }
}

AvatarPicker.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['medium', 'big', 'small']),
};

AvatarPicker.defaultProps = {
  name: 'input-avatar',
  size: 'medium',
};
