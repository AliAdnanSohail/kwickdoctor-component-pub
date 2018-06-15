import React, { Component } from 'react';
import classnames from 'classnames';
import { CameraIcon, TrashIcon } from 'grommet/components/icons';
import PropTypes from 'prop-types';

import { avatarCircle, fileInput } from './styles';
import { Button } from '../../';

export default class AvatarPicker extends Component {
  constructor(props) {
    super(props);

    this.state = { avatar: {} };
  }

  handleChange = (event) => {
    const { input } = this.props;

    this.setState({ avatar: event.target.files[0] });

    input.onChange(event.target.files[0]);
  };

  handleRemove = (event) => {
    const { input } = this.props;

    event.preventDefault();

    input.onChange(null);
    this.setState({ avatar: '' });
  };

  render() {
    const {
      borderRadius,
      containerClassName,
      id,
      input: { value, ...inputProps },
      resetKey,
      size,
    } = this.props;

    let src = 'none';

    if (this.state.avatar.name) {
      src = URL.createObjectURL(this.state.avatar);
    }

    const avatarContainer = classnames('avatar', containerClassName);

    const avatarStyle = {
      backgroundImage: `url(${src})`,
      borderRadius: `${borderRadius}px`,
      height: `${size}px`,
      width: `${size}px`,
    };

    return (
      <div className={avatarContainer}>

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

          <div className="avatar__thumb" style={avatarStyle}>
            {!(this.state.avatar.name) && <CameraIcon />}

            <div className="avatar__button--remove">
              {(this.state.avatar.name) && (
                <Button onClick={this.handleRemove} icon={<TrashIcon />} size="xs" rounded danger />
              )}
            </div>
          </div>
        </label>

        <style jsx>{avatarCircle}</style>
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
