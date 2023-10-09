var  startPage = document.querySelector("start-page");
var  startButton = document.querySelector("start-button");

var questionPage = document.querySelector("question-page");
var questionDisplay = document.querySelector("question");
var choicesDisplay = document.querySelector("choices");
var feedbackDisplay =  document.querySelector("feedback");

var currentQuestion = 0;

var quizQuestions = [
    {
        q : "What HTML stand for?", 
        a : ["Hyperlink and Text Markup Language", "Hypertext Markup Language", "Hyper Transfer Markup Language","High-Level Markup Language"],
        correctA : "Hypertext Markup Language"
    }, 

    {
        q : "", 
        a : ["", "", "",""],
        correctA : ""
    }, 

    {
        q : "", 
        a : ["", "", "",""],
        correctA : ""
    }, 

    {
        q : "", 
        a : ["", "", "",""],
        correctA : ""
    }, 

    {
        q : "", 
        a : ["", "", "",""],
        correctA : ""
    }, 

    {
        q : "", 
        a : ["", "", "",""],
        correctA : ""
    }, 

    {
        q : "", 
        a : ["", "", "",""],
        correctA : ""
    }, 
];

questionPage.style.display = 'none';

function displayQuestions(){
    questionDisplay.textContent = questions[currentQuestion].question;
    choicesDisplay.innerHTML = "";

    for (i = 0; i < questions[currentQuestion].choices.length; i++){
        var listItem = document. createElement("li");
        choicesDisplay.appendChild(listItem);
        listItem.textContent = questions[currentQuestion].choices[i];
    }
}

startButton.addEventListener('click', function () {
    currentQuestion = 0;
    currentTime = 75;
    loadQuestion();
    startPage.style.display = 'none';
    viewHighscore.style.display = 'none';
    timeElement.style.display = 'block';
    questionPage.style.display = 'block';

    timeDisplay.textContent = currentTime;

    timer = setInterval(function () {
        currentTime--;
       
        if(currentTime <= 0) {
            questionPage.style.display = 'none';
            endPage.style.display = 'block';
            clearInterval(timer);
            currentTime = 0;
            scoreDisplay.textContent = currentTime;
        }
       
        timeDisplay.textContent = currentTime;
    }, 1000)
});

choicesDisplay.addEventListener('click', function (event) {
   
    if (feedbackDisplay.textContent != "") {
        return;
    }
   
    var userChoice = event.target;
    if (userChoice.textContent === questions[currentQuestion].correctAnswer) {
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

        if (currentQuestion == questions.length) {
            timeElement.style.display = 'none';
            questionPage.style.display = 'none';
            endPage.style.display = 'block';
            clearInterval(timer);
            scoreDisplay.textContent = currentTime;
        }
        else {
            loadQuestion();
        }
    }, 1000)
});

mainButton.addEventListener('click', function(){
    startPage.style.display = "block";
})
