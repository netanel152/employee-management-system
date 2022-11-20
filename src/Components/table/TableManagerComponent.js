import React, { useEffect } from "react";
import { connect } from "react-redux";
import EditEmployee from "../forms/EditEmployee";
import {
  setCurrentEditEmployee,
  setEditModal,
  deleteExistEmployee,
} from "../features/EmployeeSlice";
import CustomTable from "./CustomTable";

const TableManagerComponent = ({
  isManager,
  setEditModal,
  setCurrentEditEmployee,
  showEditModal,
  allEmployees,
  allManagers,
  deleteExistEmployee,
}) => {
  useEffect(() => { }, [allEmployees, allManagers]);

  const editEmployee = (editEmployee) => {
    setEditModal(true);
    setCurrentEditEmployee(editEmployee);
  };

  const deleteEmployee = (employeeId) => {
    deleteExistEmployee(employeeId);
  };

  return (
    <>
      <CustomTable
        employees={isManager ? allManagers : allEmployees}
        editEmployee={editEmployee}
        deleteEmployee={deleteEmployee}
      />
      {showEditModal && <EditEmployee />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allEmployees: state.employeeActions.allEmployeesData,
    allManagers: state.employeeActions.allManagersData,
    isManager: state.employeeActions.isManager,
    showEditModal: state.employeeActions.showEditModal,
  };
};

const mapDispatchToProps = {
  deleteExistEmployee,
  setCurrentEditEmployee,
  setEditModal,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableManagerComponent);
