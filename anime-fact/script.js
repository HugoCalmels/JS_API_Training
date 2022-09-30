
let selectDiv = document.getElementById('select')
let resultWrapper = document.querySelector('.result')


async function getAnimesNames() {
  
  const response = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
  const data = await response.json()
  return data
}

getAnimesNames().then((data) => {
  console.log(data)
  data.data.forEach((e) => {
    console.log(e.anime_name)
    let newOption = document.createElement('option')
    newOption.innerHTML = e.anime_name
    selectDiv.appendChild(newOption)
  })
})

let select = document.querySelector('#select')
select.addEventListener('change', (e) => {
  e.preventDefault()
  //let selectArray = select.querySelectorAll('option')
  console.log(select.value)

  getFact(select.value)
    .then((data) => {
      console.log(data)
      drawManga(data, select.value )
    })
})

async function getFact(name) {
  const response = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${name}`)
  const data = await response.json()
  return data
}

function drawManga(data, name) {

  // remove old display
  resultWrapper.innerHTML = ``
  // get data in array
  let factsArray = data.data
  
  // add new display
  let newDiv = document.createElement('div')
  newDiv.className += 'manga-display'
  newDiv.innerHTML = `
    <div class="manga-header">
    <img id="img-manga" src='${data.img}' alt="${name}">
    </div>
    `
  resultWrapper.appendChild(newDiv)

  let mangaDisplay = document.querySelector('.manga-display')
  let mangaFacts = document.createElement('div')
  mangaFacts.className += 'manga-facts'
  mangaFacts.innerHTML = `<p id="facts-header">All ${data.total_facts} facts about ${name}</p>`

  data.data.forEach((e, index) => {
    mangaFacts.innerHTML += `
    <div class="fact-details">
    <p>#${index} : ${e.fact}</p>
    </div>
    `
  })

  mangaDisplay.appendChild(mangaFacts)

}
