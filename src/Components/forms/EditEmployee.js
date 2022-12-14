import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import {
  setEditModal,
  editEmployee,
} from "../features/EmployeeSlice";
import { useForm } from "react-hook-form";

const EditEmployee = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClose = () => {
    props.setEditModal(false);
  };

  const onSubmit = (editEmployee, e) => {
    editEmployee.employeeId = props.currentEditEmployee.employeeId;
    props.editEmployee(editEmployee);
    e.target.reset();
    props.setEditModal(false);
  };

  return (
    <>
      <Modal show={props.showEditModal} onHide={handleClose} backdrop={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="employee id"
              defaultValue={props.currentEditEmployee.employeeId}
              {...register("employeeId", {
                disabled: true,
              })}
            />
            {errors.employeeId && (
              <span className="errors-text">This field is required</span>
            )}
            <input
              placeholder="employee name"
              {...register("employeeName", { required: true, maxLength: 50 })}
            />
            {errors.employeeName && (
              <span className="errors-text">This field is required</span>
            )}
            <input
              placeholder="employee role"
              {...register("employeeRole", { required: true })}
            />
            {errors.employeeRole && (
              <span className="errors-text">This field is required</span>
            )}

            <input placeholder="manager name" {...register("managerName")} />
            <input type="submit" />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentEditEmployee: state.employeeActions.currentEditEmployee,
    showEditModal: state.employeeActions.showEditModal,
    isManager: state.employeeActions.isManager,
  };
};

const mapDispatchToProps = {
  setEditModal,
  editEmployee,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
