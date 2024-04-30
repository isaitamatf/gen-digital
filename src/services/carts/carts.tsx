import axios from "axios";
import { API_URL } from "../../constants";

export const getCarts = async () => {
  const options = {
    method: "GET",
    url: `${API_URL}/cart`,
    params: {},
  };
  return await axios
    .request(options)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}
