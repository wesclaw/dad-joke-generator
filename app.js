// const joke_btn = document.getElementById('joke_btn')
// const joke_text = document.getElementById('joke-text')

// const apiKey = '/WprvfrOrzw8t7ltSSgzwg==l1jkAY7GxLu37K3m'

// const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'

// const options = {
//   method: 'GET',
//   headers:{
//     'X-API-Key': apiKey,
//   },
// }

// async function getJoke(){
//   joke_text.textContent = 'Thinking...'
//   const response = await fetch(apiURL, options)
//   const data = await response.json()
//   joke_text.textContent = data[0].joke
// }

// joke_btn.addEventListener('click', getJoke)




const joke_text = document.getElementById('joke-text')
const joke_btn = document.getElementById('joke_btn')


const apiKey = '/WprvfrOrzw8t7ltSSgzwg==l1jkAY7GxLu37K3m'

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'


const options = {
  method: 'GET',
  headers: {
    'X-API-Key': apiKey,
  }
}

async function getJoke(){
  joke_text.textContent = 'Thinking...'
  const res = await fetch(apiURL, options)
  const data = await res.json()
  joke_text.textContent = data[0].joke
}

joke_btn.addEventListener('click', getJoke)