import React from "react";
import "./index.css"; 

const warningMessage = <p>WARNING: This patient is having thoughts concerning for suicidal ideation or self-harm, and should be probed further, referred, or transferred for emergency psychiatric evaluation as clinically appropriate and depending on clinician overall risk assessment.</p>;
const scoreDetails = {
    minimalDepression: <><p>Scores ≤4 suggest minimal depression which may not require treatment.</p><p>Functionally, the patient does not report limitations due to their symptoms.</p></>,
    mildDepression: <><p>Scores 5-9 suggest mild depression which may require only watchful waiting and repeated PHQ-9 at followup.</p>{warningMessage}</>,
    moderateDepression: <><p>Scores 10-14 suggest moderate depression severity; patients should have a treatment plan ranging form counseling, followup, and/or pharmacotherapy.</p>{warningMessage}</>,
    moderatelySevereDepression: <><p>Scores 15-19 suggest moderately severe depression; patients typically should have immediate initiation of pharmacotherapy and/or psychotherapy.</p>{warningMessage}</>,
    severeDepression: <><p>Scores 20 and greater suggest severe depression; patients typically should have immediate initiation of pharmacotherapy and expedited referral to mental health specialist.</p>{warningMessage}</>
}

const Score = (props) => {
  const score = props.score;

  return (
    <div>
      <p>{score}</p>
      {score <= 4 && scoreDetails.minimalDepression}
      {score >= 5 && score <= 9 && scoreDetails.mildDepression}
      {score >= 10 && score <= 14 && scoreDetails.moderateDepression}
      {score >= 15 && score <= 19 && scoreDetails.moderatelySevereDepression}
      {score >= 20 && scoreDetails.severeDepression}
    </div>
  );
};

export default Score;
