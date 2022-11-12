import React from "react";
import EmployeeService from "../../Services/EmployeeService";
import { useForm } from "react-hook-form";
import { getAllEmployee } from "../../App";
import { useDispatch } from "react-redux";

const AddEmployee = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (newEmployee) => {
    await EmployeeService.addNewEmployee(newEmployee);
    getAllEmployee(dispatch);
    reset(newEmployee);
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
        {errors.employeeId && <span>This field is required</span>}
        <br />
        {errors.employeeId && errors.employeeId.type === "maxLength" && (
          <span>Length id is not correct</span>
        )}
        {errors.employeeId && errors.employeeId?.message && (
          <span>{errors.employeeId?.message}</span>
        )}
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
    </div>
  );
};

export default AddEmployee;
