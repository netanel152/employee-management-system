import React, { useMemo } from "react";
import TableComponent from "../../Components/react-table/TableComponent";
import { useSelector } from "react-redux";

const AllEmployees = (props) => {
  const allEmployeesData = useSelector((state) => state.allEmployeesData);
  console.log("allEmployeesData==>", allEmployeesData);
  console.log("AllEmployees==>props", props);
  const columns = useMemo(
    () => [
      {
        Header: "All Employees",
        columns: [
          {
            Header: "EmployeeId",
            accessor: "employeeId",
          },
          {
            Header: "EmployeeName",
            accessor: "employeeName",
          },
          {
            Header: "EmployeeRole",
            accessor: "employeeRole",
          },
          {
            Header: "ManagerName",
            accessor: "managerName",
          },
        ],
      },
    ],
    []
  );

  return (
    <div className="all-employees-data-container">
      <h1>All Employees</h1>
      {allEmployeesData && (
        <TableComponent columns={columns} data={allEmployeesData} />
      )}
    </div>
  );
};

export default AllEmployees;
