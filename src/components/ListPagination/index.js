import React, { Component, Fragment } from "react";

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

import Icon from "@material-ui/core/Icon";

class ListPagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.pages !== props.pages) {
      const pages = [];
      const totalItems = props.totalItems;
      const itemsPerPage = props.itemsPerPage;

      const ceil = Math.ceil(totalItems / itemsPerPage);
      for (let i = 1; i <= ceil; i++) {
        pages.push(i);
      }
      return {
        pages
      };
    }
    return null;
  }

  render() {
    if (this.props.totalItems === 0) {
      return <Fragment />;
    }
    return (
      <>
        <Pagination className="listPagination">
          <PaginationItem>
            <PaginationLink
              href={this.props.href}
              id="pagination-prev"
              className={
                this.props.currentPage === 1
                  ? "listPagination__item btnDisabled"
                  : "listPagination__item"
              }
              onClick={
                this.props.currentPage > 1
                  ? () => this.props.paginate(this.props.currentPage - 1)
                  : () => console.log("no more prev page available")
              }
            >
              <Icon>arrow_back</Icon>
            </PaginationLink>
          </PaginationItem>

          {this.state.pages.map(num => (
            <PaginationItem key={num}>
              <PaginationLink
                // href={this.props.href}
                className={
                  num !== this.props.currentPage
                    ? "listPagination__item"
                    : "listPagination__item pagerActive"
                }
                onClick={() => this.props.paginate(num)}
              >
                {num}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationLink
              href={this.props.href}
              id="pagination-next"
              className={
                this.props.currentPage === this.state.pages.length
                  ? "listPagination__item btnDisabled"
                  : "listPagination__item"
              }
              onClick={
                this.props.currentPage < this.state.pages.length
                  ? () => this.props.paginate(this.props.currentPage + 1)
                  : () => console.log("no more next page available")
              }
            >
              <Icon>arrow_forward</Icon>
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </>
    );
  }
}

export default ListPagination;
