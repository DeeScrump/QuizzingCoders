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
  // {
  //   "question": "Which tool can you use to ensure code quality?",
  //     "a": "Angular",
  //     "b": "jQuery",
  //     "c": "ESLint",
  //     "correctAnswer": "c",
  //     "userAnswer": null
  // }
];
function clearScreen(event) {
// event.preventDefault();
pageTitleEl.textContent = '';
instructionEl.textContent = '';
startButtonEl.textContent = '';
quizStarter();
// startTimer();
}

// remove this line


var counter   = 0;
 
function quizStarter() {
  // quizChoices.forEach(function(currentQuestion) {
   
    // while(counter < quizChoices.length){
      var ul2 = document.createElement('ul');
      // var li = document.createElement('li');
      var h2 = document.createElement('h2');
      h2.innerHTML = quizChoices[counter].question;
      var li = document.createElement('li');
      var div = document.createElement('div');
    
      var a  = document.createElement('li');
      a.innerHTML = quizChoices[counter].a;
      var b  = document.createElement('li');
      b.innerHTML = quizChoices[counter].b;
      var c  = document.createElement('li');
      c.innerHTML = quizChoices[counter].c;
      var correctAnswer  = document.createElement('li');
      // correctAnswer.innerHTML = currentQuestion.correctAnswer;
    
      a.addEventListener('click',function(){
        if(counter < quizChoices.length){
          
        }
      })
    
      ul2.appendChild(a);
      ul2.appendChild(b);
      ul2.appendChild(c);
      // ul2.appendChild(correctAnswer); 
      div.appendChild(ul2)
    
      li.appendChild(h2)
      li.appendChild(div)
    
      questionUl.appendChild(li);
      // questionUl.appendChild(div);
      // console.log("its the while loop")
    // }

  
  // })
}
  
startButtonEl.addEventListener('click', clearScreen)



  //   var divEachQuestion = document.createElement('div');
  //   var divEachResponse = document.createElement('li');

  // for (var i = 0; i < quizQuestions.length; i++) {
  //   divEachQuestion.innerText = quizAnswerChoices[{question}];
  //   divEachResponse.innerText = answerChoices[i];;
  //   divEachQuestion.classList.add('quiz-Container')
  //   divEachResponse.classList.add('displayQnA');
  //   quizContainerEl.append(divEachQuestion);
  //   quizContainerEl.append(divEachResponse);
  // }