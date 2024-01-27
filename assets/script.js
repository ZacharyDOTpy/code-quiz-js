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

// start quiz function
function quizStart() {
  // resets variables
  index = 0;
  score = 100;
  scoreScreen.textContent = 'Score: ' + score;

  // shows quiz screen with question and starts timer
  show('quiz');
  displayQuestion();
  timer = setInterval(decrementScore, 1000, 1);
};

// function to display each question
function displayQuestion() {
  questionsArea.innerHTML = null;

  // appends question from array to questions div
  var questionElement = document.createElement('p');
  questionElement.textContent = questions[index].question
  questionsArea.appendChild(questionElement);

  // appends answers from array to questions div
  var answer = questions[index].answers;
  for (var i = 0; i < answers.length; i++) {
    var answerElement = document.createElement('button');
    answerElement.textContent = answer[i];
    answerElement.setAttribute('style', 'display: block;');
    questionsArea.appendChild(answerElement);
  };
};

// function to decrease score based on timer
function decrementScore(value) {
  score -= value;
  scoreScreen.textContent = 'Score: ' + score;
  if (score <= 0) {
    // clears timer and shows quiz end screen
    clearInterval(timer);
    show('end');
  };
};

// function the show scores screen
function renderScores() {
  scoreList.innerHTML = '';

  // sorts scores from high to low
  highscores = highscores.sort(function(a, b){return b.score - a.score})
  // renders new scores with initials
  for (var i = 0; i < highscores.length; i++) {
    var highscore = highscores[i];

    var list = document.createElement('li');
    list.textContent = highscore.initials + ' - ' + highscore.score;
    list.setAttribute('data-index', i);

    scoreList.appendChild(list);
  };
};

// event listener for scores button & stops timer
viewScores.addEventListener('click', function() {
  if (timer) {
    clearInterval(timer);
  }
  
  show('highscores');
})

// event listener for start quiz button
strtBtn.addEventListener('click', function() {
  quizStart();
})

// event listener for answer buttons
quizScreen.addEventListener('click', function(event) {
  if (event.target.matches('button')) {
    
    if (event.target.textContent != questions[index]['answers'][questions[index]['correctAnswer']]) {
      decrementScore(15);
      feedback.textContent = 'INCORRECT';
      setTimeout(() => {feedback.textContent = ''}, 1000);
    } else {
      feedback.textContent = 'CORRECT';
      setTimeout(() => {feedback.textContent = ''}, 1000);
    };

    // displays the next question if there is one
    index++;
    if (questions[index]) {
      displayQuestion();
      return;
    };

    // stops timer and shows end screen if no more questions
    clearInterval(timer);
    show('end');
  };
});