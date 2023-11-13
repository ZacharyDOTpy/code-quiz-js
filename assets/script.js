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

var countdown = document.querySelector('.timer');
var timeLeft = 60;


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
    showQuestion1();
    startTimer();
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

// created timer function for quiz countdown
function startTimer() {
    var interval = setInterval(function() {
        timeLeft--;
        countdown.textContent = "Quiz Timer: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(interval);
            showEnd();
        }
        
    },1000)
}
//  created answer variables and functions
var question1Answer = document.getElementById('correct-answer1');
var question2Answer = document.getElementById('correct-answer2');
var question3Answer = document.getElementById('correct-answer3');
var score = 0;

var q1answer = document.getElementById('question1');
q1answer.addEventListener('click', userAnswer1);
var q1AnswerConfirm;

function userAnswer1(event) {
    event.preventDefault();
    var answer = event.target;
    console.log(answer);

    var result = event.target.id;

    if (result === question1Answer.id) {
        q1AnswerConfirm = "Correct";
        console.log(q1AnswerConfirm);
        score = score + 33
    } else {
        q1AnswerConfirm = "Wrong";
        console.log(q1AnswerConfirm);
        timeLeft = timeLeft - 15;
    }

    console.log("Score: " + score);
    showQuestion2();
};

var q2answer = document.getElementById('question2');
q2answer.addEventListener('click', userAnswer2);
var q2AnswerConfirm;

function userAnswer2(event) {
    event.preventDefault();
    var answer = event.target;
    console.log(answer);

    var result = event.target.id;

    if (result === question2Answer.id) {
        q2AnswerConfirm = "Correct";
        console.log(q2AnswerConfirm);
        score = score + 33
    } else {
        q2AnswerConfirm = "Wrong";
        console.log(q2AnswerConfirm);
        timeLeft = timeLeft - 15;
    }

    console.log("Score: " + score);
    showQuestion3();
};

var q3answer = document.getElementById('question3');
q3answer.addEventListener('click', userAnswer3);
var q3AnswerConfirm;

function userAnswer3(event) {
    event.preventDefault();
    var answer = event.target;
    console.log(answer);

    var result = event.target.id;

    if (result === question3Answer.id) {
        q3AnswerConfirm = "Correct";
        console.log(q3AnswerConfirm);
        score = score + 33
    } else {
        q3AnswerConfirm = "Wrong";
        console.log(q3AnswerConfirm);
        timeLeft = timeLeft - 15;
    }

    console.log("Score: " + score);
    showEnd();
};

function init() {
    showStart();
}

init();