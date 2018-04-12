import React, { Component, Fragment } from 'react';

import ShortProfileInfoCSS from './styles';

export default class ShortProfileInfo extends Component {
  render() {
    return (
      <Fragment>
        <div className="profile">
          <div className="profile__photo">
            {/* <img src={this.props.img} alt="Avatar" /> */}
          </div>
          <div className="profile__info">
            <div className="profile__name">
              {this.props.name}
            </div>
          </div>
        </div>
        <style>{ShortProfileInfoCSS}</style>
      </Fragment>
    );
  }
}
