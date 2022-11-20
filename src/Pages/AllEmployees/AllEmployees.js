import React, { useState, useEffect } from "react";
import TableManagerComponent from "../../Components/table/TableManagerComponent";
import AddEmployee from "../../Components/forms/AddEmployee";
import { connect } from "react-redux";

import "./AllEmployees.scss";
import { getAllEmployee } from "../../Components/features/EmployeeSlice";
const AllEmployees = (props) => {
  const [showAddEmployeeForm, setAddEmployeeForm] = useState(false);

  useEffect(() => {
    props.getAllEmployee();
  }, [props.isManager, props.allEmployees]);

  return (
    <div className="all-employees-data-container">
      <div className="title-container">
        <h1>All Employees</h1>
      </div>
      <div className="table-container">
        <TableManagerComponent />
      </div>
      <div className="add-button-container">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setAddEmployeeForm(!showAddEmployeeForm)}
        >
          Add new Employee
        </button>
      </div>
      {showAddEmployeeForm && <AddEmployee setAddEmployeeForm={(bool) => setAddEmployeeForm(bool)} />}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    allEmployees: state.employeeActions.allEmployeesData,
    isManager: state.employeeActions.isManager,
  };
};

const mapDispatchToProps = {
  getAllEmployee,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllEmployees);
