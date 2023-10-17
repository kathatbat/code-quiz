var  startPage = document.querySelector("#start-page");
var  startButton = document.querySelector("#start-button");

var questionPage = document.querySelector("#question-page");
var questionDisplay = document.querySelector("#question");
var choicesDisplay = document.querySelector("#choices");
var feedbackDisplay =  document.querySelector("#feedback");

var currentQuestion = 0;
var timer;
var currentTime = 40;
var timeElement = document.querySelector('#time');

var quizQuestions = [
    {
        q : "What does HTML stand for?", 
        a : ["Hyperlink and Text Markup Language", "Hypertext Markup Language", "Hyper Transfer Markup Language","High-Level Markup Language"],
        correctA : "Hypertext Markup Language"
    }, 

    {
        q : "What does CSS stand for?", 
        a : ["Color Scheme Starter", "Central Styling Sheet", "Cascading Style Sheet","Cascading Shield Sorts"],
        correctA : "Cascading Style Sheet"
    }, 

    {
        q : "Which ancient civilization worshipped cats?", 
        a : ["Egyptians", "China", "Mesopotamia","They worshipped dogs."],
        correctA : "Egyptians"
    }, 

    {
        q : "What percentage of their lives do cats sleep?", 
        a : ["50%", "20%", "80%","70%"],
        correctA : "70%"
    }, 

    {
        q : "Cats walk like?", 
        a : ["Elephants", "Camels and Giraffes", "Gazzeles","Penguins"],
        correctA : "Camels and Giraffes"
    }, 

    {
        q : "Who invented the cat door?", 
        a : ["Issac Newton", "Benjamin Franklin", "Einstein","Ur mom"],
        correctA : "Issac Newton"
    }, 

    {
        q : "A house cat can reach up to what speed?", 
        a : ["50 mph", "20 mph", "40 mph","30 mph"],
        correctA : "30 mph"
    }, 
];

questionPage.style.display = 'none';

function displayQuestions(){
    questionDisplay.textContent = quizQuestions[currentQuestion].q;
    choicesDisplay.innerHTML = "";

    for (i = 0; i < quizQuestions[currentQuestion].a.length; i++){
        var listItem = document. createElement("li");
        choicesDisplay.appendChild(listItem);
        listItem.textContent = quizQuestions[currentQuestion].a[i];
    }
}

startButton.addEventListener('click', function () {
    currentQuestion = 0;
    currentTime = 75;
    displayQuestions();
    startPage.style.display = 'none';
    // viewHighscore.style.display = 'none';
    timeElement.style.display = 'block';
    questionPage.style.display = 'block';

    timeElement.textContent = currentTime;

    timer = setInterval(function () {
        currentTime--;
       
        if(currentTime <= 0) {
            questionPage.style.display = 'none';
            // endPage.style.display = 'block';
            clearInterval(timer);
            // currentTime = 0;
            // scoreDisplay.textContent = currentTime;
        }
       
        timeElement.textContent = currentTime;
    }, 1000)
});

choicesDisplay.addEventListener('click', function (event) {
   
    if (feedbackDisplay.textContent != "") {
        return;
    }
   
    var userChoice = event.target;
    console.log(userChoice.textContent, quizQuestions[currentQuestion].correctA);
    if (userChoice.textContent === quizQuestions[currentQuestion].correctA) {
        feedbackDisplay.textContent = "Correct!";
        feedbackDisplay.style.color = "#99ffc7";
    }
    else {
        feedbackDisplay.textContent = "Wrong!";
        feedbackDisplay.style.color = "#ffd2d2";
        currentTime -= 10;
    }

    setTimeout(function () {
        feedbackDisplay.textContent = "";
        currentQuestion++;

        if (currentQuestion == quizQuestions.length) {
            timeElement.style.display = 'none';
            questionPage.style.display = 'none';
            endPage.style.display = 'block';
            clearInterval(timer);
            scoreDisplay.textContent = currentTime;
        }
        else {
            displayQuestions();
        }
    }, 1000)
});

// mainButton.addEventListener('click', function(){
//     startPage.style.display = "block";
// })
