// set the constant elements
const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const result = document.querySelector('.result')
const userImg = document.querySelector('.user-img')
const compImg = document.querySelector('.comp-img')

const choices = ['rock', 'paper', 'scissors']
let comp
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

function compChoice() {
    const randNum = Math.floor(Math.random()*3)
    comp = choices[randNum]
    compImg.src = "../img/" + comp + ".png"
}

function winLose(userChoice) {
    console.log(comp, userChoice)
}