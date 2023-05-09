import axios from './customize-axios';

const fetchAllUser = (page) => {
  // Call API
  return axios.get(`/api/users?page=${page}`);
};

export { fetchAllUser };
