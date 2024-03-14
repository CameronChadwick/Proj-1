const url = 'https://api.openweathermap.org/data/2.5/weather?'
const key = 'a6c744f76c92ffe2b16d0de1a1816392'
const units = 'imperial'

const fullDate = document.querySelector('.date')
const time = document.querySelector('.time')

const dateObject = new Date()
const month = dateObject.getMonth() + 1
const date = dateObject.getDate()
const year = dateObject.getFullYear()
let hours = dateObject.getHours()
let mins = dateObject.getMinutes()
let amPm = 'am'
if (mins < 10) {mins = '0' + mins.toString()}
if (hours > 11) {amPm = 'pm'}
if (hours > 12) {hours = hours - 12}
if (hours == 0) {hours = 12}
let currentTime = `${hours}:${mins}${amPm}`
let currentDate = `${month}/${date}/${year}`

console.log(currentDate)
console.log(currentTime)

fullDate.textContent = currentDate
time.textContent = currentTime