import React, { Component } from 'react';
import renderer from 'react-test-renderer';

import { FilePicker } from '../src';

class FilePickerWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = { fileName: undefined };
  }

  handleChange = (file, fileName) => {
    this.setState({ fileName });
    this.props.onChange(file, fileName);
  };

  render() {
    const { id, name, placeholder } = this.props;
    const { fileName } = this.state;

    return (
      <FilePicker
        id={id}
        fileName={fileName}
        name={name}
        placeholder={placeholder}
        onChange={this.handleChange}
      />
    );
  }
}

it('renders correctly', () => {
  const element = renderer
    .create(<FilePickerWrapper id="file-input" name="name" placeholder="Upload license" />)
    .toJSON();

  expect(element).toMatchSnapshot();
});
