// housekeeping
var startScreen = document.querySelector('.start');
var quizScreen = document.querySelector('.quiz');
var scoreScreen = document.querySelector('.score');

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

function init() {
    showStart();
}

init();