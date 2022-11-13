import { connect } from "react-redux";
import EditEmployee from "../forms/EditEmployee";
import {
  getAllEmployee,
  getAllManagers,
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
  allManagersData,
  deleteExistEmployee,
  getAllEmployee,
}) => {
  const editEmployee = (editEmployee) => {
    setEditModal(true);
    setCurrentEditEmployee(editEmployee);
    if (isManager) {
      getAllManagers();
    } else {
      getAllEmployee();
    }
  };

  const deleteEmployee = async (employeeId) => {
    deleteExistEmployee(employeeId);
    getAllEmployee();
    // if (isManager) {
    //   getAllManagers();
    // } else {
    //   getAllEmployee();
    // }
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
  getAllEmployee,
  deleteExistEmployee,
  setCurrentEditEmployee,
  setEditModal,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableManagerComponent);
