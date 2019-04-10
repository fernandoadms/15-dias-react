import React from "react";
import "./styles.css";

const handleClick = props => () => console.log(props);

const SquareCollab = () => (
  <button onClick={handleClick("Square")} className="square-collab">
    X
  </button>
);

export default SquareCollab;
