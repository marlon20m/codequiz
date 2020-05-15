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
  