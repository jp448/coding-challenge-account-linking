import React from "react";
import './Button.css';

function Button(props) {
    let color = "";
    if (props.content === "Linked") {
        color = "blue"
    } else {
        color = "outline"
    }
  return (
    <button className={color} onClick={props.onClick}>{props.content}</button>
  );
}

export default Button;