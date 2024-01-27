var viewScores = document.querySelector('#view-score-screen');
var displayScore = document.querySelector('#score');
var feedback = document.querySelector('#feedback');

var strtScreen = document.querySelector('.start');
var strtBtn = document.querySelector('#start-btn');

var quizScreen = document.querySelector('.quiz');
var questionsArea = document.querySelector('#questions');

var endScreen = document.querySelector('.end');
var initialsForm = document.querySelector('#initials');
var submitBtn = document.querySelector('#submit-btn');

var scoreScreen = document.querySelector('.score');
var scoreList = document.querySelector('#score-list');
var clearBtn = document.querySelector('#clear-scores');
var retryBtn = document.querySelector('#retry-btn');

var questions = [
  {
    "question": "How many moon does Jupiter have?",
    "answers": ["60", "63", "95", "12"],
    "correctAnswer": 2
  },
  {
    "question": "Which planet is closest to the Sun?",
    "answers": ["Mercury", "Neptune", "Mars", "Venus"],
    "correctAnswer": 0
  },
  {
    "question": "How many gas giants are in our solar system?",
    "answers": ["2", "4", "3", "0"],
    "correctAnswer": 1
  },
  {
    "question": "How many minutes does it take light to travel from the Sun to Earth?",
    "answers": ["0", "12", "7", "8"],
    "correctAnswer": 3
  },
  {
    "question": "How many planets have rings in our solar system?",
    "answers": ["2", "4", "1", "0"],
    "correctAnswer": 1
  },
];
var index = 0;

var score = 100;
var highscores = [];
var timer;

// function to display each screen of the program
function show(screen) {
  strtScreen.style.display = "none";
  quizScreen.style.display = "none";
  endScreen.style.display = "none";
  scoreScreen.style.display = "none";

  document.querySelector('.' + screen).style.display = null;
};

function quizStart() {
  index = 0;
  score = 100;
  scoreScreen.textContent = 'Score: ' + score;

  show('quiz');
  displayQuestion();
  timer = setInterval(decrementScore, 1000, 1);
};

function displayQuestion() {
  questionsArea.innerHTML = null;

  var questionElement = document.createElement('p');
  questionElement.textContent = questions[index].question
  questionsArea.appendChild(questionElement);

  var answer = questions[index].answers;
  for (var i = 0; i < answers.length; i++) {
    var answerElement = document.createElement('button');
    answerElement.textContent = answer[i];
    answerElement.setAttribute('style', 'display: block;');
    questionsArea.appendChild(answerElement);
  };
};