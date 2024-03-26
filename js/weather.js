// IP Geolocation

const ipKey = '7915db329f04435eace40f7f46198514'

async function getIp() {
    const ipUrl = `https://api.geoapify.com/v1/ipinfo?&apiKey=${ipKey}`
    try {
        const ipResponse = await fetch(ipUrl)
        const ipData = await ipResponse.json()
        const lat = ipData.location.latitude
        const lon = ipData.location.longitude
        const coords = [lat, lon]
        return coords
    } catch {error} {
        console.error()
    }
}

getIp()

// Date & Time

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

fullDate.textContent = currentDate
time.textContent = currentTime

// Weather

const clouds = ['few clouds', 'scattered clouds', 'broken clouds', 'overcast clouds']
const rain = ['shower rain', 'rain', 'mist']
const key = 'a6c744f76c92ffe2b16d0de1a1816392'
const units = 'imperial'

let tempText = document.querySelector('.temp')
let conditionText = document.querySelector('.condition')
let condImg = document.querySelector('.condition-img')
let img

async function getWeather(coordinates) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&apikey=${key}&units=${units}`
    try {
        const response = await fetch(url)
        const data = await response.json()

        let currentTemp = Math.round(data.main.temp)
        let currentCond = data.weather[0].description

        if (clouds.includes(currentCond)) {
            img = 'partly-cloudy.png'
        } else if (rain.includes(currentCond)) {
            img = 'rain.png'
        } else if (currentCond = 'thunderstorm') {
            img = 'rain-storm.png'
        } else if (currentCond = 'snow') {
            img = 'snow.png'
        } else if (currentCond = 'sunny') {
            img = 'sunny'
        }

        condImg.src = `../weather-imgs/${img}`

        conditionText.textContent = `${currentCond}`
        tempText.textContent = `${currentTemp}*`
    } catch {error} {
        console.error()
    }
}

getIp().then(c => getWeather(c))