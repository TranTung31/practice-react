import axios from "axios";

const fetchAllUser = () => {
  // Call API
  return axios.get("https://reqres.in/api/users?page=1");
};

export { fetchAllUser };
