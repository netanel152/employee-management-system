import axios from "axios";
import { api } from "../utils";

const getAllManagersContent = () => {
  return axios.get(api + "Managers");
};

export default {
  getAllManagersContent,
};
