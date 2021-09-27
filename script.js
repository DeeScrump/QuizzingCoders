var startButtonEl = document.querySelector('#start-button');
var pageTitleEl = document.querySelector('#pagetitle');
var instructionEl = document.querySelector('#instructions');
var quizContainerEl = document.querySelector('#quiz-Container');
var displayQuizEl = document.querySelector('#displayQnA');
var resultsPageEl = document.querySelector('#resultsPage');

var quizQuestions = ["Who invented JavaScript?","Which one of these is a JavaScript package manager?","Which tool can you use to ensure code quality?"];
var quizAnswerChoices = [
  {
    a: "Douglas Crockford",
    b: "Sheryl Sandberg",
    c: "Brendan Eich"
  },
  {
    a: "Node.js",
    b: "TypeScript",
    c: "npm"
  },
  {
    a: "Angular",
    b: "RequireJS",
    c: "ESLint"
  }
];
var quizAnswers = ["Brendan Eich","npm","ESLint"];
var userScore = 0;
var answerChoices = ["a: Douglas Crockford \nb: Sheryl Sandberg \nc: Brendan Eich", "Node.js \nb: TypeScript \nc: npm", "a: Angular \nb: RequireJS \nc: ESLint"];



function clearScreen(event) {
// event.preventDefault();
pageTitleEl.textContent = '';
instructionEl.textContent = '';
startButtonEl.textContent = '';

quizStarter();
console.log(quizQuestions);
console.log(quizAnswerChoices);
console.log(quizAnswers);
// startQuiz();
// startTimer();

quizContainerEl.textContent = quizQuestions[0];
displayQuizEl.textContent = answerChoices[0];





}

function quizStarter() {
  var eachQuestion = [];
  var eachAnswer = [];


}
  


// function startQuiz(){
//     // variable to store the HTML output
//     var output = [];

//     // for each question...
//     quizQuestions.forEach(
//       (currentQuestion, questionNumber) => {
  
//         // variable to store the list of possible answers
//         var answers = [];
  
//         // and for each available answer...
//         for(letter in currentQuestion.answers){
  
//           // ...add an HTML radio button
//           answers.push(
//             `<button>
//               ${letter}: ${currentQuestion.answers[letter]}
//             </button>`
//           );
//           console.log(answers);
//         }
  
//         // add this question and its answers to the output
        // output.push(
        //   `<div class="question"> ${currentQuestion.question} </div>
        //   <div class="answers"> ${answers.join('')} </div>`
        // );
//         console.log(output);
//       }
//     );
  
//     // finally combine our output list into one string of HTML and put it on the page
//     quizTimeEl.innerHTML = output.join('');
//   }

startButtonEl.addEventListener('click', clearScreen);