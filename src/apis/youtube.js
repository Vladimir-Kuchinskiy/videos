import axios from "axios";

const KEY = "AIzaSyClMAKMvt_RGOkKtG6Ar8pZoZi9wMreKOA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
