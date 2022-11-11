import React from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";

const TableComponent = (props) => {

  const editUser = (employee) => {
    alert("editUser");
  };

  const deleteUser = (employee) => {
    alert("deleteUser");
  };
  return (
    <>
      <Table>
        <thead className="btn-primary">
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Employee Role</th>
            <th>Manager Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props?.allEmployees?.map((employee) => (
            <tr key={employee.employeeId}>
              <td>{employee.employeeId}</td>
              <td>{employee.employeeName}</td>
              <td>{employee.employeeRole}</td>
              <td>{employee.managerName}</td>
              <td>
                <Button
                  variant="info"
                  onClick={() => editUser(employee.UserId)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => deleteUser(employee.UserId)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allEmployees: state.employeeActions.allEmployeesData,
  };
};

export default connect(mapStateToProps)(TableComponent);
