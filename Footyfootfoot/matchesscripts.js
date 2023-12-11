document.addEventListener('DOMContentLoaded', function() {
  const leftTeamScore = document.querySelector('.left-team');
  const rightTeamScore = document.querySelector('.right-team');
  const scoresElement = document.querySelector('.scores');
  const resultElement = document.querySelector('.result');
  const playButton = document.querySelector('.matchButton');

  function generateRandomScore() {
    return Math.floor(Math.random() * 6); 
  }

  function playMatch() {
    const leftScore = generateRandomScore();
    const rightScore = generateRandomScore();

    
    leftTeamScore.textContent = 'Your FC';
    rightTeamScore.textContent = 'Random FC';

    
    scoresElement.textContent = `${leftScore}-${rightScore}`;

    if (leftScore > rightScore) {
      resultElement.textContent = 'Your FC wins!';
    } else if (rightScore > leftScore) {
      resultElement.textContent = 'Random FC wins!';
    } else {
      resultElement.textContent = 'It\'s a draw!';
    }
  }

  playButton.addEventListener('click', playMatch);
});