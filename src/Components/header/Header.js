import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { setIsManager } from "../features/EmployeeSlice";
import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const handleChangeFlag = (bool) => {
    dispatch(setIsManager(bool));
  };

  return (
    <div className="header">
      <div className="options">
        <Link className="option" to="/">
          Home
        </Link>
        <Link
          className="option"
          to="/all-employees"
          onClick={() => handleChangeFlag(false)}
        >
          All Employees
        </Link>
        <Link
          className="option"
          to="/management-employee"
          onClick={() => handleChangeFlag(true)}
        >
          Management Employee
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isManager: state.employeeActions.isManager,
  };
};

export default connect(mapStateToProps)(Header);
