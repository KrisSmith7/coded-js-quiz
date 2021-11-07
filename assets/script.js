const startButtonEl = document.getElementById("start-btn");

const questionSpace = document.getElementById("question-container");
const questionText = document.getElementById("question-text")
const answerSet = document.getElementById("answer-buttons");
const instructions = document.getElementById("quiz-instr");
const scoreField = document.getElementById("score-field");

const timerEl = document.getElementById("countdown");


//WHEN the game is over, THEN I can save my initials and score
var highscore = []

var showHighScores = function () {
    var highScoreList = document.getElementById("score-field");
    var playerInfo = document.createElement("li");
    playerInfo.className = "player-score";
    playerInfoName = document.querySelector("input[name='player-name']");
    highScoreList.appendChild(playerInfo);
    scoreField.classList.remove("hide");

    function setScores() { localStorage.setItem(playerInfo, highscore) };
}

function getScores() { JSON.parse(window.localStorage.getItem(playerInfo, highscores)) || [] };

var counter = 60;

const showTimer = function () {
    // WHEN all questions are answered or the timer reaches 0
    // THEN the game is over
    function endgame() {
        clearInterval(timer);
        showHighScores();
    }
    function countdown() {
        counter--;
        timerEl.innerText = "Time Left: " + counter;
        if (counter <= 0 ) { timerEl.innerHTML = "<h3>'Game Over'</h3>"; endgame(); }
    }
    var timer = setInterval(countdown, 1000);
};


const questions = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        answers: [
            { text: "A - forEach()", correct: "true" },
            { text: "B - while()", correct: "false" },
            { text: "C - loop()", correct: "false" },
            { text: "D - array()", correct: "false" },
        ]
    },

    {
        question: "Which built-in method returns the calling string value converted to upper case?",
        answers: [
            { text: "A - changeCase(case)", correct: "false" },
            { text: "B - toUpper()", correct: "false" },
            { text: "C - toUpperCase()", correct: "true" },
            { text: "D - allCase(upper)", correct: "false" },
        ]
    },
    {
        question: "JavaScript is a ___ -side programming language.",
        answers: [
            { text: "A - Client", correct: "false" },
            { text: "B - Server", correct: "false" },
            { text: "C - Both", correct: "true" },
            { text: "D - None", correct: "false" },
        ]
    },
    {
        question: "Which of the following will write the message “Hello world!” in an alert box?",
        answers: [
            { text: "A - alertBox(“Hello world!”);", correct: "false" },
            { text: "B - alert(Hello world!);", correct: "false" },
            { text: "C - msgAlert(“Hello world!”);", correct: "false" },
            { text: "D - alert(“Hello world!”);", correct: "true" },
        ]
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        answers: [
            { text: "A - min(x,y)", correct: "false" },
            { text: "B - Math.min(x,y)", correct: "true" },
            { text: "C - Math.min(xy)", correct: "false" },
            { text: "D - min(xy)", correct: "false" },
        ]
    },
]

var questionCounter = 0


var showQuestion = function () {
    // for loop for length of Question array 
    for (let i = 0; i < questions[questionCounter].answers.length; i++) {
        questionText.innerText = questions[questionCounter].question;
        var answerButton = document.createElement("button");
        answerButton.className = "answer-choice btn";
        answerButton.innerText = questions[questionCounter].answers[i].text;
        answerButton.name = questions[questionCounter].answers[i].correct;
        answerSet.appendChild(answerButton);

        //  checks if selected answer is correct
        function checkAnswers(event) {
            playerChoice = event.target.name;
            if (playerChoice === "true") {questionText.innerText = "YES!"; nextQuestion()}
            //  WHEN I answer a question incorrectly, THEN time is subtracted from the clock
            else if (playerChoice === "false") {
                questionText.innerText = "Incorrect!";
                counter = counter - 10;
                nextQuestion()
                   }
        };
        answerButton.addEventListener('click', checkAnswers)
    };
};

var nextQuestion = function () {
        questionCounter++;
        questionText.innerText = questions[questionCounter].question;
        answerSet.innerText = ""
        showQuestion();
        if (questionCounter > questions.answers.length) {endgame();};
    };





var startGame = function () {
    startButtonEl.classList.add("hide");
    questionSpace.classList.remove("hide");
    timerEl.classList.remove("hide");
    instructions.classList.add("hide");
    showTimer();
    showQuestion();
}



//GIVEN I am taking a code quiz, WHEN I click the Start button
startButtonEl.addEventListener("click", startGame);




/*
WHEN I answer a question
THEN I am presented with another question*/