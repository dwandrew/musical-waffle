// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// Acceptance Criteria

var timer = document.querySelector("#time"); 
var start = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questions = document.querySelector("#questions");
var questionsTitle = document.querySelector("#questions-title");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
    
function clickStart () {
    start.addEventListener("click", function () {
        
        countDown();
        hideStart();
        showQuestion1();
               
    });
}
clickStart();

// dynamically change the target of a page DOM
// redirecting to another page ---> 
// window.location.href = ..... sends the browser to another page. 
// interacting between JS files, like having one big JS file that runs in order

function hideStart () {
    document.getElementById("start-screen").hidden = true;
}

function showQuestion1 () { 
    document.getElementById("questions").className = "start"; 
    document.querySelector("#questions").textContent = quizQuestions[1]; 
    
    // How to send part of the array out as a text 
    
    
    console.log(swine);


} 
// sets timer - Works!

var timeLeft = 30;
console.log(timeLeft);

function countDown () {
var timeInterval = setInterval(function(){
    timeLeft--; 

    if (timeLeft === 0 ) {
        clearInterval(timeInterval);
        }   
    document.querySelector("#time").textContent = timeLeft;
    console.log(timeLeft);
    
}, 1000);

}

// countDown();


// GIVEN I am taking a code quiz

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score