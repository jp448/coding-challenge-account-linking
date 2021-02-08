import React from "react";
import './Button.css';

function Button(props) {
  return (
    <button onClick={props.onClick}>{props.content}</button>
  );
}

export default Button;