import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { FormPreviousLinkIcon, FormNextLinkIcon } from 'grommet/components/icons/base';

import style from './styles';

export default class Paginator extends Component {
  render() {
    return (
      <Fragment>
        <ReactPaginate
          {...this.props}
          previousLabel={<FormPreviousLinkIcon size="small" />}
          nextLabel={<FormNextLinkIcon size="small" />}
          breakLabel="..."
          e="break-me"
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
        />

        <style>{style}</style>
      </Fragment>
    );
  }
}

Paginator.propTypes = {
  marginPagesDisplayed: PropTypes.number,
  onPageChange: PropTypes.func,
  pageCount: PropTypes.number,
  pageRangeDisplayed: PropTypes.number,
};

Paginator.defaultProps = {
  marginPagesDisplayed: 2,
  onPageChange: () => {},
  pageCount: 0,
  pageRangeDisplayed: 4,
};
