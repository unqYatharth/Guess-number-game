const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
let secretNumber = Math.floor(Math.random()*20)+1;
const again = document.querySelector('.again');
// console.log(secretNumber, 'global');
let score = 20;
let highScore = 0;


checkButton.addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  if(!guess) {
    message.textContent = '⛔ No number!';
  }
  else if(guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
    document.querySelector('.rand-num').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if(score > highScore) {
      highScore = score;
      document.querySelector('.high-score').textContent = `🥇 Highscore: ${highScore}`;
    }
  }
  else if(guess > secretNumber) {
    if(score > 1) {
      message.textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = `💯 Score: ${score}`;
    } else {
      message.textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = `💯 Score: ${0}`
    }
  }
  else if(guess < secretNumber) {
    if(score > 1) {
      message.textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = `💯 Score: ${score}`;
    } else {
      message.textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = `💯 Score: ${0}`
    }
  }
})

again.addEventListener('click', function() {
  score = 20;
  secretNumber = Math.floor(Math.random()*20)+1;
  // console.log((secretNumber));

  document.querySelector('.rand-num').textContent = '?';
  message.textContent = 'Start guessing...';
  document.querySelector('.score').textContent = `💯 Score: ${score}`;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

})


