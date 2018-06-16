import React, { Component } from 'react';
import classnames from 'classnames';
import MaterialIcon from 'material-icons-react';
import PropTypes from 'prop-types';

import { avatar as avatarStyles, fileInput } from './styles';
import Button from '../../Button';

export default class AvatarPicker extends Component {
  constructor() {
    super();

    this.state = { avatar: null };
  }

  componentWillMount() {
    const {
      baseURL,
      input: { value, onChange },
    } = this.props;

    if (value && typeof value === 'string') {
      fetch(`${baseURL}${value}`, { method: 'GET' })
        .then(response => response.blob())
        .then((avatar) => {
          this.setState({ avatar }, () => {
            onChange(this.state.avatar);
          });
        });
    }
  }

  componentDidUpdate(props) {
    const {
      baseURL,
      input: { value, onChange },
    } = this.props;

    if (props.input.value !== value && value && typeof value === 'string') {
      fetch(`${baseURL}${value}`, { method: 'GET' })
        .then(response => response.blob())
        .then((avatar) => {
          this.setState({ avatar }, () => {
            onChange(this.state.avatar);
          });
        });
    }
  }

  handleChange = (event) => {
    const {
      input: { onChange },
    } = this.props;

    this.setState({ avatar: event.target.files[0] });

    onChange(event.target.files[0]);
  };

  handleRemove = (event) => {
    const {
      input: { onChange },
    } = this.props;

    event.preventDefault();

    this.setState({ avatar: null });

    onChange(null);
  };

  render() {
    const {
      borderRadius,
      containerClassName,
      id,
      input: { value, ...inputProps },
      size,
    } = this.props;
    const { avatar } = this.state;

    const avatarContainer = classnames('avatar', containerClassName);
    const classes = {
      backgroundImage: `url(${avatar ? URL.createObjectURL(avatar) : ''})`,
      borderRadius: `${borderRadius}px`,
      height: `${size}px`,
      width: `${size}px`,
    };

    const isSelected = avatar && (avatar instanceof Blob || avatar.name);

    return (
      <div className={avatarContainer}>
        <div className="avatar__button--remove">
          {isSelected && (
            <Button
              onClick={this.handleRemove}
              icon={<MaterialIcon icon="delete_outline" color="white" size="50%" />}
              size="xs"
              rounded
              danger
            />
          )}
        </div>

        <label className="avatar__container" htmlFor={id} aria-label="Edit image">
          <input
            {...inputProps}
            className="file-input"
            id={id}
            onBlur={() => {}}
            onChange={this.handleChange}
            ref={(input) => {
              this.input = input;
            }}
            type="file"
          />

          <div className={classes}>
            {!isSelected && <MaterialIcon icon="photo_camera" color="#bbbccd" size="50%" />}
          </div>
        </label>

        <style jsx>{avatarStyles}</style>
        <style jsx>{fileInput}</style>
      </div>
    );
  }
}

AvatarPicker.propTypes = {
  borderRadius: PropTypes.number,
  containerClassName: PropTypes.string,
  id: PropTypes.string.isRequired,
  input: PropTypes.object,
  size: PropTypes.number,
};

AvatarPicker.defaultProps = {
  borderRadius: 3,
  containerClassName: '',
  input: {
    onChange: () => {},
    value: {},
  },
  size: 40,
};
