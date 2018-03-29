import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CloseIcon from 'grommet/components/icons/base/Close';
import Manager from './../Manager';


export default class Toast extends Component {
  componentDidMount = () => {
    const { timeOut } = this.props;
    if (timeOut !== 0) {
      setTimeout(this.requestHide, timeOut);
    }
  };

  closeToast = () => {
    const { onHideClick } = this.props;
    if (onHideClick) {
      onHideClick();
    }
    this.requestHide();
  }

  requestHide = () => {
    const { onRequestHide, id } = this.props;
    if (onRequestHide) {
      onRequestHide();
    }
    Manager.remove(id);
  };

  render() {
    const {
      primary, boxstyle, content,
    } = this.props;
    const classes = classnames('toast-box', { primary }, boxstyle);

    return (
      <div className={classes}>
        <div className="circle" />
        <div className="message">
          {content}
        </div>
        <div className="icons-close">
          <button className="icon" onClick={this.closeToast} >
            <CloseIcon />
          </button>
        </div>
        <div className="clear" />
      </div>
    );
  }
}

Toast.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  boxstyle: PropTypes.string,
  onHideClick: PropTypes.func,
  timeOut: PropTypes.number,
  onRequestHide: PropTypes.func,
};

Toast.defaultProps = {
  primary: false,
  boxstyle: 'rectangle-22',
  onHideClick: null,
  timeOut: 5000,
  onRequestHide() {},
};
