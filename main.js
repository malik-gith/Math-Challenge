/* Variables Kinds
String
Number
Array => Object (based on Java Script)
Object
Bollean
*/

let firstNumber = document.querySelector('.first-number');
let operator = document.querySelector('.operator');
let secondNumber = document.querySelector('.second-number');
let userNumber = document.querySelector("[name='number']");
let submit = document.querySelector('.submit');
let result = document.querySelector('.result');
let question = document.querySelector('.question');
let operatorsGroup = ['+', '-', '*'];
let score = document.querySelector('.score');
let counter = document.querySelector('.counter');
let i = 0;
window.onload = randomQuestion();

submit.addEventListener('click', function () {
       if (userNumber.value != '') {
              if (userNumber.value == eval(question.textContent)) {
                     correctAnswer();
              } else {
                     unCorrectAnswer();
              }
       } else {
              result.style.display = 'block';
              result.style.setProperty('background-color', '#fff');
              result.style.setProperty('color', '#000');
              result.innerHTML = 'Please inter Number';
       }
});

function correctAnswer() {
       i++;
       userNumber.setAttribute('readonly', true);
       result.style.display = 'block';
       result.innerHTML = 'Your Answer is Correct';
       result.style.setProperty('color', '#fff');
       result.style.setProperty('background-color', '#00b32a');
       deleteResult();
}

function unCorrectAnswer() {
       if (i > 0) {
              i--;
       }
       userNumber.setAttribute('readonly', true);
       result.style.display = 'block';
       result.innerHTML = 'Your Answer is Un Correct';
       result.style.setProperty('color', '#fff');
       result.style.setProperty('background-color', 'red');
       deleteResult();
}

function deleteResult() {
       setTimeout(function () {
              result.style.display = 'none';
              userNumber.removeAttribute('readonly');
              userNumber.value = '';
              score.innerHTML = i;
              randomQuestion();
       }, 3000);
}

function randomQuestion() {
       firstNumber.innerHTML = Math.ceil(Math.random() * 200);
       operator.innerHTML = ` ${
              operatorsGroup[Math.floor(Math.random() * operatorsGroup.length)]
       } `;
       secondNumber.innerHTML = Math.ceil(Math.random() * 200);
}
