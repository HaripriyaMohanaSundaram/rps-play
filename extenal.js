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

function game(btnInput) {
  let playerSelection = btnInput;
  let computerSelection = computerPlay();
  if (playerSelection == "rock") {
    document.getElementById("playerImg").src = "./images/rock.png";
  }
  else if (playerSelection == "paper") {
    document.getElementById("playerImg").src = "./images/paper.png";
  }
  else {
    document.getElementById("playerImg").src = "./images/scissors.png";
  }
  if (computerSelection == "rock") {
    document.getElementById("computerImg").src = "./images/rock.png";
  }
  else if (computerSelection == "paper") {
    document.getElementById("computerImg").src = "./images/paper.png";
  }
  else {
    document.getElementById("computerImg").src = "./images/scissors.png";
  }
  let arr = playAround(playerSelection, computerSelection);
  if (arr == "player") {
    playerCount++;
    document.getElementById("rndWinner").innerText = ("You won!!" + " " + playerSelection + " " + "beats" + " " + computerSelection);

  }
  else if (arr == "computer") {
    computerCount++;
    document.getElementById("rndWinner").innerText = ("You lose!!" + " " + computerSelection + " " + "beats" + " " + playerSelection);
  }
  else {
    document.getElementById("rndWinner").innerText = ("Both chose " + " " + playerSelection);
  }
  document.getElementById("rndWinner").hidden = false;
  document.getElementById("computerCount").innerText = computerCount;
  document.getElementById("playerCount").innerText = playerCount;
  if (playerCount == 5 || computerCount == 5) {
    document.getElementById('playBtn').hidden = true;
    playerCount = 0;
    computerCount = 0;
    // document.getElementById('paperBtn').disabled = true;
    // document.getElementById('scisorsBtn').disabled = true;
    if (playerCount > computerCount) {
      document.getElementById("winner").innerText = "You are the winner!! You rocked it!! "
    }
    else {
      document.getElementById("winner").innerText = "You Lost!! Try again!! "
    }
    document.getElementById('winner').hidden = false;
    document.getElementById('newBtn').hidden = false;
  }
}

// rock paper scissors game
function playAround(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return ("tie")
  }
  else if ((playerSelection == "rock" && computerSelection == "scissors") | (playerSelection == "paper" && computerSelection == "rock") | (playerSelection == "scissors" && computerSelection == "paper")) {
    return ("player")
  }
  else {
    return ("computer")
  }
}

// input from computer
function computerPlay() {
  let random = Math.random();
  if (random > 0 && random <= 0.3)
    return "rock";
  else if (random > 0.3 && random <= 0.6)
    return "paper";
  else
    return "scissors";
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