import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3330/api",
    headers: {
      "Content-type": "application/json"
    }
  });