import React from "react";
import "./index.css";

const Score = (props) => {
  const score = props.score;

  return (
    <div>
      <p>{score}</p>
      {score <= 4 && (
        <>
          <p>
            Scores ≤4 suggest minimal depression which may not require
            treatment.
          </p>
          <p>
            Functionally, the patient does not report limitations due to their
            symptoms.
          </p>
        </>
      )}
      {score >= 5 && score <= 9 && (
        <>
          <p>
            Scores 5-9 suggest mild depression which may require only watchful
            waiting and repeated PHQ-9 at followup.
          </p>
        </>
      )}
      {score >= 10 && score <= 14 && (
        <>
          <p>
            Scores 10-14 suggest moderate depression severity; patients should
            have a treatment plan ranging form counseling, followup, and/or
            pharmacotherapy.
          </p>
        </>
      )}
      {score >= 15 && score <= 19 && (
        <>
          <p>
            Scores 15-19 suggest moderately severe depression; patients
            typically should have immediate initiation of pharmacotherapy and/or
            psychotherapy.
          </p>
        </>
      )}
      {score >= 20 && (
        <>
          <p>
            Scores 20 and greater suggest severe depression; patients typically
            should have immediate initiation of pharmacotherapy and expedited
            referral to mental health specialist.
          </p>
        </>
      )}
      {score > 4 && (
        <p>
          WARNING: This patient is having thoughts concerning for suicidal
          ideation or self-harm, and should be probed further, referred, or
          transferred for emergency psychiatric evaluation as clinically
          appropriate and depending on clinician overall risk assessment.
        </p>
      )}
    </div>
  );
};

export default Score;
