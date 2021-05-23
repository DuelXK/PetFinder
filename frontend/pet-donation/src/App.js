import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router className="App">
      <Routes />
    </Router>
  );
};

export default App;
