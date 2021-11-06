const startButtonEl = document.getElementById("start-btn");

const questionSpace = document.getElementById("question-container");
const questionText = document.getElementById("question-text")
const answerSet = document.getElementById("answer-buttons");

const timerEl = document.getElementById("countdown");

var counter = 60;
const countdown = function(){
    console.log (counter);
    counter--;
    timerEl.innerText = "Time Left: " + counter;
    if (counter === 0) {
        timerEl.innerText = "Game Over!";
        console.log("game over!");
        clearInterval(startCountdown);
        };
    };
    
    var startCountdown = setInterval(countdown, 1000);
    
    
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

var showQuestion = function () {
    questionText.innerText = questions[0].question;
    answerSet.innerHTML = questions[0].answers.forEach(answers => {
        const button = document.createElement("button");
        button.appendChild;
        button.innerText = answers.text});
    };
    
    
    var startGame = function () {
        console.log ("hi");
        startButtonEl.classList.add("hide");
        questionSpace.classList.remove("hide");
        showQuestion ();

}



var checkAnswers = function () {
    
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

