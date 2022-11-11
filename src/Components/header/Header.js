import React from "react";
import { Link } from "react-router-dom";

// import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      {/* <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link> */}
      <div className="options">
        <Link className="option" to="/">
          Home
        </Link>
        <Link className="option" to="/all-employees">
          All Employees
        </Link>
        <Link className="option" to="/management-employee">
          Management Employee
        </Link>
      </div>
    </div>
  );
};

export default Header;
