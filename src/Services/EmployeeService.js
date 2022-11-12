import axios from "axios";
import { api } from "../utils";

const getAllEmployeesContent = () => {
  return axios.get(api + "employees");
};

const getAllManagersContent = () => {
  return axios.get(api + "managers");
};

const addNewEmployee = (newEmployee) => {
  return axios.post(api + "add_new_employee", {
    employeeId: newEmployee.employeeId,
    employeeName: newEmployee.employeeName,
    employeeRole: newEmployee.employeeRole,
    managerName: newEmployee.managerName,
  });
};

const editEmployeeByObject = (employee) => {
  axios.post(api + "edit_employee", {
    employeeId: employee.employeeId,
    employeeName: employee.employeeName,
    employeeRole: employee.employeeRole,
    managerName: employee.managerName,
  });
};

const deleteEmployeeById = (employeeId) => {
  axios.post(api + "delete_employee/" + employeeId);
};

export default {
  getAllEmployeesContent,
  addNewEmployee,
  deleteEmployeeById,
  editEmployeeByObject,
  getAllManagersContent,
};
