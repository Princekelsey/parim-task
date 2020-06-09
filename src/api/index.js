import axios from "axios";

const url =
  "https://wozmx9dh26.execute-api.eu-west-1.amazonaws.com/api/holidays";

const Server = {
  getAllCalenderEvents: async (requestBody) => {
    return await axios.post(url, requestBody);
  },
};

export default Server;
