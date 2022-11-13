import axios from "axios";
import { api } from "../utils";

export const getAllEmployeesAPI = () => {
  return axios.get(api + "employees").then(
    (response) => {
      let employeeArray = [];
      for (let index = 0; index < response.data.length; index++) {
        employeeArray.push({
          employeeId: response.data[index].employeeId,
          employeeName: response.data[index].employeeName,
          employeeRole: response.data[index].employeeRole,
          managerName: response.data[index].managerName,
        });
      }
      if (employeeArray !== null || employeeArray !== undefined) {
        return employeeArray;
      }
    },
    (error) => {
      const _dataList =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return _dataList;
    }
  );
};

export const getAllManagersAPI = () => {
  return axios.get(api + "managers").then(
    (response) => {
      let managerArray = [];
      for (let index = 0; index < response.data.length; index++) {
        managerArray.push({
          employeeId: response.data[index].employeeId,
          employeeName: response.data[index].employeeName,
          employeeRole: response.data[index].employeeRole,
          managerName: response.data[index].managerName,
        });
      }
      if (managerArray !== null || managerArray !== undefined) {
        return managerArray;
      }
    },
    (error) => {
      const _dataList =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return _dataList;
    }
  );
};

export const addNewEmployeeAPI = (newEmployee) => {
  axios.post(api + "add_new_employee", {
    employeeId: newEmployee.employeeId,
    employeeName: newEmployee.employeeName,
    employeeRole: newEmployee.employeeRole,
    managerName: newEmployee.managerName,
  });
};

export const editEmployeeAPI = async (employee) => {
  await axios.post(api + "edit_employee", {
    employeeId: employee.employeeId,
    employeeName: employee.employeeName,
    employeeRole: employee.employeeRole,
    managerName: employee.managerName,
  });
};

export const deleteEmployeeAPI = (employeeId) => {
  axios.post(api + "delete_employee/" + employeeId);
};
