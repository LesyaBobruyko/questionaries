import React from "react";
import Answers from "../answers";
import "./index.css";

const Question = (props) => {
  return (
    <fieldset>
      <legend>{props.questionText}</legend>
      <Answers questionId={props.id} onChange={props.onChange} />
    </fieldset>
  );
};

export default Question;
