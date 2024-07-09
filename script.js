const msgBtn = document.querySelector(".msg-btn");
const images = document.querySelectorAll(".game-container img");
const userScorePara = document.querySelector(".user-score");
const comScorePara = document.querySelector(".com-score");

let userScore = 0;
let comScore = 0;

images.forEach((image) => {
  image.addEventListener("click", () => {
    const userChoice = image.getAttribute("id")
    playGame(userChoice)
  })
})

const genComChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const ranIndx = Math.floor(Math.random() * 3);
  return option[ranIndx];
}


const playGame = (userChoice) => {

  const comChoice = genComChoice();

  if (userChoice === comChoice) {
    drewGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = comChoice === "paper" ? false : true;
    } else if (userChoice === "Paper") {
      userWin = comChoice === "scissors" ? false : true;
    } else {
      userWin = comChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }

}

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msgBtn.innerText = "You Win";
    msgBtn.style.backgroundColor = "green"
  } else {
    comScore++;
    comScorePara.innerText=comScore;
    msgBtn.innerText = "You lose";
    msgBtn.style.backgroundColor = "red";
  }
}

const drewGame = () => {
  msgBtn.innerText = "The Game Was Draw";
  msgBtn.style.backgroundColor = "black"
}
