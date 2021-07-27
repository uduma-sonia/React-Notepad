import React from "react";
import Note from "./Note";

import "../css/Style.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Note />
    </div>
  );
};

export default Home;
