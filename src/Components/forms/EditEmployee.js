import Modal from "react-bootstrap/Modal";
import EmployeeService from "../../Services/EmployeeService";
import { connect } from "react-redux";
import {
  setCurrentEditEmployee,
  setEditModal,
} from "../features/EmployeeSlice";
import { useForm } from "react-hook-form";

const EditEmployee = (props) => {
  console.log("props.currentEditEmployee==>", props.currentEditEmployee);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleClose = () => {
    props.setEditModal(false);
  };

  const onSubmit = (editEmployee) => {
    editEmployee.employeeId = props.currentEditEmployee.employeeId;
    EmployeeService.editEmployeeByObject(editEmployee);
    reset(editEmployee);
    props.setEditModal(false);
  };

  return (
    <>
      <Modal show={props.showEditModal} onHide={handleClose}>
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
            {errors.employeeId && <span>This field is required</span>}
            <input
              placeholder="employee name"
              {...register("employeeName", { required: true, maxLength: 50 })}
            />
            {errors.employeeName && <span>This field is required</span>}
            <input
              placeholder="employee role"
              {...register("employeeRole", { required: true })}
            />
            {errors.employeeRole && <span>This field is required</span>}

            <input placeholder="manager name" {...register("managerName")} />
            <input type="submit" text="Send" />
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
  };
};

const mapDispatchToProps = {
  setCurrentEditEmployee,
  setEditModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
