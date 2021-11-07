const startButtonEl = document.getElementById("start-btn");

const questionSpace = document.getElementById("question-container");
const questionText = document.getElementById("question-text")
const answerSet = document.getElementById("answer-buttons");

const timerEl = document.getElementById("countdown");

var highscore = []

var showHighScores = function () {
    var highScoreList = document.getElementById("score-field");
    var playerInfo = document.createElement("li");
           playerInfo.className = "player-score";
             playerInfo.innerText = prompt("Enter your name:");
            highScoreList.appendChild(playerInfo);
            function setScores () {localStorage.setItem (playerInfo, highscore)};
            function getScores () {JSON.parse(window.localStorage.getItem(playerInfo, highscores)) || []};
        }


var counter = 60;

const showTimer = function () {
    // WHEN all questions are answered or the timer reaches 0
    // THEN the game is over
    function endgame() {
        clearInterval(timer);
        getScores();
        setScores ();
    }
    function countdown() {
        counter--;
        timerEl.innerText = "Time Left: " + counter;
        if (counter <= 0) {timerEl.innerHTML = "<h3>'Game Over'</h3>"; endgame(); }
    }
    var timer = setInterval(countdown, 1000);
};


const questions = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        answers: [
            { text: "A - forEach()", correct: "true"},
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
]

var questionCounter = 0

    
    var showQuestion = function () {
        // for loop for length of Question array 
        for(let i = 0 ; i < questions[questionCounter].answers.length; i++) {
            questionText.innerText = questions[questionCounter].question;
            var answerButton = document.createElement("button");
            answerButton.className = "answer-choice btn";
             answerButton.innerText = questions[questionCounter].answers[i].text;
             answerButton.value = questions[questionCounter].answers[i].correct;
             answerSet.appendChild(answerButton);
             console.dir(answerButton)
             function checkAnswers () {
                 if (answerButton.title == true) {questionText.innerText = "YES!"; }
                //  WHEN I answer a question incorrectly
                //  THEN time is subtracted from the clock
                 else if (answerButton.title == false) {questionText.innerText = "Incorrect! " + "Next question...";
                counter = counter - 10;}
             };
             answerButton.addEventListener('click', checkAnswers)
            };
        };

    function nextQuestion () {
    questionCounter++;
    questionText.innerText = questions[questionCounter].question;
            var answerButton = document.createElement("button");
            answerButton.className = "answer-choice btn";
             answerButton.innerText = questions[questionCounter].answers[i].text;
             answerButton.value = questions[questionCounter].answers[i].correct;
             answerSet.appendChild(answerButton);
            };
            
            
            
            
            var startGame = function () {
                console.log("hi");
                startButtonEl.classList.add("hide");
                questionSpace.classList.remove("hide");
                showTimer();
                showQuestion();
                
                
            }
            


/*GIVEN I am taking a code quiz
WHEN I click the Start button*/
startButtonEl.addEventListener("click", startGame);

/*WHEN the game is over
THEN I can save my initials and score*/


/*
WHEN I answer a question
THEN I am presented with another question*/