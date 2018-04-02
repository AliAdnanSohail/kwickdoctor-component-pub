import React, { Component } from 'react';
import ValidationForm from 'react-validation/build/form';

export default class Form extends Component {
  render() {
    const { children } = this.props;

    return <ValidationForm {...this.props}>{children}</ValidationForm>;
  }
}
