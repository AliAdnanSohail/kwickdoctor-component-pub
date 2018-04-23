import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { FilePicker } from '../src';
import results from '../.jest-test-results.json';

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

storiesOf('File Input', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('FilePicker'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => (
    <FilePickerWrapper
      id={text('id', 'file-input')}
      name={text('name', 'name')}
      placeholder={text('placeholder', 'Upload license')}
      onChange={action('onChange')}
    />
  ));
