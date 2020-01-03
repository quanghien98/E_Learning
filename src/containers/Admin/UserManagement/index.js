import React, { Component } from "react";
// import axios from "axios";
// import { connect } from "react-redux";
import {
  getPaginatedUserList,
  deleteUserAccount
} from "../../../actions/user/userActions";

import TableCard from "../../../components/TableCard";
import UserInfo from "../../Admin/UserInfo";
import { Button } from "reactstrap";
import Icon from "@material-ui/core/Icon";
class UserManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUserTable: true,
      currentPage: 1,
      itemsPerPage: 20,
      totalItems: 0,
      totalPages: 0,
      currentItems: []
    };
  }

  // CancelToken = axios.CancelToken;
  // source = this.CancelToken.source();

  // abortController = new AbortController();
  /* -------------- Pagination ------------- */

  setCurrentPage = pageNumber => {
    this.setState({
      currentPage: pageNumber,
      selectedAccount: ""
    });
  };

  /*   getStudentList = (currentPage, itemsPerPage) => {
    getPaginatedUserList(currentPage, itemsPerPage, this.source.token, axios);
  }; */

  componentDidMount() {
    const { currentPage, itemsPerPage } = this.state;
    getPaginatedUserList(currentPage, itemsPerPage).then(data => {
      this.setState({
        totalItems: data.totalCount,
        totalPages: data.totalPages,
        currentItems: data.items
      });
    });
  }

  componentDidUpdate(_prevProps, prevState) {
    const { currentPage, itemsPerPage } = this.state;
    if (prevState.currentPage !== currentPage) {
      getPaginatedUserList(currentPage, itemsPerPage).then(data => {
        this.setState({
          currentItems: data.items
        });
      });
    }
  }

  // componentWillUnmount() {
  //   this.source.cancel();
  // }

  getStudentListRows = () => {
    if (this.state.currentItems === undefined) {
      return null;
    } else {
      let rows = this.state.currentItems.map(item => {
        return {
          col1: item.taiKhoan,
          col2: item.hoTen,
          col3: item.email,
          col4: item.soDT,
          col5: item.tenLoaiNguoiDung
        };
      });
      return rows;
    }
  };

  getUserAccount = account => {
    this.setState({
      selectedAccount: account
    });
  };

  deleteAccount = () => {
    let account = this.state.selectedAccount;
    alert(`Account to be deleted: ${account}`);
    deleteUserAccount(account);
  };

  render() {
    const userHeadings = [
      "account",
      "full name",
      "email",
      "phone",
      "account type id"
    ];

    const userRows = this.getStudentListRows();
    // console.log(userRows);
    // console.log(this.props.users.items);
    const deleteBtn = (
      <Button color="danger" onClick={this.deleteAccount}>
        <Icon>delete</Icon>
      </Button>
    );
    return (
      <div className="adminUsers">
        <div className="adminContainer">
          <div className="adminUsers__list">
            <TableCard
              tableTitle={"User List"}
              paginate={this.setCurrentPage}
              totalItems={this.state.totalItems}
              itemsPerPage={this.state.itemsPerPage}
              currentPage={this.state.currentPage}
              rows={userRows}
              headings={userHeadings}
              getUserAccount={this.getUserAccount}
              selectedAccount={this.state.selectedAccount}
              deleteBtn={deleteBtn}
              isUserTable={this.state.isUserTable}
              // selectCourse={this.selectCourse}
              // isAdding={this.state.isAdding}
            />
          </div>
          <div className="adminUsers__item">
            <UserInfo />
          </div>
        </div>
      </div>
    );
  }
}

/* const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserList: (currentPage, itemsPerPage) => {
      dispatch(getPaginatedUserList(currentPage, itemsPerPage));
    }
  };
}; */
export default UserManagement;
// export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);
