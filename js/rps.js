// set the constant elements
const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const resetButton = document.getElementById('reset')
const result = document.querySelector('.result')
const userImg = document.querySelector('.user-img')
const compImg = document.querySelector('.comp-img')
const userScoreText = document.querySelector('.user-score')
const compScoreText = document.querySelector('.comp-score')

const choices = ['rock', 'paper', 'scissors']
let comp
let userScore = 0
let compScore = 0

// // functions to change the result lines text
// function rockBtnClick() {
//     result.innerText = 'rock clicked'
// }

// function paperBtnClick() {
//     result.innerText = 'paper clicked'
// }

// function scissorsBtnClick() {
//     result.innerText = 'scissors clicked'
// }


// listen for events on the page
// result.style.color = "red" ---> styling in js function using .style
rockButton.addEventListener('click', () => {
    userImg.src = "../img/" + rockButton.id + ".png"
    compChoice()
    winLose(rockButton.id)
})
paperButton.addEventListener('click', () => {
    userImg.src = "../img/" + paperButton.id + ".png"
    compChoice()
    winLose(paperButton.id)
})
scissorsButton.addEventListener('click', () => {
    userImg.src = "../img/" + scissorsButton.id + ".png"
    compChoice()
    winLose(scissorsButton.id)
})

resetButton.addEventListener('click', () => {
    userScore = 0
    compScore = 0
    userImg.src = "../img/rps4.png"
    compImg.src = "../img/rps4.png"
    result.innerText = 'Start Game'
    userScoreText.innerText = userScore.toString()
    compScoreText.innerText = compScore.toString()
})

function compChoice() {
    const randNum = Math.floor(Math.random()*3)
    comp = choices[randNum]
    compImg.src = "../img/" + comp + ".png"
}

function winLose(userChoice) {
    if (userChoice == "rock" && comp == "paper") {
        result.innerText = 'Computer Wins'
        compScore = compScore + 1
        compScoreText.innerText = compScore.toString()
    } else if (userChoice == "paper" && comp == "scissors") {
        result.innerText = 'Computer Wins'
        compScore = compScore + 1
        compScoreText.innerText = compScore.toString()
    } else if (userChoice == "scissors" && comp == "rock") {
        result.innerText = 'Computer Wins'
        compScore = compScore + 1
        compScoreText.innerText = compScore.toString()
    } else if (comp == "rock" && userChoice == "paper") {
        result.innerText = 'User Wins'
        userScore = userScore + 1
        userScoreText.innerText = userScore.toString()
    } else if (comp == "paper" && userChoice == "scissors") {
        result.innerText = 'User Wins'
        userScore = userScore + 1
        userScoreText.innerText = userScore.toString()
    } else if (comp == "scissors" && userChoice == "rock") {
        result.innerText = 'User Wins'
        userScore = userScore + 1
        userScoreText.innerText = userScore.toString()
    } else if (comp == "rock" && userChoice == "rock") {
        result.innerText = 'Draw'
    } else if (comp == "paper" && userChoice == "paper") {
        result.innerText = 'Draw'
    } else if (comp == "scissors" && userChoice == "scissors") {
        result.innerText = 'Draw'
    }
}