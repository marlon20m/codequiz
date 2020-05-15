var counter = document.querySelector('#counter');
var timeLeft = document.querySelector('#timer');
var clickAnswer = document.querySelector('#clickAnswer');
var rightAnswer = document.querySelector('#rightAnswer');

var begin = document.querySelector('#beginQuiz');
var clearance = document.querySelector('#clear');
var question = document.querySelector('#question');
var options = document.querySelector('#options');
var choicebtn = document.createElement('button');

var c = 76;

var count = 0;
counter.textContent = count;
if (localStorage.getItem('count')) {
  count = localStorage.getItem('count');
  counter.textContent = count;
}

options.addEventListener('click', function () {

  count++;
  counter.textContent = count;
  localStorage.setItem('count', count);
});

clearance.addEventListener('click', function () {
  counter.innerHTML = '0';
  storage.removeItem();
});


function countdownTimer() {
  c = c - 1;
  if (c < 76) {
    timeLeft.innerHTML = c + ' :Timer';
  }
  if (c < 1) {
    window.clearInterval(update);
  }
}
update = setInterval('countdownTimer()', 1000);

var questions = [
  {
    id: 0,
    questionz: ['What does DOM stand for?'],
    choices: [
      'Definite Object Material',
      'Dominator Of Mystery',
      'Dementor of Misery',
      'Document Object Model',
    ],
    correct: 'Document Object Model',
  },
  {
    id: 1,
    questionz: [
      'What is the first language that became popular for website coding',
    ],
    choices: ['Node.js', 'HTML', 'C++', 'REACT'],
    correct: 'HTML',
  },
  {
    id: 2,
    questionz: ['What year was Javascript created?'],
    choices: ['2006', '1991', '1995', '1928'],
    correct: '1995',
  },
];

var questionLimit = questions.length - 1;
var activeQuestion = 0;
