const startButtonEl = document.getElementById("start-btn");

const questionSpace = document.getElementById("question-container");
const questionText = document.getElementById("question-text")
const answerSet = document.getElementById("answer-buttons");

const timerEl = document.getElementById("countdown");

var counter = 10;

const showTimer = function () {
    function endgame() {
        clearInterval(timer);
    }
    function countdown() {
        counter--;
        timerEl.innerText = "Time Left: " + counter;
        if (counter <= 0) { endgame(); }
    }
    var timer = setInterval(countdown, 1000);
};


const questions = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        answers: [
            { text: "A - forEach()", correct: true },
            { text: "B - while()", correct: false },
            { text: "C - loop()", correct: false },
            { text: "D - array()", correct: false },
        ]
    },

    {
        question: "Which built-in method returns the calling string value converted to upper case?",
        answers: [
            { text: "A - changeCase(case)", correct: false },
            { text: "B - toUpper()", correct: false },
            { text: "C - toUpperCase()", correct: true },
            { text: "D - allCase(upper)", correct: false },
        ]
    },
]

var questionCounter = 0

    
    var showQuestion = function () {
        // for loop for lengthe of Question array 
        for(let i = 0 ; i < questions[questionCounter].answers.length; i++) {
            questionText.innerText = questions[questionCounter].question;
            var answerButton = document.createElement("button");
            answerButton.className = "answer-choice btn";
             answerButton.innerText = questions[questionCounter].answers[i].text;
             answerSet.appendChild(answerButton);};
       
    };


//build function to increase index number

// questionText.innerText = questions[0].question;
// answerSet.innerHTML = questions[0].answers.forEach(answers => {
//     const button = document.createElement("button");
//     button.appendChild;
//     button.innerText = answers.text});
// };


var startGame = function () {
    console.log("hi");
    startButtonEl.classList.add("hide");
    questionSpace.classList.remove("hide");
    showQuestion();
    showTimer();

}




var checkAnswers = function () {
    questionCounter++;

    //show new question
}

var showHighScores = function () {
    var highScoreList = document.getElementById("")
}

/*GIVEN I am taking a code quiz
WHEN I click the Start button*/
startButtonEl.addEventListener("click", startGame);

/*THEN a timer starts and I am presented with a question
//interval-timer
//text element. question and answer dataset

WHEN I answer a question
THEN I am presented with another question

WHEN I answer a question incorrectly
THEN time is subtracted from the clock
if answer:'correct' (eventListener)clicked = false, timerEl (countdown) decrements by 15 secs.


WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score*/
//localStorage.setItem (user, highscore)
//JSON.parse(window.localStorage.getItem(highscores)) || []
// JSON parse. remember that localStorage only reads strings
// var highscore = []
