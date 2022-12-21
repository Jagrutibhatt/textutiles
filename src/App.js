import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import About from "./components/About";
import FormText from "./components/FormText";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes,
} from "react-router-dom";

function App() {
  //whether dark mode enabled or not
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert();
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Enabled dark mode", "success");
      document.title = "TextUtils - Dark Mode";

      // * NOTE HOW TO SET BLINKING NOTES ON WEBSITE top title
      // setInterval(() => {
      //    document.title = "Jagruti is AMAZING";
      // }, 1000);
      // setInterval(() => {
      //   document.title = "Jagruti is THE BEST";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enabled light mode", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <NavBar
          title="Textutils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />

            <Route
              exact
              path="/"
              element={
                <FormText
                  heading="Try TextUtils: Enter the text to analyze below"
                  mode={mode}
                  showAlert={showAlert}
                  alert={alert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
