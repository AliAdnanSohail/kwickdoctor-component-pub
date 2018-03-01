import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { children, onClick, color } = this.props;

    return (
      <button
        className="button"
        style={{ backgroundColor: color }}
        onClick={onClick}
      >
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
