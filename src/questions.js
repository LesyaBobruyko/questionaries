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

const questions = [
  {
    id: 0,
    questionText: "Little interest or pleasure in doing things?",
    answers: answers,
  },
  {
    id: 1,
    questionText: "Feeling down, depressed, or hopeless?",
    answers: answers,
  },
  {
    id: 2,
    questionText: "Trouble falling or staying asleep, or sleeping too much?",
    answers: answers,
  },
  {
    id: 3,
    questionText: "Feeling tired or having little energy?",
    answers: answers,
  },
  { id: 4, 
    questionText: "Poor appetite or overeating?", 
    answers: answers 
  },
  {
    id: 5,
    questionText:
      "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
    answers: answers,
  },
  {
    id: 6,
    questionText:
      "Trouble concentrating on things, such as reading the newspaper or watching television?",
    answers: answers,
  },
  {
    id: 7,
    questionText:
      "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?",
    answers: answers,
  },
  {
    id: 8,
    questionText:
      "Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?",
    answers: answers,
  },
  {
    id: 9,
    minScore: 1,
    questionText:
      "How difficult have these problems made it to do work, take care of things at home, or get along with other people?",
    answers: [
      {
        id: "notAtAll",
        text: "Not at all",
      },
      {
        id: "somewhatDifficult",
        text: "Somewhat difficult",
      },
      {
        id: "veryDifficult",
        text: "Very difficult",
      },
      {
        id: "extremelyDifficult",
        text: "Extremely difficult",
      },
    ],
  },
];

export default questions;
