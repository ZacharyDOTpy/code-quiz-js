// housekeeping
var startScreen = document.querySelector('.start');
var quizScreen = document.querySelector('.quiz');
var endScreen = document.querySelector('.end');
var scoreScreen = document.querySelector('.score');

var startButton = document.querySelector('#start-btn');
var scoreButton = document.querySelector('#score-btn');
var submitButton = document.querySelector('#submit-btn');

// added questions object array
var questions = [
    {
        question: "How many moons does Jupiter have?",
        choices: ["60", "63", "95", "12"],
        correctAnswer: 2
    },
    {
        question: "Which planet is closest to the Sun?",
        choices: ["Mercury", "Neptune", "Mars", "Venus"],
        correctAnswer: 0
    },
    {
        question: "How many gas giants are in our solar system?",
        choices: ["2", "4", "3", "0"],
        correctAnswer: 1
    },
]

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
submitButton.addEventListener('click', function(event) {
    showScore();
});

// added event listener to highscore button
scoreButton.addEventListener('click', function(event) {
    showScore();
});

function init() {
    showStart();
}

init();