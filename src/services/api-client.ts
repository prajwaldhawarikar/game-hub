import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1b650a7253234b1e8d4e25f08899aaab",
  },
});
