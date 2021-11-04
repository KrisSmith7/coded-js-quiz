const startButtonEl = document.getElementById("start-btn");
const timerEl = document.getElementById("countdown");
const questionSpace = document.getElementById("question-space");
const answerSet = document.getElementById("answer-buttons");

const questions = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        answers: [
            { text: "A - forEach()", correct: true},
            { text: "B - while()", correct: false},
            { text: "C - loop()", correct: false},
            { text: "D - array()", correct: false},
        ]
    },
    
    {
        question: "Which built-in method returns the calling string value converted to upper case?",
        answers: [
            { text: "A - changeCase(case)", correct:false},
            { text: "B - toUpper()", correct: false},
            { text: "C - toUpperCase()", correct: true},
            { text: "D - allCase(upper)", correct:false},
        ]
    },
]


var startGame = function () {
    if (1===1) {console.log("hi!")};

    function showQuestion(questions) {
        questionSpace.textContent = questions.question;
        console.log(questions);
        
        let button = document.createElement("button");   
};
};

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

