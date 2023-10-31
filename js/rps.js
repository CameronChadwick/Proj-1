const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const result = document.querySelector('.result')
const userImg = document.querySelector('.user-img')
const compImg = document.querySelector('.comp-img')

function rockBtnClick() {
    result.innerText = 'rock clicked'
}

function paperBtnClick() {
    result.innerText = 'paper clicked'
}

function scissorsBtnClick() {
    result.innerText = 'scissors clicked'
}


rockButton.addEventListener('click', rockBtnClick)
paperButton.addEventListener('click', paperBtnClick)
scissorsButton.addEventListener('click', scissorsBtnClick)