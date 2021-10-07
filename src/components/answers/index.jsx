import React from "react";
import Answer from "../answer";
import "./index.css";

function Answers(props) { 
  function renderAnswer(answer) {
    return (
      <Answer
        key={answer.id}
        id={`${props.questionId}-${answer.id}`}
        questionId={props.questionId}
        value={answer.value}
        text={answer.text}
        defaultChecked={answer.defaultChecked}
        onChange={props.onChange}
      />
    );
  }

  return (
    <div className="answers">
      {props.answers.map((answer) => renderAnswer(answer))}
    </div>
  );
}

export default Answers;
