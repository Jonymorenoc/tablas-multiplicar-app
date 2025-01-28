// Grabbing elements
const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownContent = document.getElementById('dropdown-content');
const startBtn = document.getElementById('start-btn');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const emojiRows = document.getElementById('emoji-rows');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const resultEl = document.getElementById('result');

let selectedTables = [];
let currentQuestion = {};
let confetti; // will hold our confetti instance

/* ==============================
   1. Dropdown Toggle 
============================== */
dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('hidden');
});

/* ==============================
   2. Start Quiz 
============================== */
startBtn.addEventListener('click', () => {
  selectedTables = Array.from(
    document.querySelectorAll('.table-select:checked')
  ).map(input => parseInt(input.value));

  if (selectedTables.length === 0) {
    alert('Selecciona al menos una tabla.');
    return;
  }

  // show quiz container
  questionContainer.classList.remove('hidden');
  generateQuestion();
});

/* ==============================
   3. Generate a New Question 
============================== */
function generateQuestion() {
  // Clear previous result
  resultEl.classList.add('hidden');
  // Hide the Next button until user answers
  nextBtn.classList.add('hidden');
  // Clear the input
  answerEl.value = '';

  // Clear any previous confetti
  if (confetti) {
    confetti.clear();
  }

  // Random table from selected tables
  const table = selectedTables[Math.floor(Math.random() * selectedTables.length)];
  // Random number from 1 to 10
  const number = Math.floor(Math.random() * 10) + 1;

  currentQuestion = {
    table,
    number,
    answer: table * number
  };

  // Populate the emojis
  const emojis = ['🍎', '🐶', '🎈', '🍇', '🐱', '🦄', '🐼', '🚗', '🍉', '🌟', '🐣'];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  emojiRows.innerHTML = '';
  for (let i = 0; i < table; i++) {
    const row = document.createElement('div');
    row.classList.add('emoji-row');
    for (let j = 0; j < number; j++) {
      const span = document.createElement('span');
      span.textContent = randomEmoji;
      row.appendChild(span);
    }
    emojiRows.appendChild(row);
  }

  // Display the question
  questionEl.textContent = `${table} x ${number}`;
}

/* ==============================
   4. Check Answer 
============================== */
submitBtn.addEventListener('click', () => {
  const userAnswer = parseInt(answerEl.value);

  if (isNaN(userAnswer)) {
    alert('Por favor ingresa un número.');
    return;
  }

  // Show the result
  resultEl.classList.remove('hidden');

  if (userAnswer === currentQuestion.answer) {
    // Correct answer
    resultEl.textContent = '¡Correcto!
