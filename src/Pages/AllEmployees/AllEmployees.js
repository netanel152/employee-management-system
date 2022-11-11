import React, { useEffect } from "react";
import EmployeeService from "../../Services/EmployeeService";
import TableComponent from "../../Components/table/TableComponent";
import { useDispatch } from "react-redux";
import { setAllEmployeesData } from "../../Components/features/EmployeeSlice";

const AllEmployees = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllEmployee();
  });

  const getAllEmployee = () => {
    EmployeeService.getAllEmployeesContent().then(
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
        console.log("employeeArray==>", employeeArray);
        if (employeeArray !== null || employeeArray !== undefined) {
          dispatch(setAllEmployeesData(employeeArray));
        }
      },
      (error) => {
        const _dataList =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch(setAllEmployeesData(_dataList));
      }
    );
  };

  return (
    <div className="all-employees-data-container">
      <h1>All Employees</h1>
      <TableComponent data={props.AllEmployees} />
    </div>
  );
};


export default AllEmployees;
