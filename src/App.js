// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import About from "./components/About";
import FormText from "./components/FormText/FormText";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar title="Textutiles" about="About" />
      <FormText heading="Enter the text to analyze the below" />
      {/* <About /> */}
    </>
  );
}

export default App;
