import React from "react";

export default function About(props) {
  //* disable the button styles as not needed
  // const [myStyle, useMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [modeName, useModeName] = useState("Enable Dark mode");
  // const enableMode = () => {
  //   if (myStyle.color === "black") {
  //     useMyStyle({ color: "#fff9db", backgroundColor: "#1d3d56" });
  //     useModeName("Enable Light mode");
  //   }

  //   if (myStyle.color === "#fff9db") {
  //     useMyStyle({ color: "black", backgroundColor: "white" });
  //     useModeName("Enable Light mode");
  //   }
  // };

  const myStyle = {
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
    color: props.mode === "dark" ? "white" : "#042743",
  };

  return (
    <div className="container" style={myStyle}>
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              style={myStyle}
              className="accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            style={myStyle}
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, characters count.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo" style={myStyle}>
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Let's get started</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text analysis is the process of examining, parsing, and
              interpreting written or spoken language to extract and understand
              the information it contains. It can be used to understand the
              sentiment, opinions, and emotions expressed in a piece of text, as
              well as to extract and classify important information, such as
              named entities and key phrases.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree" style={myStyle}>
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>TextUtils tools</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <hr />
              There are many tools and techniques that can be used for text
              analysis, including natural language processing (NLP) algorithms,
              machine learning models, and manual analysis by trained experts.
              Some common applications of text analysis include:
              <hr />
              <ul>
                <li>
                  Sentiment analysis: Determining the overall sentiment
                  (positive, negative, or neutral) expressed in a piece of text
                </li>
                <li>
                  Opinion mining: Identifying and extracting the opinions
                  expressed in a piece of text
                </li>
                <li>
                  Emotion detection: Identifying and extracting the emotions
                  expressed in a piece of text
                </li>
                <li>
                  Named entity recognition: Extracting and classifying named
                  entities (such as people, organizations, and locations) from a
                  piece of text
                </li>
                <li>
                  Key phrase extraction: Identifying and extracting the most
                  important phrases in a piece of text
                </li>
                <li>
                  Text classification: Assigning a piece of text to a predefined
                  category based on its content.
                </li>
              </ul>
            </div>
          </div>
          {/*** * disabled the button no need */}
          {/* <button className="btn btn-primary my-3" onClick={enableMode}>
            {modeName}
          </button> */}
        </div>
      </div>
    </div>
  );
}
