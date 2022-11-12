import { connect } from "react-redux";
import EmployeeService from "../../Services/EmployeeService";
import EditEmployee from "../forms/EditEmployee";
import {
  setCurrentEditEmployee,
  setEditModal,
} from "../features/EmployeeSlice";
import CustomTable from "./CustomTable";

const TableComponent = ({
  isManager,
  setEditModal,
  setCurrentEditEmployee,
  showEditModal,
  allEmployees,
  allManagersData,
}) => {
  const editEmployee = (editEmployee) => {
    setEditModal(true);
    setCurrentEditEmployee(editEmployee);
  };

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployeeById(employeeId);
  };

  return (
    <>
      <CustomTable
        employees={isManager ? allManagersData : allEmployees}
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
    allManagersData: state.employeeActions.allManagersData,
    isManager: state.employeeActions.isManager,
    showEditModal: state.employeeActions.showEditModal,
  };
};

const mapDispatchToProps = {
  setCurrentEditEmployee,
  setEditModal,
};
export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
