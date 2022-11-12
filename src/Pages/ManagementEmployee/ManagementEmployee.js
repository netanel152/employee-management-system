import React, { useState } from "react";
import TableComponent from "../../Components/table/TableComponent";
import AddEmployee from "../../Components/forms/AddEmployee";
import "./ManagementEmployee.scss";
const ManagementEmployee = () => {
  const [showAddEmployeeForm, setAddEmployeeForm] = useState(false);

  return (
    <div className="all-managers-data-container">
      <div className="title-container">
        <h1>Management Employee</h1>
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

export default ManagementEmployee;
