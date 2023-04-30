let playerCount = 0;
let computerCount = 0;
const letPlayBtn = document.querySelector('.lets-play-btn');
const gameMain = document.querySelector('.game-main');
gameMain.style.display = 'none';
document.getElementById('newBtn').hidden = true;
letPlayBtn.addEventListener('click', () => {
  gameMain.style.display = "flex";
  letPlayBtn.style.display = "none";
  document.getElementById('winner').hidden = true;
})

function imageUpdate(input, imageID) {
  switch (input) {
    case "rock":
      document.getElementById(imageID).src = "./images/rock.png";
      break;
    case "paper":
      document.getElementById(imageID).src = "./images/paper.png";
      break;
    case "scissors":
      document.getElementById(imageID).src = "./images/scissors.png";
      break;
  }
}

function game(btnInput) {
  let playerSelection = btnInput;
  let computerSelection = computerPlay();
  imageUpdate(playerSelection, "playerImg");
  imageUpdate(computerSelection, "computerImg");
  let rndWinner = playRound(playerSelection, computerSelection);
  switch (rndWinner) {
    case "player":
      playerCount++;
      document.getElementById("rndWinner").innerText = ("You won!!" + " " + playerSelection + " " + "beats" + " " + computerSelection);
      break;
    case "computer":
      computerCount++;
      document.getElementById("rndWinner").innerText = ("You lose!!" + " " + computerSelection + " " + "beats" + " " + playerSelection);
      break;
    case "tie":
      document.getElementById("rndWinner").innerText = ("Both chose " + " " + playerSelection);
  }
  document.getElementById("rndWinner").hidden = false;
  document.getElementById("computerCount").innerText = computerCount;
  document.getElementById("playerCount").innerText = playerCount;
  if (playerCount == 5 || computerCount == 5) {
    document.getElementById('playBtn').hidden = true;
    if (playerCount > computerCount) {
      document.getElementById("winner").innerText = "You are the winner!! You rocked it!! "
    }
    else {
      document.getElementById("winner").innerText = "You Lose!! Try again!! "
    }
    document.getElementById('winner').hidden = false;
    document.getElementById('newBtn').hidden = false;
    playerCount = 0;
    computerCount = 0;
  }
}

// rock paper scissors game
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return ("tie")
  }
  else if ((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")) {
    return ("player")
  }
  else {
    return ("computer")
  }
}

// input from computer
function computerPlay() {
  let computerInput = ["rock", "paper", "scissors"]
  let random = Math.floor(Math.random() * 3);
  return computerInput[random];
}

// input from user
const btns = document.querySelectorAll('.play-btn');
var btnInput = "";
btns.forEach((btn) => {
  btn.addEventListener('click', (btn) => {
    if (btn.target.id == "rockBtn")
      btnInput = "rock";
    else if (btn.target.id == "paperBtn")
      btnInput = "paper";
    else
      btnInput = "scissors";
    game(btnInput);
  })
})

// new game 
const newBtn = document.querySelector('#newBtn');
newBtn.addEventListener('click', () => {
  gameMain.style.display = "none";
  letPlayBtn.style.display = "block";
  document.getElementById('newBtn').hidden = true;
  document.getElementById('winner').hidden = true;
  document.getElementById('rndWinner').hidden = true;
  document.getElementById('playBtn').hidden = false;
  document.getElementById("computerCount").innerText = 0;
  document.getElementById("playerCount").innerText = 0;
  document.getElementById("playerImg").src = "./images/question-mark.png";
  document.getElementById("computerImg").src = "./images/question-mark.png";
})