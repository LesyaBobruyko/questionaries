import react, { useState } from "react";
import Question from "../question";
import Score from "../score";
import "./index.css";

const questions = [
  { id: 0, questionText: "Little interest or pleasure in doing things?" },
  { id: 1, questionText: "Feeling down, depressed, or hopeless?" },
  {
    id: 2,
    questionText: "Trouble falling or staying asleep, or sleeping too much?",
  },
  { id: 3, questionText: "Feeling tired or having little energy?" },
  { id: 4, questionText: "Poor appetite or overeating?" },
  {
    id: 5,
    questionText:
      "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
  },
  {
    id: 6,
    questionText:
      "Trouble concentrating on things, such as reading the newspaper or watching television?",
  },
  {
    id: 7,
    questionText:
      "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?",
  },
  {
    id: 8,
    questionText:
      "Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?",
  },
];

const Questions = () => {
  const [results, setResults] = useState({});
  const score = Object.values(results).reduce((a, b) => a + b, 0);

  const handleChange = (value, questionId) => {
    setResults({ ...results, [questionId]: value });
  };

  const renderQuestion = (question) => {
    return (
      <Question
        key={question.id}
        questionText={question.questionText}
        id={question.id}
        onChange={handleChange}
      />
    );
  };

  return (
    <div className="questionnaire">
      <h2 className="questionnaryName">PHQ-9 (Patient Health Questionnaire-9)</h2>
      <p>
        How often have you been bothering by the following over the past 2
        weeks?
      </p>
      {questions.map((question) => renderQuestion(question))}
      <Score score={score} />
    </div>
  );
};

export default Questions;
