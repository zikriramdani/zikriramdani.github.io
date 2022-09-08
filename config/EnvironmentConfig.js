const dev = {
  API_ENDPOINT_URL: "https://dummyjson.com" //"https://api.github.com/users/zikriramdani",

};

const prod = {
  API_ENDPOINT_URL: "https://dummyjson.com" //"https://api.github.com/users/zikriramdani",
};

const test = {
  API_ENDPOINT_URL: "https://api.test.com",
};

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case "development":
      return dev;
    case "production":
      return prod;
    case "test":
      return test;
    default:
      break;
  }
};

export const env = getEnv();