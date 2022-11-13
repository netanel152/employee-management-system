import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getAllEmployee,
  getAllManagers,
} from "../../Components/features/EmployeeSlice";
import "./Home.scss";
const Home = (props) => {
  useEffect(() => {
    props.getAllManagers();
    props.getAllEmployee();
  }, [props.isManager]);

  return (
    <div className="home-container">
      <h1>Employee Management System</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isManager: state.employeeActions.isManager,
  };
};

const mapDispatchToProps = {
  getAllEmployee,
  getAllManagers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
