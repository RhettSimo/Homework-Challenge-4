const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            "script",
            "scripting",
            "JavaScript",
            "js",
        ],
        correctAnswer: "script"
    },

    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            "strings",
            "booleans",
            "alerts",
            "numbers",
        ],
        correctAnswer: "alerts"
    },

    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: [
            "<script src='xxx.js'",
            "<script name='xxx.js'",
            "<script href='xxx.js'",
        ],
        correctAnswer: "<script src='xxx.js'"
    },

    {
        question: "How can you add a comment in a JavaScript?",
        answers: [
            "<!--This is a comment-->",
            "//This is a comment",
            "'This is a comment",
        ],
        correctAnswer:  "//This is a comment"
        },

    {
        question: "JavaScript is the same as Java.",
        answers: [
            "True",
            "False",
        ],       
        correctAnswer: "True"
    },
]

var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector("#start-button");
var quiz = document.querySelector("#quiz");
var startEl = document.querySelector(".start");

var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

startButton.addEventListener("click", startQuiz);

function startQuiz () {
    startEl.setAttribute("class", "hide");
    quiz.removeAttribute("class");
    for (var i = 0; i < questions.length; i++) {
        console.log(questions);
        quiz.textContent = questions[i].question
    for (var k = 0; k < 4; k++) {
        quiz.textContent = answers[4].answer
    }
    }
}