// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// Acceptance Criteria

var timer = document.querySelector("#time"); 
var start = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionsDiv = document.querySelector("#questions");
var questionsTitle = document.querySelector("#question-title");
var endscreen = document.querySelector("#end-screen");
var choices = document.querySelector("#choices"); 
var questions = quizQuestions; //tuns the array into a var
let index = 0
var answers = []
var score = 0

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
    
function clickStart () {
    start.addEventListener("click", function () {
        countDown();
        hideStart();
        showQuestion(index)           
    });
}
clickStart();

function showQuestion(index){
    showQuestionTitle(index);
    renderAnswers(index);
}

// dynamically change the target of a page DOM
// redirecting to another page ---> 
// window.location.href = ..... sends the browser to another page. 
// interacting between JS files, like having one big JS file that runs in order

function hideStart () {
    document.getElementById("start-screen").hidden = true;
}
function showEnd(){
    questionsDiv.className = 'hide'
    endscreen.className= 'show'
}

function showQuestionTitle (index) { 
    
    document.getElementById("questions").className = "start"; // changes the class name for the 'questions' html section.
    document.querySelector("#question-title").textContent = JSON.stringify(questions[index].question); 
} 

function renderAnswers (index) {
    
    // vertically ordered list of buttons made from an array

    // document.getElementById("#choices").style.alignItems = "stretch";

    document.querySelector("#choice1").textContent = questions[index].answers[0]; //variable was declared twice! Made the code not work
    document.querySelector("#choice2").textContent = questions[index].answers[1]; //variable was declared twice! Made the code not work
    document.querySelector("#choice3").textContent = questions[index].answers[2]; //variable was declared twice! Made the code not work
    document.querySelector("#choice4").textContent = questions[index].answers[3]; //variable was declared twice! Made the code not work
    
}

function clickOnAnswers () {

    // document.getElementById("questions").addEventListener("click", function () {
        
        let buttonList = document.querySelectorAll("button");

        var answerSelected = buttonList.forEach(function(i){
            i.addEventListener("click", function(e){
              if(questions[index].answers[questions[index].correctAnswerIndex] == `${e.target.innerHTML}`){
                answers.push(e.target.innerHTML)
                index+=1;
                if(index < questions.length)
                    showQuestion(index)
                else{
                    score = timeLeft
                    document.querySelector("#final-score").textContent = score
                    showEnd()
                }
              }
              else{

              }
              //console.log(e.target.innerHTML);
              //console.log(answers)
        
            })
          })

          console.log(answerSelected);
        //   betweenQuestionsInterval();

        // if (button.textContent === "certain value") {run the following code}
        // if () 
     
        {
            // creates a new paragraph under the questions. 
            const para = document.createElement("p");
            const node = document.createTextNode("Uvavu!" + "Congratulations! you win an eel!");
            para.appendChild(node);
            const element = document.getElementById("questions");
            element.appendChild(para);
        }                            
            // To do:
            //play sound
            // clear everything
            // move to question round 2

        // 
 

        
        // console.log("Eranu!");
        // console.log("Uvavu!")
        // console.log(quizQuestions[1].correctAnswerIndex); 
        // - selects the correct index

        // console.log(clickOnAnswers);
    }
//     );


// }

    clickOnAnswers(); 

    // event listener on buttons, IF value of button selected 
    // === to correct answer index then print correct. 
    // then change questions
    // else - incorrect answer and subtract 10seconds from clock




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

// sets a gap between question rounds
var betweenQuestionsTimeGap = 1

function betweenQuestionsInterval () {
    var timeoutInterval = setInterval(function()
    { betweenQuestionsTimeGap--;
        if (betweenQuestionsTimeGap === 0) {
            clearInterval(timeoutInterval);
        }

    }, 1000);
    alert("wooga");
}


// GIVEN I am taking a code quiz

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score