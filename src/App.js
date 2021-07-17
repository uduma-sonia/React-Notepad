import "./App.css";
import AddNote from "./components/AddNote";
import Note from "./components/Note";

function App() {
  return (
    <div className="App">
      <h1>HELLO REACT</h1>

      <AddNote />
      <Note />
    </div>
  );
}

export default App;

//STEPS

//INSTALL FIREBASE   done
//CREATE REALTIME DATABASE IN FIREBASE done
//IMPORT TEXT JSON FILE - JSON FILE WILL HOLD TEXT AND TITLE
//MAKE DATA BASE TEXT SHOW IN BROWSER
//MAKE AN ADD FUNCTION
//MAKE A DELETE FUNCTION
//DESIGN UI
//MAKE A PRE-LOADER
