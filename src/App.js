import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import Home from "./Pages/Home/Home";
import AllEmployees from "./Pages/AllEmployees/AllEmployees";
import ManagementEmployee from "./Pages/ManagementEmployee/ManagementEmployee";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/all-employees" component={AllEmployees} />
        <Route path="/management-employee" component={ManagementEmployee} />
      </Switch>
    </div>
  );
};

export default App;
