import React from "react";

function Card() {
  return (
    <div className="card"
      style={{ width: "100%", margin: "10px", backgroundColor: "Red" }}
    >
      <img src="https://picsum.photos/500/325" />
      <div className="card-body">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text" style={{ color: "white" }}>
          Here is some text to dispaly on the card
        </p>
        <a href="#" className="btn btn-primary">
          Find out More!
        </a>
      </div>
    </div>
  );
}

export default Card;
