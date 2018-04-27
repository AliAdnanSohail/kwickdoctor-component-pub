import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';
import { checkA11y } from '@storybook/addon-a11y';
import { Icons } from '../src';

const getIconsArray = pred => (Object.values(Icons).filter(icon => pred(icon)));

const baseIconsArray = getIconsArray(icon => Object.getOwnPropertyDescriptors(icon).name.value === 'Icon');
const otherIconsArray = getIconsArray(icon => Object.getOwnPropertyDescriptors(icon).name.value !== 'Icon');

const notes = `
  [All icons](http://grommet.io/docs/icon/)
  [All colors](http://grommet.io/docs/color)
`;

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('base', withMarkdownNotes(notes)(() => {
    const sizeProps = {
      label: 'Size',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge'],
      defaultValue: 'medium',
    };

    const typeProps = {
      label: 'Type',
      options: ['control', 'logo', 'status'],
      defaultValue: 'control',
    };

    const colorIndexProps = {
      label: 'ColorIndex',
      options: ['brand', 'accent-2', 'grey-1-a', 'critical', 'warning'],
      defaultValue: 'grey-1-a',
    };

    return (
      baseIconsArray.map(Icon => (
        <Icon
          size={select(sizeProps.label, sizeProps.options, sizeProps.defaultValue)}
          type={select(typeProps.label, typeProps.options, typeProps.defaultValue)}
          colorIndex={select(
            colorIndexProps.label,
            colorIndexProps.options,
            colorIndexProps.defaultValue,
          )}
        />
      ))
    );
  }));

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('other', () => (
    otherIconsArray.map(Icon => <Icon />)
  ));
