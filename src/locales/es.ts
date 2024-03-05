export const questionsES = [
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
    title: "¿Con qué género te identificas?",
    subTitle: "Por favor, comparte cómo te identificas",
    answers: [
      { text: "Mujer", emoji: "👩", id: "female" },
      { text: "Hombre", emoji: "👨", id: "male" },
      { text: "Otro", emoji: "😉", id: "other" },
    ],
  },
  {
    id: 3,
    type: "single-select",
    title: "¿Cuál es tu edad?",
    subTitle: "",
    answers: [
      { text: "18-29 años", id: "18-29" },
      { text: "30-39 años", id: "30-39" },
      { text: "40-49 años", id: "40-49" },
      { text: "50+", id: "50" },
    ],
  },
  {
    id: 4,
    type: "multiple-select",
    title: "¿Qué es lo que menos te gusta de un libro?",
    subTitle: "",
    answers: [
      { text: "Falta de lógica", id: "logic" },
      { text: "Velocidad lenta", id: "speed" },
      { text: "Falta de humor", id: "humor" },
      { text: "Final demasiado genérico", id: "ending" },
    ],
  },
  {
    id: 5,
    type: "bubble",
    title: "¿Cuáles son tus temas favoritos?",
    subTitle: "Elige hasta 3 temas que te gusten",
    answers: [
      { text: "Hombre lobo", emoji: "🐺", id: "werewolf" },
      { text: "Acción", emoji: "💃", id: "action" },
      { text: "Obsesión real", emoji: "👑", id: "royal" },
      { text: "Multi millonario", emoji: "🤑", id: "billionaire" },
      { text: "Romance", emoji: "🥰", id: "romance" },
      { text: "Adultos jóvenes", emoji: "💁‍♀️", id: "youngadult" },
      { text: "Chico malo", emoji: "🤠", id: "badboy" },
    ],
  },
];

export const commonTextES = {
  welcomeMessage: "¡Bienvenido al cuestionario!",
  buttonNext: "Siguiente",
  buttonRetakeQuiz: "Repetir cuestionario",
  buttonStart: "Comenzar",
  buttonGoToStart: "Ir al inicio",
  progressLoaderMessage: "Buscando colecciones para ti...",
  emailTitle: "Correo electrónico",
  emailSubtitle: "Ingresa tu correo electrónico para obtener acceso completo",
  emailInputPlaceholder: "Tu correo electrónico",
  invalidEmail: "Correo electrónico inválido",
  emailMessage: {
    commonText: "Al continuar, acepto la ",
    privacyText: "política de privacidad ",
    andText: "y los ",
    termsText: "términos de uso ",
  },
  thankYouTitle: "Gracias",
  thankYouSubTitle: "por tu apoyo y completar el cuestionario",
  downloadText: "Descargar mis respuestas",
  notFoundPageText:
    "¡Vaya! Página no encontrada. Por favor, verifica la URL o regresa a la página anterior",
};
