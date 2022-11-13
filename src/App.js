import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/header/Header";
import Home from "./Pages/Home/Home";
import AllEmployees from "./Pages/AllEmployees/AllEmployees";
import ManagementEmployee from "./Pages/ManagementEmployee/ManagementEmployee";
import Footer from "./Components/footer/Footer";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/all-employees" component={AllEmployees} />
        <Route path="/management-employee" component={ManagementEmployee} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
