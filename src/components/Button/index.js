import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { children, onClick } = this.props;

    return (
      <button className="button" onClick={onClick}>
        {children}
        <style jsx>{`
          .button {
            border: none;
          }
        `}</style>
      </button>
    );
  }
}
