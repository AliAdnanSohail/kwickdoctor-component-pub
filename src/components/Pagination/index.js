import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import MaterialIcon from 'material-icons-react';

import style from './styles';

export default class Pagination extends Component {
  render() {
    return (
      <Fragment>
        <ReactPaginate
          {...this.props}
          previousLabel={<MaterialIcon icon="chevron_left" />}
          nextLabel={<MaterialIcon icon="chevron_right" />}
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
