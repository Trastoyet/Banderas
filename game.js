// Variables globales
let currentMode = '';
let currentGameType = 'flags'; // 'flags' o 'capitals'
let currentCountry = null;
let currentOptions = [];
let score = 0;
let correctAnswers = 0;
let attempts = 0;
let selectedRegion = 'all';
let availableCountries = [];

// Elementos del DOM
const mainMenu = document.getElementById('main-menu');
const gameContainer = document.getElementById('game-container');

// Botones de tipo de juego
const flagsGameBtn = document.getElementById('flags-game');
const capitalsGameBtn = document.getElementById('capitals-game');
const flagsOptionsDiv = document.getElementById('flags-options');
const capitalsOptionsDiv = document.getElementById('capitals-options');

// Botones de modo de juego - Banderas
const optionModeBtn = document.getElementById('option-mode');
const writeModeBtn = document.getElementById('write-mode');

// Botones de modo de juego - Capitales
const capitalsOptionModeBtn = document.getElementById('capitals-option-mode');
const capitalsWriteModeBtn = document.getElementById('capitals-write-mode');

const difficultySelector = document.getElementById('difficulty');
const flagImage = document.getElementById('flag-image');
const optionsContainer = document.getElementById('options-container');
const writeContainer = document.getElementById('write-container');
const countryInput = document.getElementById('country-input');
const submitAnswerBtn = document.getElementById('submit-answer');
const resultMessage = document.getElementById('result-message');
const nextFlagBtn = document.getElementById('next-flag');
const backToMenuBtn = document.getElementById('back-to-menu');
const scoreElement = document.getElementById('score');
const correctAnswersElement = document.getElementById('correct-answers');
const attemptsElement = document.getElementById('attempts');

// Inicializar el juego
function initGame() {
    // Event listeners para los botones de tipo de juego
    flagsGameBtn.addEventListener('click', () => switchGameType('flags'));
    capitalsGameBtn.addEventListener('click', () => switchGameType('capitals'));
    
    // Event listeners para los botones de modo de juego - Banderas
    optionModeBtn.addEventListener('click', () => startGame('options'));
    writeModeBtn.addEventListener('click', () => startGame('write'));
    
    // Event listeners para los botones de modo de juego - Capitales
    capitalsOptionModeBtn.addEventListener('click', () => startGame('options'));
    capitalsWriteModeBtn.addEventListener('click', () => startGame('write'));
    
    // Event listener para el selector de dificultad
    difficultySelector.addEventListener('change', (e) => {
        selectedRegion = e.target.value;
    });
    
    // Event listeners para los botones del juego
    submitAnswerBtn.addEventListener('click', checkWrittenAnswer);
    nextFlagBtn.addEventListener('click', loadNextItem);
    backToMenuBtn.addEventListener('click', goBackToMenu);
    
    // Event listener para permitir enviar respuesta con Enter en el modo escritura
    countryInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkWrittenAnswer();
        }
    });
}

// Cambiar entre juego de banderas y capitales
function switchGameType(gameType) {
    currentGameType = gameType;
    
    // Actualizar clases de los botones
    if (gameType === 'flags') {
        flagsGameBtn.classList.add('active');
        capitalsGameBtn.classList.remove('active');
        flagsOptionsDiv.style.display = 'flex';
        capitalsOptionsDiv.style.display = 'none';
        nextFlagBtn.textContent = 'Siguiente Bandera';
    } else { // gameType === 'capitals'
        flagsGameBtn.classList.remove('active');
        capitalsGameBtn.classList.add('active');
        flagsOptionsDiv.style.display = 'none';
        capitalsOptionsDiv.style.display = 'flex';
        nextFlagBtn.textContent = 'Siguiente Capital';
    }
}

// Iniciar el juego en el modo seleccionado
function startGame(mode) {
    currentMode = mode;
    score = 0;
    correctAnswers = 0;
    attempts = 0;
    updateScoreDisplay();
    
    // Ocultar menú principal y mostrar el contenedor del juego
    mainMenu.style.display = 'none';
    gameContainer.style.display = 'flex';
    
    // Configurar el modo de juego
    if (mode === 'options') {
        optionsContainer.style.display = 'flex';
        writeContainer.style.display = 'none';
    } else { // mode === 'write'
        optionsContainer.style.display = 'none';
        writeContainer.style.display = 'flex';
    }
    
    // Cargar países según la región seleccionada
    availableCountries = getCountriesByRegion(selectedRegion);
    
    // Cargar el primer elemento (bandera o capital)
    loadNextItem();
}

// Cargar el siguiente elemento (bandera o capital) aleatorio
function loadNextItem() {
    // Limpiar mensajes y estado anterior
    resultMessage.textContent = '';
    resultMessage.className = 'result-message';
    optionsContainer.innerHTML = '';
    countryInput.value = '';
    countryInput.disabled = false;
    submitAnswerBtn.disabled = false;
    
    // Seleccionar un país aleatorio
    const randomIndex = Math.floor(Math.random() * availableCountries.length);
    currentCountry = availableCountries[randomIndex];
    
    // Cargar la imagen según el tipo de juego
    if (currentGameType === 'flags') {
        flagImage.src = getFlagUrl(currentCountry.code);
        flagImage.alt = `Bandera de ${currentCountry.name}`;
        countryInput.placeholder = 'Escribe el nombre del país';
    } else { // currentGameType === 'capitals'
        flagImage.src = getCapitalImageUrl(currentCountry.code);
        flagImage.alt = `Capital de ${currentCountry.name}`;
        countryInput.placeholder = 'Escribe el nombre de la capital';
    }
    
    // Si estamos en modo opciones, generar las opciones
    if (currentMode === 'options') {
        generateOptions();
    }
}

// Generar opciones para el modo de opciones
function generateOptions() {
    // Crear un array con el país correcto y dos países aleatorios diferentes
    currentOptions = [currentCountry];
    
    // Añadir dos países aleatorios diferentes al actual
    while (currentOptions.length < 3) {
        const randomIndex = Math.floor(Math.random() * availableCountries.length);
        const randomCountry = availableCountries[randomIndex];
        
        // Verificar que no se repita el país
        if (!currentOptions.some(country => country.code === randomCountry.code)) {
            currentOptions.push(randomCountry);
        }
    }
    
    // Mezclar las opciones
    shuffleArray(currentOptions);
    
    // Crear los botones de opciones
    currentOptions.forEach(country => {
        const optionButton = document.createElement('button');
        optionButton.className = 'option-button';
        
        // Mostrar el nombre del país o la capital según el tipo de juego
        if (currentGameType === 'flags') {
            optionButton.textContent = country.name;
        } else { // currentGameType === 'capitals'
            optionButton.textContent = country.capital;
        }
        
        optionButton.dataset.code = country.code;
        optionButton.addEventListener('click', () => checkOptionAnswer(optionButton));
        optionsContainer.appendChild(optionButton);
    });
}

// Verificar respuesta en el modo de opciones
function checkOptionAnswer(selectedOption) {
    attempts++;
    updateScoreDisplay();
    
    const selectedCode = selectedOption.dataset.code;
    const isCorrect = selectedCode === currentCountry.code;
    
    // Deshabilitar todos los botones de opciones
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.disabled = true;
        
        // Marcar la opción correcta en verde
        if (button.dataset.code === currentCountry.code) {
            button.classList.add('correct');
        }
        // Si la seleccionada es incorrecta, marcarla en rojo
        else if (button === selectedOption) {
            button.classList.add('incorrect');
        }
    });
    
    // Actualizar puntuación y mostrar mensaje
    if (isCorrect) {
        score += 10;
        correctAnswers++;
        resultMessage.textContent = '¡Correcto!';
        resultMessage.classList.add('correct-message');
    } else {
        // Mostrar mensaje según el tipo de juego
        if (currentGameType === 'flags') {
            resultMessage.textContent = `Incorrecto. La respuesta correcta es: ${currentCountry.name}`;
        } else { // currentGameType === 'capitals'
            resultMessage.textContent = `Incorrecto. La respuesta correcta es: ${currentCountry.capital}`;
        }
        resultMessage.classList.add('incorrect-message');
    }
    
    updateScoreDisplay();
}

// Verificar respuesta en el modo de escritura
function checkWrittenAnswer() {
    const userAnswer = countryInput.value.trim().toLowerCase();
    
    if (userAnswer === '') {
        return; // No hacer nada si el campo está vacío
    }
    
    attempts++;
    updateScoreDisplay();
    
    // Deshabilitar el input y el botón
    countryInput.disabled = true;
    submitAnswerBtn.disabled = true;
    
    // Determinar la respuesta correcta según el tipo de juego
    let correctAnswer;
    if (currentGameType === 'flags') {
        correctAnswer = currentCountry.name;
    } else { // currentGameType === 'capitals'
        correctAnswer = currentCountry.capital;
    }
    
    // Comprobar si la respuesta es correcta (ignorando mayúsculas/minúsculas y acentos)
    const normalizedUserAnswer = normalizeText(userAnswer);
    const normalizedCorrectAnswer = normalizeText(correctAnswer);
    
    const isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;
    
    // Actualizar puntuación y mostrar mensaje
    if (isCorrect) {
        score += 15; // Más puntos en el modo escritura por ser más difícil
        correctAnswers++;
        resultMessage.textContent = '¡Correcto!';
        resultMessage.classList.add('correct-message');
    } else {
        resultMessage.textContent = `Incorrecto. La respuesta correcta es: ${correctAnswer}`;
        resultMessage.classList.add('incorrect-message');
    }
    
    updateScoreDisplay();
}

// Actualizar la visualización de la puntuación
function updateScoreDisplay() {
    scoreElement.textContent = score;
    correctAnswersElement.textContent = correctAnswers;
    attemptsElement.textContent = attempts;
}

// Volver al menú principal
function goBackToMenu() {
    gameContainer.style.display = 'none';
    mainMenu.style.display = 'flex';
}

// Función para normalizar texto (eliminar acentos y convertir a minúsculas)
function normalizeText(text) {
    return text.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
        .replace(/[^a-z0-9\s]/g, ""); // Eliminar caracteres especiales
}

// Función para mezclar un array (algoritmo Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Inicializar el juego cuando se cargue la página
document.addEventListener('DOMContentLoaded', initGame);