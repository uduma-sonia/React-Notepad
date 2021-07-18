import React from "react";
import Note from "./Note";

import "../css/Style.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Note />
    </div>
  );
};

export default Home;
