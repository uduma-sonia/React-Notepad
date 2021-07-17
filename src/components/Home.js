import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

import "../css/Style.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <AddNote /> */}
      <Note />
    </div>
  );
};

export default Home;
