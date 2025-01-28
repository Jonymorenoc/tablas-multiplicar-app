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
    document.getElementById('result').classList.add('hidden');
    initConfetti();
}

function generateQuestion() {
    const table = selectedTables[Math.floor(Math.random() * selectedTables.length)];
    const number = Math.floor(Math.random() * 10) + 1;
    currentQuestion = { table, number, answer: table * number };

    const emojis = ['🍎', '🐶', '🎈', '🍇', '🐱', '🦄', '🐼', '🚗', '🍉'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    const emojiContainer = document.getElementById('emoji-columns');
    emojiContainer.innerHTML = '';

    for (let i = 0; i < number; i++) {
        const column = document.createElement('div');
        column.classList.add('emoji-column');
        for (let j = 0; j < table; j++) {
            const emoji = document.createElement('span');
            emoji.textContent = randomEmoji;
            column.appendChild(emoji);
        }
        emojiContainer.appendChild(column);
    }

    document.getElementById('question').textContent = `¿Cuánto es ${table} x ${number}?`;
    document.getElementById('answer').value = '';
    document.getElementById('result').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const result = document.getElementById('result');

    if (userAnswer === currentQuestion.answer) {
        result.textContent = '¡Correcto! 🎉';
        result.className = 'correct';
        launchConfetti();
    } else {
        result.textContent = `Incorrecto. La respuesta correcta era ${currentQuestion.answer}.`;
        result.className = 'incorrect';
    }

    result.classList.remove('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
}

function initConfetti() {
    confetti = new ConfettiGenerator({ target: 'confetti-canvas', max: 150, size: 1.2 });
}

function launchConfetti() {
    confetti.render();
    setTimeout(() => confetti.clear(), 2000);
}
