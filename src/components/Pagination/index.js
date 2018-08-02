import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import ReactPaginate from 'react-paginate';

import style from './styles';

export default class Pagination extends Component {
  render() {
    return (
      <Fragment>
        <ReactPaginate
          {...this.props}
          previousLabel={<i className="material-icons">chevron_left</i>}
          nextLabel={<i className="material-icons">chevron_right</i>}
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

Pagination.propTypes = {
  marginPagesDisplayed: PropTypes.number,
  onPageChange: PropTypes.func,
  pageCount: PropTypes.number,
  pageRangeDisplayed: PropTypes.number,
};

Pagination.defaultProps = {
  marginPagesDisplayed: 2,
  onPageChange: () => {},
  pageCount: 0,
  pageRangeDisplayed: 4,
};
