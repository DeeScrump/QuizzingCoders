var startButtonEl = document.querySelector('#start-button');
var pageTitleEl = document.querySelector('#pagetitle');
var instructionEl = document.querySelector('#instructions');
var quizTimeEl = document.querySelector('#quizTime');
var quizResultsEl = document.querySelector('#quizResults');
var quizQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "RequireJS",
        c: "ESLint"
      },
      correctAnswer: "c"
    }
  ];
// var clearAllEl = document.querySelectorAll(header);


function clearScreen(event) {
    // event.preventDefault();
    pageTitleEl.textContent = '';
    instructionEl.textContent = '';
    startButtonEl.textContent = '';
    startQuiz();
}

function startQuiz(){
    // variable to store the HTML output
    var output = [];
  
    // for each question...
    quizQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        var answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<button>
              ${letter}:${currentQuestion.answers[letter]}
            </button>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizTimeEl.innerHTML = output.join('');
  }

startButtonEl.addEventListener('click', clearScreen);