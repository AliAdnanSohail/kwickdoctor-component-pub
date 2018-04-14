import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import css from 'styled-jsx/css';
import ExpandIcon from 'grommet/components/icons/base/Expand';

import styles from './styles';

export default class RecordButton extends Component {
  render() {
    return (
      <button className={`fullscreen_button ${this.props.className}`} onClick={this.props.onClick}>
        <ExpandIcon className="expand-icon" /> Fullscreen
        <style>{styles}</style>
      </button>
    );
  }
}

