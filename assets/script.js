// housekeeeping
var viewScores = document.querySelector("#view-score-screen");
var displayScores = document.querySelector("#score");
var feedback = document.querySelector("#feedback");

var startScreen = document.querySelector(".start");
var startBtn = document.querySelector("#start-btn");

var quizScreen = document.querySelector(".quiz");
var questionsContainer = document.querySelector("#questions");

var endScreen = document.querySelector(".end");
var initialsField = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit-btn");

var scoresScreen = document.querySelector(".score");
var scoresList = document.querySelector("#score-list");
var clearBtn = document.querySelector("#clear-scores");
var retryBtn = document.querySelector("#retry-btn");

// questions array
var questions = [
  {
    question: "How many moon does Jupiter have?",
    answers: ["60", "63", "95", "12"],
    correctAnswer: 2,
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: ["Mercury", "Neptune", "Mars", "Venus"],
    correctAnswer: 0,
  },
  {
    question: "How many gas giants are in our solar system?",
    answers: ["2", "4", "3", "0"],
    correctAnswer: 1,
  },
  {
    question:
      "How many minutes does it take light to travel from the Sun to Earth?",
    answers: ["0", "12", "7", "8"],
    correctAnswer: 3,
  },
  {
    question: "How many planets have rings in our solar system?",
    answers: ["2", "4", "1", "0"],
    correctAnswer: 1,
  },
];
var index = 0;

var score = 100;
var highscores = [];
var timer;

// function to show each screen of program
const show = (screen) => {
  startScreen.style.display = "none";
  quizScreen.style.display = "none";
  endScreen.style.display = "none";
  scoresScreen.style.display = "none";

  document.querySelector("." + screen).style.display = null;
}

// function to start quiz and reset variables
const startQuiz = () => {
  index = 0;
  score = 100;
  displayScores.textContent = "Score: " + score;

  // shows quiz screen & displays first question
  show("quiz");
  displayQuestion();
  timer = setInterval(decreaseScore, 1000, 1);
}

// function to display each question in questions array
const displayQuestion = () => {
  questionsContainer.innerHTML = null;

  // appends questions from questions array to container
  var questionElement = document.createElement("p");
  questionElement.textContent = questions[index].question;
  questionsContainer.appendChild(questionElement);

  // appends answers from questions array to container
  var answers = questions[index].answers;
  for (var i = 0; i < answers.length; i++) {
    var answerElement = document.createElement("button");
    answerElement.textContent = answers[i];
    answerElement.setAttribute("style", "display: block;");
    questionsContainer.appendChild(answerElement);
  }
}

// function to decrease score based on timer
const decreaseScore = (amount) => {
  score -= amount;
  displayScores.textContent = "Score: " + score;
  if (score <= 0) {
    clearInterval(timer);
    show("end");
  }
}

// function to display highscores
const renderScores = () => {
  scoresList.innerHTML = "";

  // displays scores from high to low
  highscores = highscores.sort((a, b) => {
    return b.score - a.score;
  });
  // creates list of scores & appends them
  for (var i = 0; i < highscores.length; i++) {
    var highscore = highscores[i];

    var li = document.createElement("li");
    li.textContent = highscore.initials + " - " + highscore.score;
    li.setAttribute("data-index", i);

    scoresList.appendChild(li);
  }
}
// event listener for highscores button
viewScores.addEventListener("click", () => {
  if (timer) {
    clearInterval(timer);
  }
  show("score");
});
// event listener for start button
startBtn.addEventListener("click", () => {
  startQuiz();
});
// event listener for answer buttons
quizScreen.addEventListener("click", (event) => {
  if (event.target.matches("button")) {
    if (
      event.target.textContent !=
      questions[index]["answers"][questions[index]["correctAnswer"]]
    ) {
      // decreases score if wrong answer
      decreaseScore(15);
      feedback.textContent = "INCORRECT";
      setTimeout(() => {
        feedback.textContent = "";
      }, 1000);
    } else {
      feedback.textContent = "CORRECT";
      setTimeout(() => {
        feedback.textContent = "";
      }, 1000);
    }

    // displays next question
    index++;
    if (questions[index]) {
      displayQuestion();
      return;
    }

    // clears timer and shows end screen if no more questions
    clearInterval(timer);
    show("end");
  }
});
// event listener for submit button
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  highscores.push({
    initials: initialsField.value,
    score: score,
  });

  initialsField.value = "";

  localStorage.setItem("score", JSON.stringify(highscores));
  show("score");
  renderScores();
});
// event listener for clear scores button
clearBtn.addEventListener("click", () => {
  highscores = [];
  localStorage.removeItem("score");
  renderScores();
});
// event listener for retry button
retryBtn.addEventListener("click", () => {
  show("start");
});

const init = () => {
  var storedHighscores = JSON.parse(localStorage.getItem("scores"));
  if (storedHighscores !== null) {
    highscores = storedHighscores;
  }

  show("start");
}

init();
