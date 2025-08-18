import axios from "axios";

const Instance = axios.create({
  baseURL: "http://localhost:5173", // yaha apna backend ka port dalna hai (frontend ka nahi)
  withCredentials: true,
});

export default Instance;
