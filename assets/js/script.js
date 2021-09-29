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

// testing
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

//variables for
var timerCounter = quizChoices.length * 3;
var counter   = 0;
timeOnClock = 0;


// //Clear screen of content in main section and start quiz
function clearScreen(event) {
  pageTitleEl.textContent = '';
  instructionEl.textContent = '';
  startButtonEl.textContent = '';
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
     var keys = [];
     var val = [];
   
    // var li = document.createElement('li');
    // var h2 = document.createElement('h2');
    // h2.innerHTML = keys[0];
    // li.appendChild(h2);
    
    
    
    
    var j = 1;
    var x =  0;
    for(var i in quizChoices[counter]){

      // console.log(quizChoices[0][i]);
      // if(i != 'question' && i != 'correctAnswer' && i != 'userAnswer'){
        keys.push(i)
        val.push(quizChoices[0][i]);
        
      // }
   
      // if(i != 'question' && i != 'correctAnswer' && i != 'userAnswer'){
        
      //   console.log(i)
      //   var btn = document.createElement('button');
      //   var p = document.createElement('p');
      //   btn.innerHTML = i +". "+quizChoices[counter][i];
      //   var ch = quizChoices[counter][i];
      //   p.addEventListener('click',function(test){
      //     console.log(i)
      //   })
      //   p.appendChild(btn)
      //   choices.appendChild(p);
        
      //   console.log(i)
        
      // }
      // console.log(i)
      // p.innerHTML = ""
      
      // var li2 = document.createElement('li');
      
       

      //  console.log(i);
      // var li2 = document.createElement('li')
      // var btn = document.createElement('button');
      // if(i != 'question' && i != 'correctAnswer' && i != 'userAnswer'){
      //   btn.innerHTML = quizChoices[counter][i];
      //   var result = quizChoices[counter][i];
      //   console.log(result);

      //   li2.appendChild(btn);
      //   ul2.appendChild(li2);
      //   div.appendChild(ul2);
      //   li.appendChild(div);
      //   questionUl.appendChild(li); 

      //   btn.addEventListener('click',function(){
        
      //     counter++;
          
      //     questionUl.innerHTML = '';

      //     if (counter == quizChoices.length){
      //       allDone();
      //     } else {
      //       displayQuestions();
      //     }
      //   })
      // }
    } //end of the foor loop
    var j  = 1
    question.innerHTML =  val[0];
    val.forEach(function(item,i) {
      var btn = document.createElement('button');
      if(i!=0 && i!=5 && i!=6){
          // question.innerHTML = val
        var p = document.createElement('p'); 
        btn.innerHTML = keys[j] +". "+val[i];
        p.appendChild(btn)
        choices.appendChild(p)
        j++;

        btn.addEventListener('click',function(){
          if(keys[i] === val[5]){
            
            correct.innerHTML = "correct"
            // hide(correct)
          }else{
            correct.innerHTML = "Incorrect"
            // hide(correct)
            timerCounter -= 5;
            
            if (timerCounter < 0){
              timerCounter =\
               0;
            }
          } 

          // console.log(keys[i]);
        })
      }
      
      
    })
    
  }
}
 var hide = function(params) {
   var i  = 1;
   setInterval(() => {
     params.style.display = (params.style.display =='none'? '':'none');
     if(1++ ==2){

     }
   }, 500);
 }


// Check for the correct answers to update timer
// function checkAnswers(){
//  
// }

// // When done, got to initials page and stop timer for score
function allDone() {
  clearInterval(countDown);
    yourScoreEl.innerHTML = timerCounter;
    displayInitEl.removeAttribute('class','hide');
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
            questionContainer.innerHTML = '';
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