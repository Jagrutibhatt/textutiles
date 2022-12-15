import React, { useState } from "react";

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
  };
  const changeToLowercase = () => {
    const newText2 = text.toLowerCase();
    useText(newText2);
  };
  const clearText = () => {
    const newText1 = "";
    useText(newText1);
  };
  const reverseText = () => {
    const textnew = text
      .split("")
      .reverse()
      .join(" ");

    useText(textnew);
  };

  // Copy text
  const handleCopy = () => {
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  // Remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    useText(newText.join(" "));
  };

  return (
    <>
      <div className="container">
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            rows="10"
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={changeToUppercase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={changeToLowercase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={reverseText}>
          Reverse Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summery</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
};

export default FormText;
