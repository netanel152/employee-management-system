import axios from "axios";
import { api } from "../utils";

const getAllEmployeesContent = () => {
  return axios.get(api + "Employees");
};

const addNewEmployee = () => {
  return axios.post(api + "add_new_employee");
};

export default {
  getAllEmployeesContent,
  addNewEmployee,
};
