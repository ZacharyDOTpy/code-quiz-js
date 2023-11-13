// housekeeping
var startScreen = document.querySelector('.start');
var quizScreen = document.querySelector('.quiz');
var endScreen = document.querySelector('.end');
var scoreScreen = document.querySelector('.score');

var questionOne = document.getElementById('question1');
var questionTwo = document.getElementById('question2');
var questionThree = document.getElementById('question3');

var startButton = document.querySelector('#start-btn');
var scoreButton = document.querySelector('#score-btn');
var submitButton = document.querySelector('#submit-btn');


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

// display questions
function showQuestion1() {
    questionOne.style.display = null;
    questionTwo.style.display = "none";
    questionThree.style.display = "none";
}

function showQuestion2() {
    questionOne.style.display = "none";
    questionTwo.style.display = null;
    questionThree.style.display = "none";
}

function showQuestion3() {
    questionOne.style.display = "none";
    questionTwo.style.display = "none";
    questionThree.style.display = null;
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