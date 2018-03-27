import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { FormPreviousLinkIcon, FormNextLinkIcon } from 'grommet/components/icons/base';
import style from './styles';

export default class Paginator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      offset: 0,
      pageCount: 0,
      perPage: 0,
    };
  }

  componentDidMount() {
    this.generateData();
  }

  // This function should go away as soon as backend server come to life:
  generateData = () => {
    const comments = [];
    const count = 500;
    const { perPage } = this.props;

    for (let i = 0; i < count; i += 1) {
      comments.push({ comment: `This is the line ${i}` });
    }
    this.setState({ data: comments, pageCount: Math.ceil(count / perPage), perPage });
  }

  DataList = (state) => {
    const { data, offset, perPage } = state;
    const r = data.slice(offset * perPage, (offset + 1) * perPage);
    return (
      <div>
        <ul className="dataitems">
          {r.map(item => (
            <li key={item.comment} className="dataitems__item">
              {item.comment}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  handlePageClick = (data) => {
    const { selected } = data;
    this.setState({ offset: selected });
    this.props.onChangePage(selected + 1);
  };

  render() {
    const { pageCount, offset } = this.state;
    const { perPage, marginPagesDisplayed, pageRangeDisplayed } = this.props;
    return (
      <div className="paginator">
        <b>Total pages: {pageCount}. </b>
        <b>Items per Page (props): {perPage}. </b>
        <b>Current Page (offset): {offset + 1}</b>
        {this.DataList(this.state)}
        <ReactPaginate
          previousLabel={<FormPreviousLinkIcon size="small" />}
          nextLabel={<FormNextLinkIcon size="small" />}
          breakLabel="..."
          e="break-me"
          pageCount={this.state.pageCount}
          marginPagesDisplayed={marginPagesDisplayed}
          pageRangeDisplayed={pageRangeDisplayed}
          onPageChange={this.handlePageClick}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
        />
        <style>{style}</style>
      </div>
    );
  }
}

Paginator.propTypes = {
  perPage: PropTypes.number,
  marginPagesDisplayed: PropTypes.number,
  pageRangeDisplayed: PropTypes.number,
  onChangePage: PropTypes.func,
};

Paginator.defaultProps = {
  perPage: 10,
  marginPagesDisplayed: 2,
  pageRangeDisplayed: 4,
  onChangePage: () => {},
};
