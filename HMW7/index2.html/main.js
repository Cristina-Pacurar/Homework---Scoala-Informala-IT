const choices = document.querySelectorAll('.choice')
const result = document.getElementById('result')
const restart = document.getElementById('restart')
const modal = document.querySelector('.modal')
const scoreboard = {
  player: 0,
  computer: 0,
}

function play(e) {
  restart.style.display = 'inlone-block'
  const playerChoice = e.target.id
  const computerChoice = getComputerChoice()
  const winner = getWinner(playerChoice, computerChoice)
  showWinner(winner, computerChoice)
  //   console.log (playerChoice, computerChoice , winner)
}

function getComputerChoice() {
  const rand = Math.random()
  if (rand < 0.34) {
    return 'rock'
  } else if (rand <= 0.67) {
    return 'paper'
  } else {
    return 'scrissors'
  }
}

function getWinner(p, c) {
  if (p === c) {
    return 'draw'
  } else if (p === 'rock') {
    if (c === 'paper') {
      return 'computer'
    } else {
      return 'player'
    }
  } else if (p === 'paper') {
    if (c === 'scrissors') {
      return 'computer'
    } else {
      return 'player'
    }
  } else if (p === 'scrissors') {
    if (c === 'rock') {
      return 'computer'
    } else {
      return 'player'
    }
  }
}

function showWinner(winner, computerChoice) {
  if (winner === 'player') {
    //Inc player score
    scoreboard.player++
    //show modal result
    result.innerHTML = `<h1 class="text-win">You Win</h1>
        <i id="rock" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
        <p> Computer Chose <strong> ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} 
        </strong> </p>
        `
  } else if (winner === 'computer') {
    //Inc computer score
    scoreboard.computer++
    // show modal result
    result.innerHTML = `<h1 class="text-lose">You Lose</h1>
        <i id="rock" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
        <p> Computer Chose <strong> ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} 
         </strong> </p>
        `
  } else {
    ;`<h1 >It's a draw</h1>
        <i id="rock" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
        <p> Computer Chose <strong> ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} 
         </strong> </p>
        `
  }

  //Show score
  score.innerHTML = `<p> Player : ${scoreboard.player} </p>
    <p> Computer : ${scoreboard.computer} </p>
    `

  modal.style.display = 'block'
}
function restartGame() {
  scoreboard.player = 0
  scoreboard.computer = 0
  score.innerHTML = `<p> Player: 0 </p>
     <p> Computer : 0 </p>`
}

function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none'
  }
}

choices.forEach((choice) => choice.addEventListener('click', play))
window.addEventListener('click', clearModal)
restart.addEventListener('click', restartGame)
