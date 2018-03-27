import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

export default class AvatarPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
  }

  handleUpload(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ image: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    this.props.onChange(event);
  }

  handleRemove(event) {
    this.setState({ image: null });
    this.fileUpload.value = null;
    this.props.onChange(event);
  }

  handleEdit(event) {
    this.fileUpload.click();
    this.props.onChange(event);
  }

  render() {
    const {
      id, name,
    } = this.props;

    const defaultImage = 'data:image/png;base64,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';
    if (this.state.image == null) {
      return (
        <div className="container">
          <label className="avatar-container" htmlFor={id} aria-label="Edit image">
            <input type="file" name={name} id={id} className="inputFile" ref={(input) => { this.fileUpload = input; }} onChange={e => this.handleUpload(e)} />
            <img className="user" alt="" src={this.state.image == null ? defaultImage : this.state.image} />
          </label>
          <style jsx>{styles}</style>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="icon-trash">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 21" fill="#ffffff" onClick={e => this.handleRemove(e)} >
            <path d="M6.5,4 C6.5,2.34314575 7.84314575,1 9.5,1 L11.5,1 C13.1568542,1 14.5,2.34314575 14.5,4 L17.5,4 C18.0522847,4 18.5,4.44771525 18.5,5 L18.5,6 L17.4251093,6 L16.5498059,17.2330598 C16.4281127,18.7947891 15.1253359,20 13.5588724,20 L7.4411276,20 C5.87466413,20 4.5718873,18.7947891 4.4501941,17.2330598 L3.57489075,6 L2.5,6 L2.5,5 C2.5,4.44771525 2.94771525,4 3.5,4 L6.5,4 Z M14.5,6 L6.5,6 L5.58095341,6 L6.44414977,17.0776866 C6.48471416,17.598263 6.91897311,18 7.4411276,18 L13.5588724,18 C14.0810269,18 14.5152858,17.598263 14.5558502,17.0776866 L15.4190466,6 L14.5,6 Z M7.75,7 C8.17013768,7 8.51647254,7.32945076 8.53745321,7.74906425 L8.96254679,16.2509357 C8.98222322,16.6444645 8.67915606,16.9794334 8.28562734,16.9991099 C8.27376082,16.9997032 8.26188134,17 8.25,17 C7.82986232,17 7.48352746,16.6705492 7.46254679,16.2509357 L7.03745321,7.74906425 C7.01777678,7.35553553 7.32084394,7.02056656 7.71437266,7.00089013 C7.72623918,7.0002968 7.73811866,7 7.75,7 Z M10.5500002,7 C10.9642138,7 11.3000002,7.33578644 11.3000002,7.75 L11.3000002,16.25 C11.3000002,16.6642136 10.9642138,17 10.5500002,17 C10.1357866,17 9.80000019,16.6642136 9.80000019,16.25 L9.80000019,7.75 C9.80000019,7.33578644 10.1357866,7 10.5500002,7 Z M13.25,7 C13.6440203,7 13.9634369,7.31941659 13.9634369,7.71343691 C13.9634369,7.72531825 13.9631401,7.73719774 13.9625468,7.74906425 L13.5374532,16.2509357 C13.5164725,16.6705492 13.1701377,17 12.75,17 C12.3559797,17 12.0365631,16.6805834 12.0365631,16.2865631 C12.0365631,16.2746817 12.0368599,16.2628023 12.0374532,16.2509357 L12.4625468,7.74906425 C12.4835275,7.32945076 12.8298623,7 13.25,7 Z M11.5,3 L9.5,3 C8.94771525,3 8.5,3.44771525 8.5,4 L12.5,4 C12.5,3.44771525 12.0522847,3 11.5,3 Z" />
          </svg>
        </div>
        <label className="avatar-container" htmlFor={id} aria-label="Edit image">
          <input type="file" name={name} id={id} className="inputFile" ref={(input) => { this.fileUpload = input; }} onChange={e => this.handleUpload(e)} />
          <img className="user" alt="" src={this.state.image == null ? defaultImage : this.state.image} />
        </label>
        <div className="icon-edit">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 21" fill="#ffffff" htmlFor={id} onClick={e => this.handleEdit(e)} >
            <path d="M18.8831649,2.31296077 C19.7903272,3.21971394 20.3,4.44978071 20.3,5.73241263 C20.3,7.01504456 19.7903272,8.24511133 18.8831536,9.15187578 L9.19303598,18.8365423 C9.07383681,18.9594358 8.91993827,19.0429807 8.74621061,19.0770605 L1.88657307,20.2869488 C1.61615328,20.3351628 1.33924153,20.2481429 1.14501042,20.0539118 C0.950779311,19.8596807 0.863759437,19.5827689 0.911879654,19.3128777 L2.1219074,12.4551541 C2.15213224,12.2846619 2.23429518,12.127672 2.3563585,12.0064565 L12.0446985,2.31271517 C13.9040631,0.45849106 16.8951384,0.42929955 18.7901366,2.22514064 L18.8831649,2.31296077 Z M5.77135137,14.2257338 L13.6660191,6.34131882 L12.0296644,4.70496411 L4.13583601,12.5987925 L5.77135137,14.2257338 Z M2.77437076,18.4218506 L6.85976786,17.6956544 L3.50056695,14.3364535 L2.77437076,18.4218506 Z M16.5021639,9.16666009 L14.8655681,7.53006433 L6.97021247,15.42542 L8.60314247,17.0733703 L16.5021639,9.16666009 Z M17.6189305,3.56711286 C16.4111996,2.36205095 14.4642036,2.33564864 13.2303115,3.50161623 L13.215806,3.5161217 L17.6796303,7.97008124 L17.6913045,7.95840709 C18.8573167,6.71571126 18.8256079,4.77112352 17.6189305,3.56711286 Z" />
          </svg>
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

AvatarPicker.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

AvatarPicker.defaultProps = {
  name: 'input-avatar',
};
