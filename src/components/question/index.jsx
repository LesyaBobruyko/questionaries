import React from "react";
import Answers from "../answers";
import "./index.css";

const Question = (props) => {
  return (
    <div className="question">
      <label className="questionText">{props.questionText}</label>
      <Answers questionId={props.id} answers={props.answers} onChange={props.onChange} />
    </div>
  );
};

export default Question;
