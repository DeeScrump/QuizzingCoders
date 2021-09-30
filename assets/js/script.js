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
var submitInitBtn = document.querySelector('#submitInit');
var questionContainer = document.querySelector('#questions');
var question = document.querySelector('#question-title');
var choices = document.querySelector('#choices');
var correct = document.querySelector('#rightWrong');

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
      "d": "Roger Federer",
      "correctAnswer": "a",
      "userAnswer": null
  },
  {
    "question": "How many majors are there in a calendar year?",
    "a": "6",
    "b": "2",
    "c": "4",
    "d": "5",
    "correctAnswer": "c",
    "userAnswer": null
  },
  {
    "question": "Which major is played on grass surface?",
    "a": "Australian Open",
    "b": "French Open",
    "c": "Wimbledon Championships",
    "d": "U.S. Open",
    "correctAnswer": "c",
    "userAnswer": null
  }
];

//variables needed with pre-stored values for counting
var timerCounter = quizChoices.length * 15;
var counter   = 0;
timeOnClock = 0;


// //Clear screen of content in main section and start quiz
function clearScreen(event) {
  pageTitleEl.textContent = '';
  instructionEl.textContent = '';
  startButtonEl.textContent = '';
  quizStarter();
}

// Start quiz
function quizStarter() {
  startTimer();
  displayQuestions();
}

// // The timer interval that countdowns
function startTimer () {
  countDown = setInterval(function() {
      timerCounter--;
      timeCountDown.textContent = timerCounter;

      if (timerCounter <= 0) {
          // clearInterval(countDown);
          // timeOnClock = timerCounter;
          questionContainer.innerHTML = '';
          allDone();
      } 
  }, 1000);
}

// Display the questions one at a time
function displayQuestions() {
    var keys = [];
    var val = [];
  if(counter < quizChoices.length){

    for(var i in quizChoices[counter]){
        keys.push(i)
        val.push(quizChoices[counter][i]);
        // console.log(i);
        // console.log(quizChoices[counter][i]);
    }

    // for each iteration, choose the answer choices on both sides of question array and append to page
    var j  = 1;
    question.innerHTML =  quizChoices[counter].question;
    val.forEach(function(item,i) {
      var btn = document.createElement('button');
      if(i!=0 && i!=5 && i!=6){
          // question.innerHTML = val
        var p = document.createElement('p'); 
        btn.innerHTML = keys[j] +". "+val[i];
        p.appendChild(btn)
        choices.appendChild(p)
        j++;

        // With each button click, check for accuracy, save timer number for scoring including penalties
        btn.addEventListener('click', function() {
          if(keys[i] === val[5]) {
            correct.innerHTML = 'correct';
            setTimeout(() => {
              correct.innerHTML = '';
              }, 500);
            } else {
            correct.innerHTML = "Incorrect"
            timerCounter -= 5;
            setTimeout(() => {
              correct.innerHTML = '';
            }, 500);

            if (timerCounter <= 0){
              timerCounter = 0;
              timeCountDown.innerHTML = 0;
              questionContainer.innerHTML = '';
              allDone();
            }
          }  

          if (counter == quizChoices.length-1) {
            clearInterval(countDown);
            yourScoreEl.innerHTML = timerCounter;
            allDone();
          } else {
            counter++;
            question.innerHTML = '';
            choices.innerHTML = '';
            displayQuestions();
          }
        });
      }
    })
  }
}

// When done, got to initials page and stop timer for score
function allDone() {
  clearInterval(countDown);
  question.innerHTML = '';
  choices.innerHTML = '';
  yourScoreEl.innerHTML = timerCounter;
  displayInitEl.removeAttribute('class','hide');
}

// Input initials for score and submit
function goToHighScores() {
  var inputInitials = inputInitEl.value;
  console.log(inputInitials);

  if(inputInitials !== '') {
    var currentScore = JSON.parse(window.localStorage.getItem('input_score')) || [];

    var latestScore = {
      score: timerCounter,
      initials: inputInitials
    };
    console.log(latestScore);
  } else {
    window.alert('Please enter valid initials');
    return;
  }

  currentScore.push(latestScore);
  window.localStorage.setItem('input_score', JSON.stringify(currentScore));

  window.location.href = 'highscores.html';
}


startButtonEl.addEventListener('click', clearScreen);

submitInitBtn.addEventListener('click', goToHighScores);
