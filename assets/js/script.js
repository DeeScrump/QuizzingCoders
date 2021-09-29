//DOM variables assigned
var startButtonEl = document.querySelector('#start-button');
var pageTitleEl = document.querySelector('#page-title');
var instructionEl = document.querySelector('#instructions');
var questionContainerEl = document.querySelector('#container');
var questionUl = document.querySelector('#question-container');
var allDoneEl = document.querySelector('#all_done');
var yourScoreEl = document.querySelector('#your_score');
var timeCountDown = document.querySelector('#countDown');
var displayInitEl = document.querySelector('#displayInit');
var inputInitEl = document.querySelector('#inputInit');
var enterInitEl = document.querySelector('#enterInit');

// List of questions and answer choices
var quizChoices = [
  {
    "question": "Who is the only person ever to win a Golden Calendar Slam?",
      "a": "Margaret Court",
      "b": "Novak Djokovic",
      "c": "Serena Williams",
      "d": "Steffi Graff",
      "correctAnswer": "d",
      "userAnswer": null
  },
  {
    "question": "Which female players has held all 4 majors consecutively, twice?",
      "a": "Serena Williams",
      "b": "Venus Williams",
      "c": "Naomi Osaka",
      "d": "Coco Gauff",
      "correctAnswer": "a",
      "userAnswer": null
  },
  {
    "question": "Which player has the most Major titles total including doubles?",
      "a": "Martina Navratilova",
      "b": "Margaret Court",
      "c": "Steffi Graff",
      "d": "Roger Federer";
      "correctAnswer": "a",
      "userAnswer": null
  },
  {
  "question": "How many majors are there in a calendar year?",
  "a": "6",
  "b": "2",
  "c": "4",
  "d": "5";
  "correctAnswer": "c",
  "userAnswer": null
  },
  {
    "question": "Which major is played on grass surface?",
    "a": "Australian Open",
    "b": "French Open",
    "c": "Wimbledon Championships",
    "d": "U.S. Open";
    "correctAnswer": "c",
    "userAnswer": null
  }
];

//variables for
var timerCounter = quizChoices.length * 3;
var counter   = 0;
timeOnClock = 0;


// //Clear screen of content in main section and start quiz
function clearScreen(event) {
  pageTitleEl.textContent = '';
  instructionEl.textContent = '';
  startButtonEl.textContent = '';
  inputInitEl.setAttribute('class', 'hide');
  quizStarter();
  // quizStarter();
  }

// Start quiz
function quizStarter() {
  // Start timer
  startTimer();

  //pull up question
  displayQuestions();
}

// // Display the questions one at a time
function displayQuestions() {

    if(counter < quizChoices.length){
        
    var li = document.createElement('li'); //this is the li
    var h2 = document.createElement('h2');
    h2.innerHTML = quizChoices[counter].question;
    li.appendChild(h2);

    var div = document.createElement('div')
    var ul2 = document.createElement('ul');
    // ul2.classList.add('button-container');
    

    for(var i in quizChoices[counter]){
      var li2 = document.createElement('li')
      var btn = document.createElement('button');
      if(i != 'question' && i != 'correctAnswer' && i != 'userAnswer'){
        btn.innerHTML = quizChoices[counter][i];

        li2.appendChild(btn);
        ul2.appendChild(li2);
        div.appendChild(ul2);
        li.appendChild(div);
        questionUl.appendChild(li); 

        li2.addEventListener('click',function(){
          counter++;
         
          questionUl.innerHTML = '';

          if (counter == quizChoices.length){
            allDone();
          } else {
            displayQuestions();
          }
        })
      }
    }
      
  }
}

// Check for the correct answers to update timer
// function checkAnswers(){
//   if (value !== )
// }

// // When done, got to initials page and stop timer for score
function allDone() {
  clearInterval(countDown);
  // questionContainerEl.setAttribute('class', 'hide');
    yourScoreEl.innerHTML = timerCounter;
    displayInitEl.removeAttribute('class', 'hide');
  // questionContainerEl.innerHTML = '';
  // allDoneEl.innerHTML = "All done!";

  // enterInitEl.innerHTML = "Enter your initials: ";

}


// // The timer interval that countdowns
function startTimer () {
    countDown = setInterval(function() {
        timerCounter--;
        timeCountDown.textContent = timerCounter;

        if (timerCounter == 0) {
            // clearInterval(countDown);
            // timeOnClock = timerCounter;
            allDone();
        } 
    }, 1000);
}

// // Got to highscore html when initials submitted
// function goToHighScore() {
//   var initials = inputInitEl.nodeValue;
//   console.log(initials);
// }


startButtonEl.addEventListener('click', clearScreen);