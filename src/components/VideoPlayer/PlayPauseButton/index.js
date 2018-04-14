import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import css from 'styled-jsx/css';


import styles from './styles';

export default class RecordButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordStarted: false,
    };
  }

  changeStyle = () => {
    this.setState({ recordStarted: !this.state.recordStarted });
  }

  render() {
    return (
      <div>
        <button className="playpause" >
          <input type="checkbox" value="None" id="playpause" name="check" onClick={this.props.onClick}/>
          <label htmlFor="playpause" tabIndex={1} />
          <style>{styles}</style>
        </button>
      </div>
    );
  }
}

