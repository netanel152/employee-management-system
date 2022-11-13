import { Table, Button } from "react-bootstrap";
const CustomTable = ({ employees, editEmployee, deleteEmployee }) => {
  return (
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
        {employees.map((employee) => (
          <tr key={employee.employeeId}>
            <td>{employee.employeeId}</td>
            <td>{employee.employeeName}</td>
            <td>{employee.employeeRole}</td>
            <td>{employee.managerName}</td>
            <td>
              <Button
                style={{ margin: "0 10px" }}
                variant="info"
                onClick={() => editEmployee(employee)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => deleteEmployee(employee.employeeId)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomTable;
