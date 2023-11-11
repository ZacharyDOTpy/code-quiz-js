// housekeeping
var startScreen = document.querySelector('.start');
var quizScreen = document.querySelector('.quiz');
var endScreen = document.querySelector('.end');
var scoreScreen = document.querySelector('.score');
var startButton = document.querySelector('#start-btn');
var scoreButton = document.querySelector('#score-btn');

// added funtions for init|startScreen|quizScreen|endScreen|scoreScreen
function showStart() {
    startScreen.style.display = null;
    quizScreen.style.display = "none";
    endScreen.style.display = "none";
    scoreScreen.style.display = "none";
}

function showQuiz() {
    startScreen.style.display = "none";
    quizScreen.style.display = null;
    endScreen.style.display = "none";
    scoreScreen.style.display = "none";
}

function showEnd() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    endScreen.style.display = null;
    scoreScreen.style.display = "none";
}

function showScore() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    endScreen.style.display = "none";
    scoreScreen.style.display = null;
}

// added start-btn var and event listener
startButton.addEventListener('click', function(event) {
    showQuiz();
});

// added event listener to quizScreen buttons
quizScreen.addEventListener('click', function(event) {
    if (event.target.matches('button')) {
        showEnd();
    }
});
// added event listener to endScreen buttons
endScreen.addEventListener('click', function(event) {
    if (event.target.matches('button')) {
        showScore();
    }
});
// added event listener to highscore button
scoreButton.addEventListener('click', function(event) {
    showScore();
});

function init() {
    showStart();
}

init();