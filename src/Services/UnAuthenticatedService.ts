import axios from "axios";

export const someService = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://google.com")
      .then((response) => resolve(response))
      .catch((e) => reject(e));
  });
};
