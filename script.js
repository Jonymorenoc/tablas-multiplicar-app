document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('submit-btn').addEventListener('click', checkAnswer);
document.getElementById('next-btn').addEventListener('click', generateQuestion);

let selectedTables = [];
let currentQuestion = {};
let confetti;

function startQuiz() {
    selectedTables = Array.from(document.querySelectorAll('.table-select:checked')).map(input => parseInt(input.value));
    if (selectedTables.length === 0) {
        alert('Selecciona al menos una tabla.');
        return;
    }
    generateQuestion();
    document.getElementById('question-container').classList.remove('hidden');
}

function generateQuestion() {
    const table = selectedTables[Math.floor(Math.random() * selectedTables.length)];
    const number = Math.floor(Math.random() * 10) + 1;
    currentQuestion = { table, number, answer: table * number };

    const emojis = ['🍎', '🐶', '🎈', '🍇', '🐱', '🦄', '🐼', '🚗', '🍉'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    const emojiContainer = document.getElementById('emoji-rows');
    emojiContainer.innerHTML = '';

    for (let i = 0; i < table; i++) {
        const row = document.createElement('div');
        row.classList.add('emoji-row');
        for (let j = 0; j < number; j++) {
            const emoji = document.createElement('span');
            emoji.textContent = randomEmoji;
            row.appendChild(emoji);
        }
        emojiContainer.appendChild(row);
    }

    document.getElementById('question').textContent = `${table} x ${number}`;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    document.getElementById('result').textContent = userAnswer === currentQuestion.answer ? '¡Correcto! 🎉' : `Incorrecto. La respuesta era ${currentQuestion.answer}.`;
}
