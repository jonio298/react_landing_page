import React from "react";

function Jumbotron() {
  return (
    <div
      style={{
        backgroundColor: "Maroon",
        borderRadius: "5px",
        width: "100%",
        marginRight: "10px",
        marginBottom: "10px",
      }}
    >
      <div className="jumbotron-fluid">
        <h1 className="display-4" style={{ color: "Yellow", padding: "10px" }}>
          First Landing React page{" "}
        </h1>
        <p className="lead" style={{ color: "Orange", padding: "10px" }}>
          Here is some text for my first react landing page. I am learning
          how to build apps and package it together.
        </p>
        <a
          className="btn btn-primary btn-lg"
          href="#"
          role="button"
          style={{ margin: "5px" }}
        >
          Click me!
        </a>
      </div>
    </div>
  );
}
export default Jumbotron;
