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
    this.props.onChange(e.target.value);
  }


  render() {
  //  const { value } = this.props;
    const {
      buttons, primary, groupLabel,
    } = this.props;
    const classes = classnames(
      'radio-button-group',
      { primary },
    );

    const common = groupLabel.toLowerCase() || 'group';


    const children = buttons.map(button => (
      <React.Fragment key={button.value}>
        <label className={this.state.selectedOption === button.value ? 'button active' : 'button'} htmlFor={`${button.value}-${common}`}>
          {button.label || button.value}
          <input
            type="radio"
            name={common}
            id={`${button.value}-${common}`}
            value={button.value}
            checked={this.state.selectedOption === button.value}
            onChange={e => this.handleChange(e)}
          />
        </label>
        <style jsx >{styles}</style>
      </React.Fragment>
    ));

    return (
      <div>
        <style jsx >{styles}</style>
        <fieldset>
          {groupLabel.length > 0 && <legend>{ groupLabel }:</legend>}
          <div className={classes}>
            { children }
          </div>
        </fieldset>
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  primary: PropTypes.bool,
  buttons: PropTypes.arrayOf(PropTypes.object),
  groupLabel: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

ButtonGroup.defaultProps = {
  buttons: [
    { value: 'bv1', label: 'button 1' },
    { value: 'bv2', label: 'button 2' },
  ],
  primary: false,
  groupLabel: '',
};
