import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "70a8f78d471e41158a61c293816003ab",
  },
});
