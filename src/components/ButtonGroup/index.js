import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

export default class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: '' };
  }

  handleChange(e) {
    this.setState({
      selectedOption: e.target.value,
    });
  }

  render() {
  //  const { value } = this.props;
    const {
      buttons, primary,
    } = this.props;
    const classes = classnames(
      'button-group',
      { 'button-group-primary': primary },
    );

    const children = buttons.map(button => (
      <React.Fragment key={button.value}>
        <div className={this.state.selectedOption === button.value ? 'button active' : 'button'}>
          <label htmlFor={button.value}>
            {button.label || button.value}
            <input
              type="radio"
              name={button.value}
              value={button.value}
              checked={this.state.selectedOption === button.value}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <style jsx >{styles}</style>
        </div>
      </React.Fragment>
    ));

    return (
      <div className={classes}>
        { children }
        <style jsx >{styles}</style>
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
    { value: 'bv1', label: 'button 1', onChange: () => { console.log('link1'); } },
    { value: 'bv2', label: 'button 2', onChange: () => { console.log('link2'); } },
    { value: 'bv3', label: 'button 3', onChange: () => { console.log('link3'); } },
    { value: 'bv4', label: 'button 4', onChange: () => { console.log('link4'); } },
  ],
  primary: false,
};
