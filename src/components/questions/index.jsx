import react from 'react';
import Question from '../question';
import './index.css';

const Questions = () => {
    const questions = [
        {id: 0, questionText: "Little interest or pleasure in doing things?"},
        {id: 1, questionText: "Feeling down, depressed, or hopeless?"},
        {id: 2, questionText: "Trouble falling or staying asleep, or sleeping too much?"},
        {id: 3, questionText: "Feeling tired or having little energy?"},
        {id: 4, questionText: "Poor appetite or overeating?"},
        {id: 5, questionText: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?"},
        {id: 6, questionText: "Trouble concentrating on things, such as reading the newspaper or watching television?"},
        {id: 7, questionText: "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?"},
        {id: 8, questionText: "Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?"}
    ]

    const renderQuestion = (props) => {
        return <Question questionText={props.questionText} id={props.id}/>;
    }

    return (
        questions.map(question => renderQuestion(question))
    );

}

const QuestionsContainer = () => {
    
}

export default Questions;