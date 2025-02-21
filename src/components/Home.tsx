import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routings from "./Routings";

const Home: React.FC = () => {
  return (
    <Router>
      <Routings />
    </Router>
  );
};

export default Home;
