import React, { useState } from "react";
// import App from "../../App";
import "../App.css";

const FormText = (props) => {
  const [text, useText] = useState("");
  // useText("This is changed useState");

  function handleOnChange(event) {
    // console.log("on change");
    useText(event.target.value);
  }

  const changeToUppercase = () => {
    // console.log("change the text to Uppercase");
    const newText = text.toUpperCase();
    useText(newText);
    // useText("you have clicked on button");
    props.showAlert("Text changed to Uppercase", "success");
  };
  const changeToLowercase = () => {
    const newText2 = text.toLowerCase();
    useText(newText2);
    props.showAlert("Text changed to Lowercase", "success");
  };
  const clearText = () => {
    const newText1 = "";
    useText(newText1);
    props.showAlert("Cleared the message", "success");
  };
  const reverseText = () => {
    const textnew = text.split("").reverse().join(" ");

    useText(textnew);
    props.showAlert("Text is reversed", "success");
  };

  // Copy text
  const handleCopy = () => {
    //*no need as we are using nagator .clipboard
    // const text = document.getElementById("myBox");
    // text.select();
    // document.getSelection().removeAllRanges();
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  // Remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    useText(newText.join(" "));
    props.showAlert("Text's extra white spaces is removed", "success");
  };

  const myBtnStyle = {
    backgroundColor: props.mode === "dark" ? "#1d3d56" : "#f08c00",
    color: props.mode === "dark" ? "white" : "#fff9db",
    border: props.mode === "dark" ? "none" : "none",
  };

  return (
    <>
      <div
        className="container "
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            rows="8"
            className="form-control"
            id="myBox"
            aria-label="With textarea"
            onChange={handleOnChange}
            placeholder="Type your message"
            style={{
              backgroundColor: props.mode === "dark" ? "#1d3d56" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <div className="row">
          <div className="col-10">
            <button
              className="btn btn-primary mx-1 my-1 disabled-button"
              onClick={changeToUppercase}
              style={myBtnStyle}
              disabled={!text}
            >
              Uppercase
            </button>
            <button
              className="btn btn-primary mx-1 my-1 disabled-button"
              style={myBtnStyle}
              onClick={changeToLowercase}
              disabled={!text}
            >
              Lowercase
            </button>
            <button
              className="btn btn-primary mx-1 my-1 disabled-button"
              onClick={reverseText}
              style={myBtnStyle}
              disabled={!text}
            >
              Reverse Text
            </button>
            <button
              className="btn btn-primary mx-1 my-1 disabled-button"
              onClick={clearText}
              style={myBtnStyle}
              disabled={!text}
            >
              Clear Text
            </button>
            <button
              className="btn btn-primary mx-1 my-1 disabled-button"
              onClick={handleCopy}
              style={myBtnStyle}
              disabled={!text}
            >
              Copy Text
            </button>
            <button
              className="btn btn-primary mx-1 my-1 disabled-button"
              onClick={handleExtraSpaces}
              style={myBtnStyle}
              disabled={!text}
            >
              Remove Spaces
            </button>
          </div>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your text summery</h2>
        <p>
          {
            text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((ele) => {
              return ele.length !== 0;
            }).length}{" "}
          minutes to read
        </p>
        <h3>Preview</h3>
        <p style={{ color: "grey" }}>
          {text.length > 0 ? text : "Enter text above to preview."}
        </p>
      </div>
    </>
  );
};

export default FormText;
