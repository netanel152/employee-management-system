import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { addNewEmployee } from "../features/EmployeeSlice";

const AddEmployee = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (newEmployee, e) => {
    await props.addNewEmployee(newEmployee);
    e.target.reset();
    props.setAddEmployeeForm(false)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="employee id"
          {...register("employeeId", {
            required: true,
            pattern: {
              value: /^[0-9]+$/,
              message: "id must contains only numbers",
            },
          })}
          minLength={9}
          maxLength={9}
        />
        {errors.employeeId && (
          <span className="errors-text">This field is required</span>
        )}
        <br />
        {errors.employeeId && errors.employeeId.type === "maxLength" && (
          <span className="errors-text">Length id is not correct</span>
        )}
        {errors.employeeId && errors.employeeId?.message && (
          <span className="errors-text">{errors.employeeId?.message}</span>
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

        <input type="submit" text="Send" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  addNewEmployee,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);
