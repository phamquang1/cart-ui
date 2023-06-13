import httpClient from "./httpClient";

export const handleLogin = () => {
  return httpClient.get("/posts");
};
