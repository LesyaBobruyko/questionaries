import React from 'react';
import Answers from '../answers'
import './index.css';

const Question = (props) => {
    return (
        <fieldset>
            <legend>{props.questionText}</legend>
            <Answers questionId={props.id}/>
            </fieldset>
    );
}

export default Question;