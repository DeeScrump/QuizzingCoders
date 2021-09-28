var startButtonEl = document.querySelector('#start-button');
var pageTitleEl = document.querySelector('#page-title');
var instructionEl = document.querySelector('#instructions');
var questionContainerEl = document.querySelector('#container');
var quizQuestionEl = document.querySelector('#quiz-question');
var quizChoicesEl = document.querySelector('#quiz-choices');

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
var userScore = 0;

// var quizQuestions = ["Who invented JavaScript?","Which one of these is a JavaScript package manager?","Which tool can you use to ensure code quality?"];
// var answerChoices = ["a: Douglas Crockford \nb: Sheryl Sandberg \nc: Brendan Eich", "a: Node.js \nb: TypeScript \nc: npm", "a: Angular \nb: RequireJS \nc: ESLint"];
// var quizAnswers = ["c: Brendan Eich","c: npm","c: ESLint"];


function clearScreen(event) {
// event.preventDefault();
pageTitleEl.textContent = '';
instructionEl.textContent = '';
startButtonEl.textContent = '';
quizStarter();
// startTimer();
}



function quizStarter() {
  quizChoices.forEach(function(currentQuestion) {
    var ul = document.createElement('li');
    var ul2 = document.createElement('ul');
    var li = document.createElement('li');
    var h2 = document.createElement('h2');
    var div = document.createElement('div');
    
    h2.innerHTML = currentQuestion.question
    ul.appendChild(h2)
    currentQuestion.forEach(function() {
      
    })
    questionContainerEl.appendChild(ul);
    console.log(currentQuestion.question);
  })
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