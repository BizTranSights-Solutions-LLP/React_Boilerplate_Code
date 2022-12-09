import axios from "axios";

axios.defaults.headers.common["header1"] = "value"; // for all requests

export const someService = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://google.com")
      .then((response) => resolve(response))
      .catch((e) => reject(e));
  });
};
