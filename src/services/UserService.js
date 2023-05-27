import axios from './customize-axios';

const fetchAllUser = (page) => {
  // Call API
  return axios.get(`/api/users?page=${page}`);
};

const postCreateUser = (name, job) => {
  return axios.post("/api/users", {name: name, job: job});
}

const putUpdateUser = (name, job) => {
  return axios.put("/api/users/2", {name: name, job: job});
}

export { fetchAllUser, postCreateUser, putUpdateUser };
