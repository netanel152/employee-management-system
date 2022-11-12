import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/header/Header";
import Home from "./Pages/Home/Home";
import AllEmployees from "./Pages/AllEmployees/AllEmployees";
import ManagementEmployee from "./Pages/ManagementEmployee/ManagementEmployee";
import Footer from "./Components/footer/Footer";
import "./App.scss";
import EmployeeService from "../src/Services/EmployeeService";
import {
  setAllEmployeesData,
  setAllManagersData,
} from "../src/Components/features/EmployeeSlice";
import { useDispatch } from "react-redux";

export const getAllEmployee = (dispatch) => {
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

export const getAllManagers = (dispatch) => {
  EmployeeService.getAllManagersContent().then(
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
        dispatch(setAllManagersData(managerArray));
      }
    },
    (error) => {
      const _dataList =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch(setAllManagersData(_dataList));
    }
  );
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllEmployee(dispatch);
    getAllManagers(dispatch);
  });

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/all-employees" component={AllEmployees} />
          <Route path="/management-employee" component={ManagementEmployee} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
