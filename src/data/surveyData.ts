export const surveyData = {
  agreementText: "Do you agree with the following statements:",
  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officia, consectetur amet distinctio molestias nulla, necessitatibus ducimus aliquam eveniet explicabo soluta fugit aut quam ut eaque inventore. Eligendi, minima commodi?",
  ratingText: ["strongly disagree", "neutral", "strongly agree"],
  user: {
    companyName: "Company ABC",
    name: "John",
    lastname: "Doe",
  },
  ratingValues: {
    lg: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    sm: [1, 2, 3, 4, 5],
  },
  survey: {
    typeRatingSlider: [
      {
        index: 1,
        question: "I am satisfied with my roles and responsibilities.",
      },
    ],
    typeRatingAndCheckbox: [
      {
        index: 2,
        question:
          "I feel comfortable working and interacting with the colleagues on my team.",
        improvementText: "Which of the following should we improve on?",
        feedbackOptions: [
          "Quality of feedback",
          "Actionability of feedback",
          "Openness to receive peer feedback",
          "Other",
        ],
      },
    ],
    openEnded: {
      index: 3,
      question: "Would you like to add anything?",
      placeholder:
        "Express yourself freely and safely. This will always remain anonymous.",
      extraFeedbackText: "Extra feedback helps",
    },
  },
  footer: {
    description: { text: "What is this?", link: "Meet Butterfly.ai" },
    terms: ["Terms of Service", "Privacy Policy"],
    copyright: "©2016-2023 Appynest, Inc.",
  },
};
