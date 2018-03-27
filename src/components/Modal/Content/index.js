import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from 'grommet/components/icons/base/Close';
import { Motion, spring } from 'react-motion';

import { close, modal } from './styles';

export default class Content extends Component {
  render() {
    const { onClose } = this.props;

    return (
      <Fragment>
        <Motion
          defaultStyle={{ transform: 30, opacity: 0 }}
          style={{
            transform: spring(0, { stiffness: 150, damping: 40 }),
            opacity: spring(1, { stiffness: 150, damping: 40 }),
          }}
        >
          {({ transform, opacity }) => (
            <div className="modal" style={{ transform: `translateX(${transform}px)`, opacity }}>
              <button className="close" onClick={onClose}>
                <CloseIcon />
              </button>
              <div className="modal__content">{this.props.children}</div>
            </div>
          )}
        </Motion>

        <style jsx>{modal}</style>
        <style>{close}</style>
      </Fragment>
    );
  }
}

Content.propTypes = {
  onClose: PropTypes.func.isRequired,
};
