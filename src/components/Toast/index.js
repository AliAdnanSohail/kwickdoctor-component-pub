import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

export default class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
    };
  }

  closeToast = () => {
    this.setState({
      showToast: false,
    });
    this.props.onHideClick('Toast hidden');
  }

  openToast = () => {
    this.setState({
      showToast: true,
    });
    this.props.onShowClick('Toast shown');
  }


  render() {
    const { primary, boxstyle } = this.props;
    const classes = classnames('box', { primary }, boxstyle);

    return (
      <React.Fragment>
        <button onClick={this.openToast} style={{ marginBottom: 20 }}>Show Toast</button>
        { this.state.showToast &&
        <div className={classes}>
          <div className="circle" />
          <div className="message">
            {this.props.children}
          </div>
          <div className="icons-close">
            <button className="icon" onClick={this.closeToast} />
          </div>
          <style jsx>{styles}</style>
        </div>
        }
      </React.Fragment>
    );
  }
}

Toast.propTypes = {
  primary: PropTypes.bool,
  boxstyle: PropTypes.string,
  onHideClick: PropTypes.func,
  onShowClick: PropTypes.func,
};

Toast.defaultProps = {
  primary: false,
  boxstyle: 'rectangle-22',
  onHideClick: null,
  onShowClick: null,
};
