var startButtonEl = document.querySelector('#start-button');
var pageTitleEl = document.querySelector('#page-title');
var instructionEl = document.querySelector('#instructions');
var questionContainerEl = document.querySelector('#container');
var quizQuestionEl = document.querySelector('#quiz-question');
var quizChoicesEl = document.querySelector('#quiz-choices');
var questionUl = document.querySelector('#question-container');

var quizChoices = [
  {
    "question": "Who invented JavaScript?",
      "a": "Douglas Crockford",
      "b": "Sheryl Sandberg",
      "c": "Brendan Eich",
      "correctAnswer": "c",
      "userAnswer": null
  },
  {
    "question": "Which one of these is a JavaScript package manager?",
      "a": "Node.js",
      "b": "TypeScript",
      "c": "npm",
      "correctAnswer": "c",
      "userAnswer": null
  },
  {
    "question": "Which tool can you use to ensure code quality?",
      "a": "Angular",
      "b": "jQuery",
      "c": "ESLint",
      "correctAnswer": "c",
      "userAnswer": null
  }
];
function clearScreen(event) {
// event.preventDefault();
pageTitleEl.textContent = '';
instructionEl.textContent = '';
startButtonEl.textContent = '';
quizStarter();
// startTimer();
}
var timerCounter = 10;
var counter   = 0;
 
function quizStarter() {
  // quizChoices.forEach(function(currentQuestion) {
   
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
                console.log([i]);
                
                questionUl.innerHTML = '';
                quizStarter();
              })
            }
          }
        
    }else{
      console.log("HERE")
    } 
}

//The timer interval that countdowns and return to page for score and initials input
// function startTimer () {
//     countDown = setInterval(function() {
//         timerCounter--;
//         timeCountDown.textContent = timerCounter;
//         if (timerCounter === 0) {
//             clearInterval(countDown);
//             window.open("initials.html","_self");
//         } else if (timerCounter !==0) {
//             console.log("wait");
//         }
//     }, 1000);
// }


startButtonEl.addEventListener('click', clearScreen)
