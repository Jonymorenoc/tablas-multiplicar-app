// Event Listeners
document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('submit-btn').addEventListener('click', checkAnswer);

// Variables
let selectedTables = [];
let currentQuestion = {};
let score = 0;

// Start the Quiz
function startQuiz() {
    // Get selected tables
    selectedTables = Array.from(document.querySelectorAll('.table-select:checked')).map(input => parseInt(input.value));
    if (selectedTables.length === 0) {
        alert('Selecciona al menos una tabla.');
        return;
    }
    score = 0;
    generateQuestion();
    document.getElementById('question-container').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
}

// Generate a Question
function generateQuestion() {
    const table = selectedTables[Math.floor(Math.random() * selectedTables.length)];
    const number = Math.floor(Math.random() * 10) + 1;
    currentQuestion = { table, number, answer: table * number };

    // Display the question
    document.getElementById('question').innerHTML = `¿Cuánto es <strong>${table} x ${number}?</strong>`;
    document.getElementById('answer').value = '';
}

// Check the Answer
function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const result = document.getElementById('result');
    if (userAnswer === currentQuestion.answer) {
        result.textContent = '¡Correcto! 🎉';
        result.style.color = 'green';
    } else {
        result.textContent = `Incorrecto. La respuesta correcta era ${currentQuestion.answer}.`;
        result.style.color = 'red';
    }
    result.classList.remove('hidden');
    setTimeout(generateQuestion, 2000); // Generate a new question after 2 seconds
}
