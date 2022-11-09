import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import Home  from "./Pages/home/Home";
import AllEmployees from "./Pages/AllEmployees/AllEmployees";
import ManagementEmployee from "./Pages/ManagementEmployee/ManagementEmployee";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/all-employees" component={AllEmployees} />
        <Route path="/management-employee" component={ManagementEmployee} />
      </Routes>
    </div>
  );
};

export default App;
