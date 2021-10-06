import React from "react";
import Answer from "../answer";
import "./index.css";

function Answers(props) {
  const answers = [
    {
      id: "notAtAll",
      value: 0,
      text: "Not at all",
      defaultChecked: true,
    },
    {
      id: "severalDays",
      value: 1,
      text: "Several days",
    },
    {
      id: "moreThanHalfTheDays",
      value: 2,
      text: "More than half the days",
    },
    {
      id: "nearlyEveryDay",
      value: 3,
      text: "Nearly every day",
    },
  ];

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
      {answers.map((answer) => renderAnswer(answer))}
    </div>
  );
}

export default Answers;
