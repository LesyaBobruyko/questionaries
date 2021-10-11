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

const test = {
  questionnaireName: "GAD-7 (General Anxiety Disorder-7)",
  description: "Measures severity of anxiety.",
  instruction: "How often have they been bothered by the following over the past 2 weeks?",
  questions: [
    {
      id: 0,
      questionText: "Feeling nervous, anxious, or on edge",
      answers: answers,
    },
    {
      id: 1,
      questionText: "Not being able to stop or control worrying",
      answers: answers,
    },
    {
      id: 2,
      questionText: "Worrying too much about different things",
      answers: answers,
    },
    {
      id: 3,
      questionText: "Trouble relaxing",
      answers: answers,
    },
    { id: 4, questionText: "Being so restless that it's hard to sit still", answers: answers },
    {
      id: 5,
      questionText:
        "Becoming easily annoyed or irritable",
      answers: answers,
    },
    {
      id: 6,
      questionText:
        "Feeling afraid as if something awful might happen",
      answers: answers,
    },
    {
      id: 7,
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
  ],
  results: [
    {
      minScore: 0,
      maxScore: 4,
      text: "No anxiety disorder.",
    },
    {
      minScore: 5,
      maxScore: 9,
      text: "Mild anxiety disorder.",
    },
    {
      minScore: 10,
      maxScore: 14,
      text: "Moderate anxiety disorder.",
    },
    {
      minScore: 15,
      maxScore: 21,
      text: "Severe anxiety disorder.",
    },
  ],
};

export default test;
