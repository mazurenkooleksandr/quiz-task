export const questionsDE = [
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
    title: "Mit welchem Geschlecht identifizierst du dich?",
    subTitle: "Bitte teile mit, wie du dich identifizierst",
    answers: [
      { text: "Weiblich", emoji: "👩", id: "female" },
      { text: "Männlich", emoji: "👨", id: "male" },
      { text: "Andere", emoji: "😉", id: "other" },
    ],
  },
  {
    id: 3,
    type: "single-select",
    title: "Wie alt bist du?",
    subTitle: "",
    answers: [
      { text: "18-29 Jahre", id: "18-29" },
      { text: "30-39 Jahre", id: "30-39" },
      { text: "40-49 Jahre", id: "40-49" },
      { text: "50+", id: "50" },
    ],
  },
  {
    id: 4,
    type: "multiple-select",
    title: "Was magst du am wenigsten an einem Buch?",
    subTitle: "",
    answers: [
      { text: "Mangel an Logik", id: "logic" },
      { text: "Langsamkeit", id: "speed" },
      { text: "Fehlender Humor", id: "humor" },
      { text: "Zu generisches Ende", id: "ending" },
    ],
  },
  {
    id: 5,
    type: "bubble",
    title: "Was sind deine Lieblingsthemen?",
    subTitle: "Wähle bis zu 3 Themen, die dir gefallen",
    answers: [
      { text: "Werwolf", emoji: "🐺", id: "werewolf" },
      { text: "Action", emoji: "💃", id: "action" },
      { text: "Königliche Obsession", emoji: "👑", id: "royal" },
      { text: "Milliardär", emoji: "🤑", id: "billionaire" },
      { text: "Romantik", emoji: "🥰", id: "romance" },
      { text: "Junge Leute", emoji: "💁‍♀️", id: "youngadult" },
      { text: "Bad Boy", emoji: "🤠", id: "badboy" },
    ],
  },
];

export const commonTextDE = {
  welcomeMessage: "Willkommen beim Quiz!",
  buttonNext: "Weiter",
  buttonRetakeQuiz: "Quiz wiederholen",
  buttonStart: "Start",
  buttonGoToStart: "Zum Start",
  progressLoaderMessage: "Suche nach Kollektionen für dich...",
  emailTitle: "E-Mail",
  emailSubtitle: "Geben Sie Ihre E-Mail ein, um vollen Zugriff zu erhalten",
  emailInputPlaceholder: "Deine E-Mail",
  invalidEmail: "Ungültige E-Mail",
  emailMessage: {
    commonText: "Mit dem Fortfahren stimme ich der ",
    privacyText: "Datenschutzrichtlinie ",
    andText: "und den ",
    termsText: "Nutzungsbedingungen ",
  },
  thankYouTitle: "Danke",
  thankYouSubTitle: "für Ihre Unterstützung und das Absolvieren des Quiz",
  downloadText: "Meine Antworten herunterladen",
  notFoundPageText:
    "Hoppla! Seite nicht gefunden. Bitte überprüfen Sie die URL oder kehren Sie zur vorherigen Seite zurück",
};
