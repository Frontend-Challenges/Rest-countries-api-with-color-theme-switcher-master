const baseURL = "https://restcountries.com/v3.1";

const instance = axios.create({
  baseURL,
});

export default instance;
