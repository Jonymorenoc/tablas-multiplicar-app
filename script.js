document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('submit-btn').addEventListener('click', checkAnswer);

let selectedTables = [];
let currentQuestion = {};
let score = 0;

function startQuiz() {
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

function generateQuestion() {
    const table = selectedTables[Math.floor(Math.random() * selectedTables.length)];
    const number = Math.floor(Math.random() * 10) + 1;
    currentQuestion = { table, number, answer: table * number };

    let apples = generateApples(table, number);
    document.getElementById('question').innerHTML = `¿Cuánto es <strong>${table} x ${number}?</strong><br>${apples}`;
    document.getElementById('answer').value = '';
}

function generateApples(table, number) {
    let applesHTML = '';
    for (let i = 0; i < number; i++) {
        applesHTML += `<span class="apple">🍎</span>`;
    }
    return applesHTML;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === currentQuestion.answer) {
        score++;
        document.getElementById('result').innerHTML = '¡Correcto! 🎉';
    } else {
        document.getElementById('result').innerHTML = `Incorrecto. La respuesta correcta era ${currentQuestion.answer}.`;
    }
    document.getElementById('result').classList.remove('hidden');
    setTimeout(generateQuestion, 1500);
}
