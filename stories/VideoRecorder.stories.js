import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Button, VideoPlayer, VideoRecorder } from '../src';
import results from '../.jest-test-results.json';

class VideRecorderWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = { src: undefined };
  }

  handleStop = (video) => {
    this.setState({ src: window.URL.createObjectURL(video) });
  };

  handleDownload = () => {
    const { src } = this.state;

    const a = document.createElement('a');

    a.href = src;
    a.download = 'video';
    a.click();

    window.URL.revokeObjectURL(src);
  };

  handleReset = () => {
    this.setState({ src: undefined });
  };

  render() {
    const { limit } = this.props;
    const { src } = this.state;

    return (
      <Fragment>
        {src ? (
          <div style={{ display: 'grid', gridGap: '16px' }}>
            <VideoPlayer src={src} />
            <Button onClick={this.handleDownload}>download</Button>
            <Button onClick={this.handleReset}>reset</Button>
          </div>
        ) : (
          <VideoRecorder limit={limit} onStop={this.handleStop} src={src} />
        )}
      </Fragment>
    );
  }
}

storiesOf('Video Recorder', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('VideoRecorder'))
  .addDecorator(getStory => (
    <div
      style={{
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {getStory()}
    </div>
  ))
  .add('default', () => <VideRecorderWrapper limit={number('limit', 0)} />);
