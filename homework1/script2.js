const correctAnswers = ['Japan'];

function checkAnswer(index) {
  const buttons = document.querySelectorAll('.answer-button');
  if (correctAnswers[0] === buttons[index].textContent) {
    buttons[index].classList.add('correct');
  } else {
    buttons[index].classList.add('incorrect');
  }
}
function sayHello(){
  var response = prompt("What is your name?");
alert('Hello,' + response +', have a nice day!');
}
function chooseColor(){
  var response = prompt("What is your favourite color?");
alert('Really?I like ' + response +',too!');
}
function chooseFood(){
  var response = prompt("What is your favourite Chinese food?");
alert('Haha~' + response +' is delicious,but I like Cola Chicken wings best.');
}
function chooseThings(){
  var response = prompt("What do you like to do in your free time?");
alert('That sounds nice!' + 'And I like to watch movies!');
}
function sayYes(){
  var x = document.getElementById('demo');
  x.style.fontSize = '25px';
  x.style.color = 'green';
}
function sayNo(){
  var x = document.getElementById('demo');
  x.style.fontSize = '25px';
  x.style.color = 'red';
}
