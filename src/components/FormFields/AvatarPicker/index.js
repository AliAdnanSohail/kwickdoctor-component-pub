import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

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
      fetch(`${baseURL}/${value}`, { method: 'GET' })
        .then(response => response.blob())
        .then((avatar) => {
          this.setState({ avatar }, () => {
            onChange(this.state.avatar);
          });
        });
    }

    if (value && value instanceof Blob) {
      this.setState({ avatar: value }, () => {
        onChange(this.state.avatar);
      });
    }
  }

  componentDidUpdate(props) {
    const {
      baseURL,
      input: { value, onChange },
    } = this.props;

    if (value && props.input.value !== value && typeof value === 'string') {
      fetch(`${baseURL}/${value}`, { method: 'GET' })
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

    this.input.value = null;

    onChange(null);
  };

  render() {
    const {
      borderRadius,
      className,
      id,
      input: { value, ...inputProps },
      size,
    } = this.props;
    const { avatar } = this.state;

    const styles = {
      backgroundImage: avatar ? `url(${URL.createObjectURL(avatar)})` : '',
      borderRadius: `${borderRadius}px`,
      height: `${size}px`,
      width: `${size}px`,
    };

    const isSelected = avatar && (avatar instanceof Blob || avatar.name);

    return (
      <label
        aria-label="Edit image"
        className={classnames('avatar', className)}
        htmlFor={id}
        style={styles}
      >
        {isSelected && (
          <div className="avatar__button">
            <Button
              onClick={this.handleRemove}
              icon={<i className="material-icons">delete</i>}
              size="xsmall"
              rounded
              danger
            />
          </div>
        )}

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

        {!isSelected && (
          <i className="material-icons" style={{ fontSize: size / 2 }}>
            photo_camera
          </i>
        )}

        <style jsx>{avatarStyles}</style>
        <style jsx>{fileInput}</style>
      </label>
    );
  }
}

AvatarPicker.propTypes = {
  borderRadius: PropTypes.number,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.string.isRequired,
  input: PropTypes.object,
  size: PropTypes.number,
};

AvatarPicker.defaultProps = {
  borderRadius: 3,
  className: '',
  input: {
    onChange: () => {},
    value: {},
  },
  size: 40,
};
