import React, { useEffect, useState } from "react";
import TableComponent from "../../Components/table/TableManagerComponent";
import AddEmployee from "../../Components/forms/AddEmployee";
import { connect } from "react-redux";
import "./ManagementEmployee.scss";
import { getAllManagers } from "../../Components/features/EmployeeSlice";
const ManagementEmployee = (props) => {
  const [showAddEmployeeForm, setAddEmployeeForm] = useState(false);

  useEffect(() => {
    props.getAllManagers();
  }, [props.isManager]);

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

const mapStateToProps = (state) => {
  return {
    isManager: state.employeeActions.isManager,
  };
};

const mapDispatchToProps = {
  getAllManagers,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagementEmployee);
