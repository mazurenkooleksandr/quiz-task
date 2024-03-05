export const questionsFR = [
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
    title: "Avec quel genre vous identifiez-vous?",
    subTitle: "Veuillez indiquer comment vous vous identifiez",
    answers: [
      { text: "Femme", emoji: "👩", id: "female" },
      { text: "Homme", emoji: "👨", id: "male" },
      { text: "Autre", emoji: "😉", id: "other" },
    ],
  },
  {
    id: 3,
    type: "single-select",
    title: "Quel est votre âge?",
    subTitle: "",
    answers: [
      { text: "18-29 ans", id: "18-29" },
      { text: "30-39 ans", id: "30-39" },
      { text: "40-49 ans", id: "40-49" },
      { text: "50+", id: "50" },
    ],
  },
  {
    id: 4,
    type: "multiple-select",
    title: "Qu'est-ce que vous détestez le plus dans un livre?",
    subTitle: "",
    answers: [
      { text: "Manque de logique", id: "logic" },
      { text: "Lenteur", id: "speed" },
      { text: "Manque d'humour", id: "humor" },
      { text: "Fin trop générique", id: "ending" },
    ],
  },
  {
    id: 5,
    type: "bubble",
    title: "Quels sont vos sujets préférés?",
    subTitle: "Choisissez jusqu'à 3 sujets que vous aimez",
    answers: [
      { text: "Loup-garou", emoji: "🐺", id: "werewolf" },
      { text: "Action", emoji: "💃", id: "action" },
      { text: "Obsession royale", emoji: "👑", id: "royal" },
      { text: "Milliardaire", emoji: "🤑", id: "billionaire" },
      { text: "Romance", emoji: "🥰", id: "romance" },
      { text: "Jeune adulte", emoji: "💁‍♀️", id: "youngadult" },
      { text: "Mauvais garçon", emoji: "🤠", id: "badboy" },
    ],
  },
];

export const commonTextFR = {
  welcomeMessage: "Bienvenue pour passer le Quiz !",
  buttonNext: "Suivant",
  buttonRetakeQuiz: "Recommencer le quiz",
  buttonStart: "Commencer",
  buttonGoToStart: "Retour au début",
  progressLoaderMessage: "Recherche de collections pour vous...",
  emailTitle: "Email",
  emailSubtitle: "Saisissez votre email pour accéder complet",
  emailInputPlaceholder: "Votre email",
  invalidEmail: "Email invalide",
  emailMessage: {
    commonText: "En continuant, j'accepte la ",
    privacyText: "politique de confidentialité ",
    andText: "et ",
    termsText: "conditions d'utilisation.",
  },
  thankYouTitle: "Merci",
  thankYouSubTitle: "pour nous soutenir et passer le quiz",
  downloadText: "Télécharger mes réponses",
  notFoundPageText:
    "Oups ! Page introuvable. Veuillez vérifier l'URL ou revenir à la page précédente",
};
