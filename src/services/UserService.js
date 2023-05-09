import axios from './customize-axios';

const fetchAllUser = () => {
  // Call API
  return axios.get("/api/users?page=1");
};

export { fetchAllUser };
