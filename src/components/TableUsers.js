import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser } from "../services/UserService";
import ReactPaginate from "react-paginate";
import ModelAddNew from "./ModelAddNew";
import ModelEditUser from "./ModelEditUser";
import ModelConfirm from "./ModelConfirm";
import "./TableUsers.scss";
import _ from "lodash";

const TableUsers = (props) => {
  const [listUsers, setListUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [isShowModelAddNew, setIsShowModelAddNew] = useState(false);
  const [isShowModelEdit, setIsShowModelEdit] = useState(false);
  const [isShowModelDelete, setIsShowModelDelete] = useState(false);

  const [dataUserEdit, setDataUserEdit] = useState({});
  const [dataUserDelete, setDataUserDelete] = useState({});

  const [sortBy, setSortBy] = useState("asc");
  const [sortField, setSortField] = useState("");

  const handleClose = () => {
    setIsShowModelAddNew(false);
    setIsShowModelEdit(false);
    setIsShowModelDelete(false);
  };

  const handleUpdateUsers = (user) => {
    setListUsers([user, ...listUsers]);
  };

  const handleEditUser = (user) => {
    setDataUserEdit(user);
    setIsShowModelEdit(true);
  };

  const handleDeleteUser = (user) => {
    setDataUserDelete(user);
    setIsShowModelDelete(true);
  };

  const handleEditUserFromModal = (user) => {
    let cloneListUsers = _.cloneDeep(listUsers);
    let index = listUsers.findIndex((item) => item.id === user.id);
    cloneListUsers[index].first_name = user.first_name;
    setListUsers(cloneListUsers);
  };

  const handleDeleteUserFromModel = (user) => {
    let cloneListUsers = _.cloneDeep(listUsers);
    cloneListUsers = cloneListUsers.filter((item) => item.id !== user.id);
    setListUsers(cloneListUsers);
  };

  useEffect(() => {
    // Call API
    getUsers();
  }, []);

  const getUsers = async (page) => {
    let res = await fetchAllUser(page);
    if (res && res.data) {
      setTotalUsers(res.total);
      setTotalPages(res.total_pages);
      setListUsers(res.data);
    }
  };

  const handlePageClick = (event) => {
    getUsers(+event.selected + 1);
  };

  const handleSort = (sortBy, sortField) => {
    setSortBy(sortBy);
    setSortField(sortField);
    let cloneListUsers = _.cloneDeep(listUsers);
    cloneListUsers =  _.orderBy(cloneListUsers, [sortField], [sortBy]);
    setListUsers(cloneListUsers);
  }

  return (
    <>
      <div className="my-3 add-new">
        <span>
          <b>List users: </b>
        </span>
        <button
          className="btn btn-success btn-hover"
          onClick={() => setIsShowModelAddNew(true)}
        >
          Add new user
        </button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <div className="sort-header">
                <span>Id</span>
                <div>
                  <i className="fa-solid fa-arrow-down" onClick={() => handleSort("desc", "id")}></i>
                  <i className="fa-solid fa-arrow-up" onClick={() => handleSort("asc", "id")}></i>
                </div>
              </div>
            </th>
            <th>Email</th>
            <th>
              <div className="sort-header">
                <span>First Name</span>
                <div>
                  <i className="fa-solid fa-arrow-down" onClick={() => handleSort("desc", "first_name")}></i>
                  <i className="fa-solid fa-arrow-up" onClick={() => handleSort("asc", "first_name")}></i>
                </div>
              </div>
            </th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`user-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => handleEditUser(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteUser(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
      <ModelAddNew
        show={isShowModelAddNew}
        handleClose={handleClose}
        handleUpdateUsers={handleUpdateUsers}
      />
      <ModelEditUser
        show={isShowModelEdit}
        handleClose={handleClose}
        dataUserEdit={dataUserEdit}
        handleEditUserFromModal={handleEditUserFromModal}
      />
      <ModelConfirm
        show={isShowModelDelete}
        handleClose={handleClose}
        dataUserDelete={dataUserDelete}
        handleDeleteUserFromModel={handleDeleteUserFromModel}
      />
    </>
  );
};

export default TableUsers;
