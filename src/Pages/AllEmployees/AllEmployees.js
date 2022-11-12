import React, { useState } from "react";
import TableComponent from "../../Components/table/TableManagerComponent";
import AddEmployee from "../../Components/forms/AddEmployee";
import "./AllEmployees.scss";
const AllEmployees = () => {
  const [showAddEmployeeForm, setAddEmployeeForm] = useState(false);

  return (
    <div className="all-employees-data-container">
      <div className="title-container">
        <h1>All Employees</h1>
      </div>
      <div className="table-container">
        <TableComponent />
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
      {showAddEmployeeForm && <AddEmployee />}
    </div>
  );
};

export default AllEmployees;
