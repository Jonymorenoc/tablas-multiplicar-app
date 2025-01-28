document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('submit-btn').addEventListener('click', checkAnswer);
document.getElementById('next-btn').addEventListener('click', generateQuestion);

// ----------------------
// Fix for the dropdown
// ----------------------
const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownContent = document.getElementById('dropdown-content');

dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('hidden');
});

let selectedTables = [];
let currentQuestion = {};
let confetti;

function startQuiz() {
    selectedTables = Array.from(document.querySelectorAll('.table-select:checked'))
        .map(input => parseInt(input.value));
    if (selectedTables.length === 0) {
        alert('Selecciona al menos una tabla.');
        return;
    }
    document.getElementById('question-container').classList.remove('hidden');
    generateQuestion();
}

function generateQuestion() {
    const table = selectedTables[Math.floor(Math.random() * selectedTables.length)];
    const number = Math.floor(Math.random() * 10) + 1;
    currentQuestion = {
        table,
        number,
        answer: table * number
    };

    const emojis = ['🍎', '🐶', '🎈', '🍇', '🐱', '🦄', '🐼', '🚗', '🍉'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    const emojiContainer = document.getElementById('emoji-rows');
    emojiContainer.innerHTML = '';

    // Create 'table' rows, each row has 'number' emojis
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
    document.getElementById('answer').value = ''; // Clear previous answer
    document.getElementById('result').classList.add('hidden'); // Hide previous result
    document.getElementById('next-btn').classList.add('hidden');
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const resultEl = document.getElementById('result');
    
    if (userAnswer === currentQuestion.answer) {
        resultEl.textContent = '¡Correcto! 🎉';
    } else {
        resultEl.textContent = `Incorrecto. La respuesta era ${currentQuestion.answer}.`;
    }
    
    resultEl.classList.remove('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
}
