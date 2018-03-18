import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import { action } from '@storybook/addon-actions';

import styles from './styles';

export default class ButtonGroup extends Component {
  render() {
  //  const { value } = this.props;
    const {
      buttons, primary,
    } = this.props;
    const classes = classnames(
      'button-group',
      { 'button-group-primary': primary },
    );

    const children = buttons.map(button =>
      <button key={button.id} className="button" onClick={button.onClick}>{button.content}</button>);

    return (
      <div className={classes}>
        { children }
        <style jsx global>{styles}</style>
        {/* using global scope above, cant pass jsx classes to children generated with .map */}
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  primary: PropTypes.bool,
  buttons: PropTypes.arrayOf(PropTypes.object),
};

ButtonGroup.defaultProps = {
  buttons: [
    { id: 'bv1', content: 'button 1', onClick: () => { console.log('link1'); } },
    { id: 'bv2', content: 'button 2', onClick: () => { console.log('link2'); } },
    { id: 'bv3', content: 'button 3', onClick: () => { console.log('link3'); } },
    { id: 'bv4', content: 'button 4', onClick: () => { console.log('link4'); } },
  ],
  primary: false,
};
