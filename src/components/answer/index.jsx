import React from "react";
import "./index.css";

const Answer = (props) => {
  return (
    <label htmlFor={props.id}>
      <input type="radio" id={props.id} value={props.value} name={props.questionId} />
      {props.text} <br />
    </label>
  );
};

export default Answer;
