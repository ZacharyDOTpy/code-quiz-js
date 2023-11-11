// housekeeping
var startScreen = document.querySelector('.start');
var quizScreen = document.querySelector('.quiz');
var scoreScreen = document.querySelector('.score');
var startButton = document.querySelector('#start-btn');

// added funtions for init|startScreen|quizScreen|scoreScreen
function showStart() {
    startScreen.style.display = null;
    quizScreen.style.display = "none";
    scoreScreen.style.display = "none";
}

function showQuiz() {
    startScreen.style.display = "none";
    quizScreen.style.display = null;
    scoreScreen.style.display = "none";
}

function showScore() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    scoreScreen.style.display = null;
}

// added start-btn var and event listener
startButton.addEventListener('click', function(event) {
    showQuiz();
});

// added event listener to quizScreen buttons
quizScreen.addEventListener('click', function(event) {
    if (event.target.matches('button')) {
        showScore();
    }
});

function init() {
    showStart();
}

init();