import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { FileViewer } from '../src';
import results from '../.jest-test-results.json';

const srcImg = { name: 'testpdf.jpg', src: 'http://via.placeholder.com/600x850' };
const srcPdf = {
  name: 'testimage.pdf',
  src: 'http://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
};

storiesOf('FileViewer', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('FileViewer'))
  .addDecorator(getStory => (
    <div style={{ padding: '24px', backgroundColor: '#666666', height: '500px' }}>{getStory()}</div>
  ))
  .add('simple img viewer', () => (
    <FileViewer onClick={action('clicked')} title={text('title', 'Hello!')} file={srcImg} />
  ))
  .add('simple PDF viewer', () => (
    <FileViewer onClick={action('clicked')} title={text('title', 'Hello!')} file={srcPdf} />
  ));
