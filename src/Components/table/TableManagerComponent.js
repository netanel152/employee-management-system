import { connect, useDispatch } from "react-redux";
import EmployeeService from "../../Services/EmployeeService";
import EditEmployee from "../forms/EditEmployee";
import {
  setCurrentEditEmployee,
  setEditModal,
} from "../features/EmployeeSlice";
import CustomTable from "./CustomTable";
import { getAllEmployee, getAllManagers } from "../../App";

const TableManagerComponent = ({
  isManager,
  setEditModal,
  setCurrentEditEmployee,
  showEditModal,
  allEmployees,
  allManagersData,
}) => {
  const dispatch = useDispatch();
  const editEmployee = (editEmployee) => {
    setEditModal(true);
    setCurrentEditEmployee(editEmployee);
    if (isManager) {
      getAllManagers(dispatch);
    } else {
      getAllEmployee(dispatch);
    }
  };

  const deleteEmployee = async (employeeId) => {
    EmployeeService.deleteEmployeeById(employeeId);
    if (isManager) {
      getAllManagers(dispatch);
    } else {
      getAllEmployee(dispatch);
    }
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableManagerComponent);
