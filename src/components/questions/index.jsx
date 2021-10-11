import react, { useState } from "react";
import Question from "../question";
import Score from "../score";
import "./index.css";

const Questions = (props) => {
  const [scores, setScores] = useState({});
  const score = Object.values(scores).reduce((a, b) => a + b, 0);
  const data = props.data;

  const handleChange = (value, questionId) => {
    setScores({ ...scores, [questionId]: value || 0 });
  };

  const renderQuestion = (question) => {
    if (score < (question.minScore || 0)) {
      return null;
    } 
    
    return (
      <Question
        key={question.id}
        questionText={question.questionText}
        answers={question.answers}
        id={question.id}
        onChange={handleChange}
      />
    );
  };

  return (
    <div className="questionnaire">
      <h2 className="questionnaireName">{data.questionnaireName}</h2>
      <p className="description">{data.description}</p>
      <p className="instruction">{data.instruction}</p>
      {data.questions.map((question) => renderQuestion(question))}
      <Score score={score} results={data.results}/>
    </div>
  );
};

export default Questions;
