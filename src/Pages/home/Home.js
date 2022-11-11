import React, { useEffect } from "react";
import EmployeeService from "../../Services/EmployeeService";
import { useDispatch,useSelector } from "react-redux";
import { setAllEmployeesData } from "../../Components/features/EmployeeSlice";

import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const allEmployeesData = useSelector((state) => state.allEmployeesData);
  console.log("allEmployeesData==>", allEmployeesData);
  useEffect(() => {
    getAllEmployee();
  });

  const getAllEmployee = () => {
    EmployeeService.getAllEmployeesContent().then(
      (response) => {
        console.log(response);
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
    <div className="home-container">
      <h1>Employee Management System</h1>
    </div>
  );
};


export default Home;
