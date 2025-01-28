document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('submit-btn').addEventListener('click', checkAnswer);

let selectedTables = [];
let currentQuestion = {};

function startQuiz() {
    selectedTables = Array.from(document.querySelectorAll('.table-select:checked')).map(input => parseInt(input.value));
    if (selectedTables.length === 0) {
        alert('Selecciona al menos una tabla.');
        return;
    }
    generateQuestion();
    document.getElementById('question-container').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
}

function generateQuestion() {
    const table = selectedTables[Math.floor(Math.random() * selectedTables.length)];
    const number = Math.floor(Math.random() * 10) + 1;
    currentQuestion = { table, number, answer: table * number };

    // Generar pregunta con manzanas 🍎
    const apples = Array(number).fill('🍎').join('');
    document.getElementById('question').innerHTML = `¿Cuánto es <strong>${table} x ${number}</strong>?<br>${apples}`;
    document.getElementById('answer').value = '';
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const resultElement = document.getElementById('result');

    if (userAnswer === currentQuestion.answer) {
        resultElement.textContent = '¡Correcto! 🎉';
        resultElement.className = 'correct';
    } else {
        resultElement.textContent = `Incorrecto. La respuesta correcta era ${currentQuestion.answer}.`;
        resultElement.className = 'incorrect';
    }

    resultElement.classList.remove('hidden');
    setTimeout(generateQuestion, 2000); // Genera una nueva pregunta después de 2 segundos
}
