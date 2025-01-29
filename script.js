/***************************************************
 * EXAMEN INTERACTIVO DE MATEMÁTICAS PARA NIÑOS
 * -----------------------------------------------
 * Temas:
 * 1. Multiplicaciones
 * 2. Medidas de capacidad
 * 3. Figuras geométricas
 * 4. Manejo del dinero
 ***************************************************/

/*
  ESTRUCTURA DE PREGUNTA (objeto):
  - type: "mcq" o "input"
  - question: "Texto de la pregunta"
  - options: ["opción1", "opción2", ...] (solo si type = "mcq")
  - correctAnswer: índice (mcq) o texto (input)
  - feedbackCorrect: mensaje si es correcto
  - feedbackIncorrect: mensaje si es incorrecto
  - explanation: explicación o recordatorio extra para repasar (sobre todo si está mal)
*/

const questions = [
  // ------------- TEMA 1: MULTIPLICACIÓN -------------
  {
    type: "input",
    question: "1️⃣ 🐶 Completa la multiplicación: 3 × 2 = ",
    correctAnswer: "6",
    feedbackCorrect: "¡Excelente! 3 × 2 = 6 🥳",
    feedbackIncorrect: "Intenta de nuevo. 3 × 2 = 6 🙈",
    explanation: "Recuerda que 3 × 2 es como 3 + 3."
  },
  {
    type: "input",
    question: "2️⃣ 🐱 ¿Cuánto es 5 × 4? Escribe tu respuesta:",
    correctAnswer: "20",
    feedbackCorrect: "¡Correcto! 5 × 4 = 20 💯",
    feedbackIncorrect: "¡No te rindas! 5 × 4 = 20 🐱",
    explanation: "5 grupos de 4 dan 20 en total."
  },
  {
    type: "mcq",
    question: "3️⃣ 🐼 Elige el resultado correcto: 6 × 3 = ",
    options: ["9", "18", "21", "12"],
    correctAnswer: 1, // "18"
    feedbackCorrect: "Bien hecho, 6 × 3 = 18 🎉",
    feedbackIncorrect: "No es correcto, 6 × 3 = 18 😅",
    explanation: "Multiplicar 6 por 3 es sumar 6 + 6 + 6."
  },
  {
    type: "mcq",
    question: "4️⃣ 🐰 7 × 5 = ",
    options: ["30", "35", "25", "45"],
    correctAnswer: 1, // "35"
    feedbackCorrect: "¡Así es! 7 × 5 = 35 🏅",
    feedbackIncorrect: "¡Ups! 7 × 5 = 35 🐰",
    explanation: "Suma 7 cinco veces: 7+7+7+7+7=35."
  },
  {
    type: "mcq",
    question: "5️⃣ 🐻 9 × 4 = ",
    options: ["36", "40", "28", "44"],
    correctAnswer: 0, // "36"
    feedbackCorrect: "¡Genial! 9 × 4 = 36 🍀",
    feedbackIncorrect: "La respuesta correcta es 36 🐻",
    explanation: "9 × 4 = 9 + 9 + 9 + 9 = 36."
  },
  {
    type: "input",
    question: "6️⃣ 🐹 ¿Cuánto es 2 × 9?",
    correctAnswer: "18",
    feedbackCorrect: "¡Muy bien! 2 × 9 = 18 ✨",
    feedbackIncorrect: "¡Intenta otra vez! 2 × 9 = 18 🐹",
    explanation: "2 grupos de 9: 9 + 9 = 18."
  },
  {
    type: "mcq",
    question: "7️⃣ 🦊 7 × 6 = ",
    options: ["42", "36", "12", "28"],
    correctAnswer: 0, // "42"
    feedbackCorrect: "Correcto, 7 × 6 = 42 🦊",
    feedbackIncorrect: "La correcta es 42 🙉",
    explanation: "Siete veces seis es 42. 7+7+7+7+7+7=42."
  },
  {
    type: "input",
    question: "8️⃣ 🦁 11 × 3 = ",
    correctAnswer: "33",
    feedbackCorrect: "¡Exacto! 11 × 3 = 33 🦁",
    feedbackIncorrect: "Recuerda, 11 × 3 = 33 🤔",
    explanation: "11 + 11 + 11 = 33."
  },

  // ------------- TEMA 2: MEDIDAS DE CAPACIDAD -------------
  {
    type: "mcq",
    question: "9️⃣ 🐟 ¿Cuántos mililitros son 1 litro?",
    options: ["10 ml", "100 ml", "1000 ml", "5000 ml"],
    correctAnswer: 2, // "1000 ml"
    feedbackCorrect: "¡Exacto! 1 L = 1000 ml 🐟",
    feedbackIncorrect: "Recuerda: 1 litro = 1000 ml 🐠",
    explanation: "1 L siempre equivale a 1000 ml."
  },
  {
    type: "input",
    question: "🔟 🐠 Convierte 6 litros a mililitros: 6 L = __ ml",
    correctAnswer: "6000",
    feedbackCorrect: "¡Muy bien! 6 L = 6000 ml 🦀",
    feedbackIncorrect: "Intenta de nuevo: 6 L = 6000 ml 🦞",
    explanation: "Multiplica los litros por 1000. 6 × 1000 = 6000."
  },
  {
    type: "mcq",
    question: "1️⃣1️⃣ 🐳 15000 ml equivalen a cuántos litros?",
    options: ["1.5 L", "15 L", "150 L", "0.15 L"],
    correctAnswer: 1, // "15 L"
    feedbackCorrect: "¡Exacto! 15000 ml = 15 L 🐳",
    feedbackIncorrect: "Revisa tus cálculos: 15000 ml = 15 L 🐠",
    explanation: "Divide los ml entre 1000. 15000 ÷ 1000 = 15."
  },
  {
    type: "input",
    question: "1️⃣2️⃣ 🦀 2500 ml = __ L",
    correctAnswer: "2.5",
    feedbackCorrect: "¡Correcto! 2500 ml = 2.5 L 🦀",
    feedbackIncorrect: "¡Ups! 2500 ml = 2.5 L 🏊‍♂️",
    explanation: "2500 ÷ 1000 = 2.5."
  },
  {
    type: "input",
    question: "1️⃣3️⃣ 🦞 Convierte 18000 ml a litros: 18000 ml = __ L",
    correctAnswer: "18",
    feedbackCorrect: "¡Bien hecho! 18000 ml = 18 L 🦞",
    feedbackIncorrect: "Respuesta correcta: 18 L 💧",
    explanation: "18000 ÷ 1000 = 18."
  },

  // ------------- TEMA 3: FIGURAS GEOMÉTRICAS -------------
  {
    type: "mcq",
    question: "1️⃣4️⃣ 🐵 Tengo 4 lados y 4 ángulos rectos. ¿Qué figura soy?",
    options: ["Rombo", "Cuadrado", "Triángulo"],
    correctAnswer: 1, // "Cuadrado"
    feedbackCorrect: "¡Excelente! Eres un cuadrado ⚪️",
    feedbackIncorrect: "No es correcto, la figura es un cuadrado ⬜️",
    explanation: "El cuadrado tiene 4 lados iguales y 4 ángulos rectos."
  },
  {
    type: "mcq",
    question: "1️⃣5️⃣ 🐣 No tengo lados ni ángulos. ¿Qué figura soy?",
    options: ["Esfera", "Hexágono", "Círculo"],
    correctAnswer: 2, // "Círculo"
    feedbackCorrect: "¡Correcto! Es un círculo ⚫️",
    feedbackIncorrect: "La respuesta correcta es círculo 🔴",
    explanation: "El círculo es una línea curva cerrada sin esquinas."
  },
  {
    type: "mcq",
    question: "1️⃣6️⃣ 🐯 Tengo 6 caras iguales. ¿Qué figura soy?",
    options: ["Cubo", "Cilindro", "Prisma triangular"],
    correctAnswer: 0, // "Cubo"
    feedbackCorrect: "¡Sí! Eres un cubo 🧊",
    feedbackIncorrect: "La respuesta correcta es cubo ✅",
    explanation: "El cubo tiene 6 caras cuadradas iguales."
  },
  {
    type: "input",
    question: "1️⃣7️⃣ 🐰 ¿Cuántos lados tiene un heptágono? Escribe tu respuesta:",
    correctAnswer: "7",
    feedbackCorrect: "¡Exacto! Un heptágono tiene 7 lados 🐰",
    feedbackIncorrect: "Un heptágono tiene 7 lados 🏷️",
    explanation: "Heptágono = 7 lados."
  },
  {
    type: "input",
    question: "1️⃣8️⃣ 🦔 ¿Cuántos ángulos tiene un decágono? (en número)",
    correctAnswer: "10",
    feedbackCorrect: "¡Muy bien! Un decágono tiene 10 ángulos 🤩",
    feedbackIncorrect: "La respuesta correcta es 10 🦔",
    explanation: "Decágono = 10 lados y 10 ángulos."
  },
  {
    type: "mcq",
    question: "1️⃣9️⃣ 🦓 ¿Cuántos lados tiene un paralelogramo?",
    options: ["2", "3", "4", "6"],
    correctAnswer: 2, // "4"
    feedbackCorrect: "¡Correcto! Un paralelogramo tiene 4 lados 🏳️",
    feedbackIncorrect: "La respuesta correcta es 4 lados 🦓",
    explanation: "El paralelogramo es un cuadrilátero, así que tiene 4 lados."
  },

  // ------------- TEMA 4: MANEJO DEL DINERO Y COMPRAS -------------
  /*
    Precios sugeridos: 
    - Leche $20
    - Soda $15
    - Brócoli $25
    - Jugo $30
    - Agua $10
    - Pollo $80
    - Atún $40
  */
  {
    type: "mcq",
    question: 
      "2️⃣0️⃣ 🛒 Precios: Leche $20, Soda $15, Brócoli $25, Jugo $30, Agua $10, Pollo $80, Atún $40.\n\n" +
      "¿Cuánto debes pagar por 2 leches, 3 sodas y 1 brócoli?",
    options: ["$75", "$95", "$110", "$115"],
    correctAnswer: 2, // "$110"
    feedbackCorrect: "¡Correcto! 2×20 + 3×15 + 25 = 40 + 45 + 25 = 110 🛒",
    feedbackIncorrect: "Vuelve a calcular: 2×20=40, 3×15=45, brócoli=25; total = 110 🍃",
    explanation: "Suma todos los precios: 40 + 45 + 25 = 110."
  },
  {
    type: "mcq",
    question: 
      "2️⃣1️⃣ 🦁 Tienes $300 y compras 1 jugo ($30) y 2 aguas ($10 c/u). ¿Cuánto te sobra?",
    options: ["$240", "$250", "$260", "$270"],
    correctAnswer: 1, // "$250"
    feedbackCorrect: "¡Muy bien! 30 + (2×10)= 50; 300 - 50= 250 🦁",
    feedbackIncorrect: "¡No te rindas! 300 - 50 = 250 💧",
    explanation: "Resta el total de la compra (50) a tu dinero (300)."
  },
  {
    type: "mcq",
    question: 
      "2️⃣2️⃣ 🐹 Si pagas con un billete de $500, ¿cuánto cambio recibes al comprar 1 pollo ($80) y 1 atún ($40)?",
    options: ["$380", "$420", "$400", "$360"],
    correctAnswer: 0, // "$380"
    feedbackCorrect: "¡Perfecto! 80 + 40 = 120; 500 - 120 = 380 🐹",
    feedbackIncorrect: "Vuelve a intentarlo: 500 - 120 = 380 💵",
    explanation: "Suma los costos (80+40=120) y réstalo a 500."
  },
  {
    type: "mcq",
    question: 
      "2️⃣3️⃣ 🐸 ¿Cuánto cuesta comprar 4 jugos ($30 c/u) y 2 leches ($20 c/u)?",
    options: ["$160", "$200", "$140", "$180"],
    correctAnswer: 0, // "$160"
    feedbackCorrect: "¡Correcto! 4×30=120, 2×20=40, total 160 🥤",
    feedbackIncorrect: "Calculemos: 120 + 40 = 160 🐸",
    explanation: "Multiplica el precio de cada producto por la cantidad y suma."
  }
];

// --- Variables globales ---
let currentQuestionIndex = 0;   // índice de pregunta actual
let shuffledQuestions = [];     // contendrá las preguntas mezcladas
let score = 0;                  // puntaje
let userAnswers = [];           // se guardará si se respondió bien o mal

// Elementos del DOM
const quizContainer = document.getElementById("quiz-container");
const startBtn = document.getElementById("start-btn");
const progressBar = document.getElementById("progress-bar");

// EVENTO: INICIAR QUIZ
startBtn.addEventListener("click", startQuiz);

/**
 * Inicia el examen:
 * 1. Mezcla las preguntas.
 * 2. Reinicia índice, score y userAnswers.
 * 3. Renderiza la primera pregunta.
 */
function startQuiz() {
  shuffledQuestions = shuffleArray(questions);
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  
  updateProgressBar();
  renderQuestion();
  startBtn.style.display = "none";
}

/**
 * Mezcla (randomiza) el array de preguntas
 */
function shuffleArray(arr) {
  const arrayCopy = [...arr];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
}

/**
 * Actualiza la barra de progreso
 */
function updateProgressBar() {
  const totalQuestions = shuffledQuestions.length;
  const answeredQuestions = currentQuestionIndex;
  const percentage = ((answeredQuestions) / totalQuestions) * 100;
  progressBar.style.width = `${percentage}%`;
}

/**
 * Renderiza la pregunta actual en pantalla
 */
function renderQuestion() {
  // Actualiza la barra de progreso
  updateProgressBar();
  
  // Verifica si ya se terminaron las preguntas
  if (currentQuestionIndex >= shuffledQuestions.length) {
    showEndScreen();
    return;
  }

  const currentQ = shuffledQuestions[currentQuestionIndex];
  
  // Selecciona el contenedor de contenido del quiz
  const quizContent = document.getElementById("quiz-content");
  quizContent.innerHTML = ""; // Limpia el contenido anterior

  // Contenedor principal de la pregunta
  const questionEl = document.createElement("div");
  questionEl.classList.add("question-container");

  // Texto de la pregunta
  const questionText = document.createElement("div");
  questionText.classList.add("question");
  questionText.textContent = currentQ.question;
  questionEl.appendChild(questionText);

  // Contenedor de retroalimentación
  const feedbackEl = document.createElement("div");
  feedbackEl.classList.add("feedback");
  questionEl.appendChild(feedbackEl);

  // Opciones según el tipo
  if (currentQ.type === "mcq") {
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options-container");

    currentQ.options.forEach((option, index) => {
      const optionBtn = document.createElement("button");
      optionBtn.classList.add("option-btn");
      optionBtn.textContent = option;

      optionBtn.addEventListener("click", () => {
        // Verificar respuesta
        if (index === currentQ.correctAnswer) {
          feedbackEl.innerHTML = `<p>${currentQ.feedbackCorrect}</p>`;
          feedbackEl.style.color = "green";
          score++;
          userAnswers.push({ 
            question: currentQ.question,
            userCorrect: true,
            explanation: currentQ.explanation 
          });
        } else {
          feedbackEl.innerHTML = `
            <p>${currentQ.feedbackIncorrect}</p>
            <div class="error-section">
              <p>💡 Explicación: ${currentQ.explanation}</p>
            </div>
          `;
          feedbackEl.style.color = "red";
          userAnswers.push({ 
            question: currentQ.question,
            userCorrect: false,
            explanation: currentQ.explanation 
          });
        }
        disableOptions(optionsContainer);
        showNextButton(quizContent);
      });

      optionsContainer.appendChild(optionBtn);
    });

    questionEl.appendChild(optionsContainer);

  } else if (currentQ.type === "input") {
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("options-container");

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Tu respuesta aquí";
    inputContainer.appendChild(inputField);

    const checkBtn = document.createElement("button");
    checkBtn.classList.add("btn");
    checkBtn.textContent = "Comprobar ✅";

    checkBtn.addEventListener("click", () => {
      if (inputField.value.trim() === currentQ.correctAnswer) {
        feedbackEl.innerHTML = `<p>${currentQ.feedbackCorrect}</p>`;
        feedbackEl.style.color = "green";
        score++;
        userAnswers.push({ 
          question: currentQ.question,
          userCorrect: true,
          explanation: currentQ.explanation 
        });
      } else {
        feedbackEl.innerHTML = `
          <p>${currentQ.feedbackIncorrect}</p>
          <div class="error-section">
            <p>💡 Explicación: ${currentQ.explanation}</p>
          </div>
        `;
        feedbackEl.style.color = "red";
        userAnswers.push({ 
          question: currentQ.question,
          userCorrect: false,
          explanation: currentQ.explanation 
        });
      }
      checkBtn.disabled = true;
      inputField.disabled = true;
      showNextButton(quizContent);
    });

    inputContainer.appendChild(checkBtn);
    questionEl.appendChild(inputContainer);
  }

  quizContent.appendChild(questionEl);
}

/**
 * Deshabilita las opciones de un contenedor de botones (para MCQ)
 */
function disableOptions(container) {
  const buttons = container.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
}

/**
 * Muestra el botón de "Siguiente" después de responder
 */
function showNextButton(container) {
  const navButtons = document.createElement("div");
  navButtons.classList.add("nav-buttons");

  const nextBtn = document.createElement("button");
  nextBtn.classList.add("btn");
  nextBtn.textContent = "Siguiente ➡️";
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    renderQuestion();
  });

  navButtons.appendChild(nextBtn);
  container.appendChild(navButtons);
}

/**
 * Pantalla final cuando se terminan las preguntas
 */
function showEndScreen() {
  // Actualiza la barra de progreso al 100%
  progressBar.style.width = `100%`;

  const quizContent = document.getElementById("quiz-content");
  quizContent.innerHTML = `
    <div id="result-container">
      <h2>¡Examen finalizado! 🏆</h2>
      <p>Tu calificación es: ${score}/${shuffledQuestions.length} (${Math.round((score / shuffledQuestions.length) * 100)}%)</p>
      <p>${getFinalMessage()}</p>
      ${score < shuffledQuestions.length ? '<button class="btn review-btn">Repasar Errores 👀</button>' : ''}
      <button class="btn restart-btn">Reiniciar Examen 🔄</button>
    </div>
  `;

  // Botón para repasar errores
  if (score < shuffledQuestions.length) {
    const reviewBtn = document.querySelector(".review-btn");
    reviewBtn.addEventListener("click", showReviewScreen);
  }

  // Botón para reiniciar
  const restartBtn = document.querySelector(".restart-btn");
  restartBtn.addEventListener("click", startQuiz);
}

/**
 * Obtiene el mensaje final basado en el porcentaje
 */
function getFinalMessage() {
  const percentage = Math.round((score / shuffledQuestions.length) * 100);
  if (percentage === 100) {
    return "¡Felicidades! Respondiste todo correctamente. 🌟";
  } else if (percentage >= 70) {
    return "¡Buen trabajo! Puedes mejorar en algunas preguntas. 😊";
  } else {
    return "Necesitas repasar un poco más. ¡Ánimo! 🤗";
  }
}

/**
 * Muestra las preguntas que el usuario respondió mal, con su explicación.
 */
function showReviewScreen() {
  const quizContent = document.getElementById("quiz-content");
  quizContent.innerHTML = `
    <div id="review-container">
      <h2>Repaso de Errores 🤔</h2>
      ${generateErrorReview()}
      <button class="btn restart-btn">Volver a iniciar 🔄</button>
    </div>
  `;

  // Botón para reiniciar
  const restartBtn = document.querySelector(".restart-btn");
  restartBtn.addEventListener("click", startQuiz);
}

/**
 * Genera el contenido de las preguntas mal respondidas
 */
function generateErrorReview() {
  const wrongAnswers = userAnswers.filter((ans) => ans.userCorrect === false);
  if (wrongAnswers.length === 0) {
    return `<p>¡No tuviste errores! ¡Felicidades! 🥳</p>`;
  }

  let reviewHTML = "";
  wrongAnswers.forEach((item, idx) => {
    reviewHTML += `
      <div class="question-container">
        <p class="question">❌ Pregunta: ${item.question}</p>
        <p>💡 Explicación: ${item.explanation}</p>
      </div>
    `;
  });
  return reviewHTML;
}
