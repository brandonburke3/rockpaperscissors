const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
    return userInput
  } else {
    return ('Error!, please use a valid choice')
  }
};

const getComputerChoice = () => {
 const randomNumber = Math.floor(Math.random() * 3);
 switch (randomNumber) {
  case 0:
    return 'rock'
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
 }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    return 'Computer wins!';
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    return 'Computer wins!';
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    return 'Computer wins!';
  } else {
    return 'You Win!';
  }
}

const playGame = () => {
  const userChoice = getUserChoice('rock'); 
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame()


