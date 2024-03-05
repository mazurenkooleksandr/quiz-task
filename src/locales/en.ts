export const questionsEN = [
  {
    id: 1,
    type: "single-select",
    title: "What is your prefered language?",
    subTitle: "Choose language",
    answers: [
      { text: "English", id: "en" },
      { text: "French", id: "fr" },
      { text: "German", id: "de" },
      { text: "Spanish", id: "es" },
    ],
  },
  {
    id: 2,
    type: "single-select-image",
    title: "What gender do you identify with?",
    subTitle: "Please share how do you identify yourself",
    answers: [
      { text: "Female", emoji: "👩", id: "female" },
      { text: "Male", emoji: "👨", id: "male" },
      { text: "Other", emoji: "😉", id: "other" },
    ],
  },
  {
    id: 3,
    type: "single-select",
    title: "What is your age?",
    subTitle: "",
    answers: [
      { text: "18-29 years", id: "18-29" },
      { text: "30-39 years", id: "30-39" },
      { text: "40-49 years", id: "40-49" },
      { text: "50+", id: "50" },
    ],
  },
  {
    id: 4,
    type: "multiple-select",
    title: "What do you hate the most in a book?",
    subTitle: "",
    answers: [
      { text: "Lack of logic", id: "logic" },
      { text: "A slow speed", id: "speed" },
      { text: "Lack of humor", id: "humor" },
      { text: "Way too generic ending", id: "ending" },
    ],
  },
  {
    id: 5,
    type: "bubble",
    title: "What are your favorite topics?",
    subTitle: "Choose up to 3 topics you like",
    answers: [
      { text: "Werewolf", emoji: "🐺", id: "werewolf" },
      { text: "Action", emoji: "💃", id: "action" },
      { text: "Royal Obsession", emoji: "👑", id: "royal" },
      { text: "Billionaire", emoji: "🤑", id: "billionaire" },
      { text: "Romance", emoji: "🥰", id: "romance" },
      { text: "Young Adult", emoji: "💁‍♀️", id: "youngadult" },
      { text: "Bad Boy", emoji: "🤠", id: "badboy" },
    ],
  },
];

export const commonTextEN = {
  welcomeMessage: "Welcome to take the Quiz!",
  buttonNext: "Next",
  buttonRetakeQuiz: "Retake quiz",
  buttonStart: "Start",
  buttonGoToStart: "Go to Start",
  progressLoaderMessage: "Finding collections for you...",
  emailTitle: "Email",
  emailSubtitle: "Enter your email to get full access",
  emailInputPlaceholder: "Your email",
  invalidEmail: "Invalid email",
  emailMessage: {
    commonText: "By continuing I agree with ",
    privacyText: "Privacy policy ",
    andText: "and ",
    termsText: "Terms of use.",
  },
  thankYouTitle: "Thank you",
  thankYouSubTitle: "for supporting us and passing quiz",
  downloadText: "Download my answers",
  notFoundPageText:
    "Oops! Page not found. Please check the URL or return to the previous page",
};
