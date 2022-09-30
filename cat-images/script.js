
const api_key = '?api_key=ecd840dd-33bd-4406-b19c-dece6ca87515'
const url = `https://api.thecatapi.com/v1/breeds${api_key}`


async function getAllCatBreeds() {
  
  const response = await fetch('https://api.thecatapi.com/v1/breeds?api_key=ecd840dd-33bd-4406-b19c-dece6ca87515')
  if (response.statusCode !== 200) {
    throw new Error('Invalid endpoint')
  }
  const data = await response.json()
  return data
}

getAllCatBreeds()
  .then((data) => { console.log(data) })

// https://api.thecatapi.com/images/search?breed_id={{selected_breed.id}}