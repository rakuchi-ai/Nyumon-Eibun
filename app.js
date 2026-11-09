// Application State
let currentQuestions = [];
let currentIndex = 0;
let stockList = JSON.parse(localStorage.getItem('flashcard_stock')) || [];

// DOM Elements
const menuScreen = document.getElementById('menu-screen');
const cardScreen = document.getElementById('card-screen');
const resultScreen = document.getElementById('result-screen');

const homeBtn = document.getElementById('home-btn');
const stockModeBtn = document.getElementById('stock-mode-btn');
const stockCountSpan = document.getElementById('stock-count');
const rangeGrid = document.getElementById('range-grid');

const progressBar = document.getElementById('progress-bar');
const cardCounter = document.getElementById('card-counter');
const interruptBtn = document.getElementById('interrupt-btn');
const flashcard = document.getElementById('flashcard');
const cardOriginal = document.getElementById('card-original');
const cardTranslation = document.getElementById('card-translation');
const cardExplanation = document.getElementById('card-explanation');
const actionButtons = document.getElementById('action-buttons');
const understandBtn = document.getElementById('understand-btn');
const restockBtn = document.getElementById('restock-btn');

const resultSummary = document.getElementById('result-summary');
const resultMenuBtn = document.getElementById('result-menu-btn');

// Initialize Menu Screen
function initMenu() {
    updateStockUI();
    renderRangeButtons();
}

function updateStockUI() {
    stockCountSpan.textContent = stockList.length;
    if (stockList.length === 0) {
        stockModeBtn.disabled = true;
    } else {
        stockModeBtn.disabled = false;
    }
}

function renderRangeButtons() {
    rangeGrid.innerHTML = '';
    const total = sentencesData.length;
    const step = 8;
    
    for (let i = 0; i < total; i += step) {
        const start = i + 1;
        const end = Math.min(i + step, total);
        const btn = document.createElement('button');
        btn.className = 'range-btn';
        btn.textContent = `${start} ~ ${end}`;
        btn.addEventListener('click', () => startSession(sentencesData.slice(i, end)));
        rangeGrid.appendChild(btn);
    }
}

// Start Learning Session
function startSession(questions) {
    currentQuestions = questions;
    currentIndex = 0;
    
    menuScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    cardScreen.classList.remove('hidden');
    homeBtn.classList.remove('hidden');
    
    showCard();
}

// Show Current Card
function showCard() {
    if (currentIndex >= currentQuestions.length) {
        finishSession();
        return;
    }

    const q = currentQuestions[currentIndex];
    
    // Reset flip
    flashcard.classList.remove('is-flipped');
    actionButtons.classList.add('hidden');

    // Populate Data
    cardOriginal.textContent = q.original;
    cardTranslation.textContent = q.translation;
    cardExplanation.textContent = q.explanation;
    
    // Progress & Status
    const total = currentQuestions.length;
    cardCounter.textContent = `No. ${q.id} (${currentIndex + 1} / ${total})`;
    progressBar.style.width = `${((currentIndex) / total) * 100}%`;
}

// Flip Card
flashcard.addEventListener('click', () => {
    if (!flashcard.classList.contains('is-flipped')) {
        flashcard.classList.add('is-flipped');
        actionButtons.classList.remove('hidden');
    }
});

// Handle "理解した"
understandBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const currentQ = currentQuestions[currentIndex];
    // If in stock, remove it from stock
    stockList = stockList.filter(item => item.id !== currentQ.id);
    saveStock();
    nextCard();
});

// Handle "あとでまたやる"
restockBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const currentQ = currentQuestions[currentIndex];
    // Add to stock if not already present
    if (!stockList.some(item => item.id === currentQ.id)) {
        stockList.push(currentQ);
        saveStock();
    }
    nextCard();
});

function nextCard() {
    currentIndex++;
    showCard();
}

function saveStock() {
    localStorage.setItem('flashcard_stock', JSON.stringify(stockList));
    updateStockUI();
}

// Interrupt Session
interruptBtn.addEventListener('click', () => {
    returnToMenu();
});

homeBtn.addEventListener('click', () => {
    returnToMenu();
});

function returnToMenu() {
    cardScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    menuScreen.classList.remove('hidden');
    homeBtn.classList.add('hidden');
    updateStockUI();
}

// Finish Session
function finishSession() {
    progressBar.style.width = '100%';
    cardScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    resultSummary.textContent = `全${currentQuestions.length}問の演習を完了しました！ストックされている問題は${stockList.length}個です。`;
}

resultMenuBtn.addEventListener('click', returnToMenu);

// Start Stock Mode
stockModeBtn.addEventListener('click', () => {
    if (stockList.length > 0) {
        startSession([...stockList]);
    }
});

// Initialize on load
initMenu();
