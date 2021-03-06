const startButtonEl = document.getElementById("start-btn");

const questionSpace = document.getElementById("question-container");
const questionText = document.getElementById("question-text")
const answerSet = document.getElementById("answer-buttons");
const instructions = document.getElementById("quiz-instr");
const scoreField = document.getElementById("score-field");

const timerEl = document.getElementById("countdown");


//WHEN the game is over, THEN I can save my initials and score
var highscore = [];
var playerScore = 0;
var getScores = JSON.parse(window.localStorage.getItem("HighScores")) || [];  // -> key: "HighScores" : "["{ "initals": "string" }"]"
console.log(getScores);  // --> JS Object    getScores:[{ initals: "string"}]
console.log(typeof getScores);

// IF "HighScores" does NOT exist in LocalStorage we have to create it first.
//  localStorage.setItem("Highscores", "[]");

function saveHighScore(event) {
    event.preventDefault;

    var pInfo = {
        pName: prompt("What's your name?"),
        pScore: playerScore,
    }
    while (pInfo.pName === "" || pInfo.pName === null) {
        window.alert("Please provide a valid response! Please try again.");
        return saveHighScore();
    };

    console.log(pInfo);
    // Let's Grab our DATA first 
    let currentScores = JSON.parse(localStorage.getItem("HighScores"));
    // Update the DATA (as a JS object)
    currentScores.push(pInfo);
    // Update the local storage(DOM DATA -> String)
    window.localStorage.setItem("HighScores", JSON.stringify(currentScores));

    showHighScores();
};

function showHighScores() {
    // Verify we have the data
    let current = JSON.parse(localStorage.getItem("HighScores"));
    console.log(current);
    console.log(typeof current);

    scoreField.classList.remove("hide");
    var list = document.getElementById("score-list");
    scoreField.innerHTML = "<h2 class='score-title'>High Scores</h2>"
    var playerDisplay = document.createElement("div");
    playerDisplay.className = "player-container";

    for (i = 0; i < current.length; i++) {
        const playerListEl = document.createElement("li");
        playerListEl.className = "player-score";
        playerListEl.textContent = current[i].pName + " -- " + current[i].pScore;
        playerDisplay.appendChild(playerListEl);
        scoreField.appendChild(playerDisplay)
       //return getScores;
    }
};
// console.log(getScores);

var saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', saveHighScore);


var endgame = function () {
    if (counter === 0) {
        questionSpace.classList.add("hide");
        answerSet.classList.add("hide");

    };
}

var counter = 60;

const showTimer = function () {
    // WHEN all questions are answered or the timer reaches 0, THEN the game is over
    function clearTimer() {
        clearInterval(timer);
        endgame();
        showHighScores();
    }
    function countdown() {
        counter--;
        timerEl.innerText = "Time Left: " + counter;
        if (counter <= 0 || questionCounter > 9) {
            questionSpace.innerText = "";
            answerSet.innerText = "";
            timerEl.innerHTML = "<h3 class = 'end-message'>Game Over!</h3> <p>Click 'Save Score' button below to save your score or refresh your page to try again!</p>"; clearTimer();
        }
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
        question: "Which of the following will write the message ???Hello world!??? in an alert box?",
        answers: [
            { text: "A - alertBox(???Hello world!???);", correct: "false" },
            { text: "B - alert(Hello world!);", correct: "false" },
            { text: "C - msgAlert(???Hello world!???);", correct: "false" },
            { text: "D - alert(???Hello world!???);", correct: "true" },
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
    {
        question: "What is the correct syntax for referring to an external script called 'abc.js'?",
        answers: [
            { text: "A - <script src='abc.js'>", correct: "true" },
            { text: "B- <script href='abc.js'>", correct: "false" },
            { text: "C - <script name='abc.js'>", correct: "false" },
            { text: "D - None of the above", correct: "false" },
        ]
    },
    {
        question: "Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?",
        answers: [
            { text: "A - ondblclick", correct: "false" },
            { text: "B - onfocus", correct: "false" },
            { text: "C - onclick", correct: "false" },
            { text: "D - onblur", correct: "true" },
        ]
    },
    {
        question: "Using _______ statement is how you test for a specific condition.",
        answers: [
            { text: "A - Select", correct: "false" },
            { text: "B - Switch", correct: "false" },
            { text: "C - If", correct: "true" },
            { text: "D - For", correct: "false" },
        ]
    },
    {
        question: "Which of the following function of String object combines the text of two strings and returns a new string?",
        answers: [
            { text: "A - concat()", correct: "true" },
            { text: "B - merge()", correct: "false" },
            { text: "C - append()", correct: "false" },
            { text: "D - add()", correct: "false" },
        ]
    },
    {

        question: "How can you add a comment in a JavaScript?",
        answers: [
            { text: "A - 'This is a comment'", correct: "false" },
            { text: "B - //This is a comment", correct: "true" },
            { text: "C - <!--This is a comment-->", correct: "false" },
            { text: "D - *This is a comment*", correct: "false" },
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

        //checks if selected answer is correct
        function checkAnswers(event) {
            playerChoice = event.target.name;
            if (playerChoice === "true") {
                playerScore = playerScore + 10; nextQuestion()
                // console.log(playerScore);
                //  WHEN I answer a question incorrectly, THEN time is subtracted from the clock
            } else if (playerChoice === "false") {
                ;
                counter = counter - 10;
                nextQuestion()
            }
        };
        answerButton.addEventListener('click', checkAnswers)
    };
};

// WHEN I answer a question, THEN I am presented with another question
var nextQuestion = function () {
    questionCounter++;
    answerSet.innerText = ""
    showQuestion();
};


var startGame = function () {
    startButtonEl.classList.add("hide");
    questionSpace.classList.remove("hide");
    timerEl.classList.remove("hide");
    instructions.classList.add("hide");
    showTimer();
    showQuestion();
    // getScores();
}



//GIVEN I am taking a code quiz, WHEN I click the Start button
startButtonEl.addEventListener("click", startGame);