const joke_btn = document.getElementById('joke_btn')
const joke_text = document.getElementById('joke-text')

const apiKey = '/WprvfrOrzw8t7ltSSgzwg==l1jkAY7GxLu37K3m'

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
}

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'

async function getJoke(){

  joke_text.textContent = 'Thinking...'
  const repsonse = await fetch(apiURL, options)
  const data = await repsonse.json()
  joke_text.textContent = data[0].joke
}

joke_btn.addEventListener('click', getJoke)

