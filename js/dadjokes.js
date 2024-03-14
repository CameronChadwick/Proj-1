const theJoke = document.querySelector('.output')
const jokeBtn = document.querySelector('.button')
const url = 'https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8f5a7c198fmshece8584651d201ap1a091fjsncd35e8249546',
		'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
	}
};

async function getJoke() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const joke = result[0].joke;
        theJoke.textContent = joke
    } catch (error) {
        theJoke.textContent = "something happened..."
    }
}

jokeBtn.addEventListener('click', getJoke)