import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  responseType: "json",
});

httpClient.interceptors.request.use(
  (request) => {
    /** In dev, intercepts request and logs it into console for dev */
    const token = localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null;
    console.log(token);
    if (token) {
      request.headers["Authorization"] = "Bearer " + token;
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    console.log(response);
    if (response.config) {
      //perform the manipulation here and change the response object
      response.data1 = ["bị troll rồi"];
    }
    return response;
  },
  (error) => {
    return Promise.reject(error.message);
  }
);
export default httpClient;
