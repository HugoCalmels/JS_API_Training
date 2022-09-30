const url = 'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1'

let headers = {
  method: 'GET',          
  headers: {
    'Content-Type': 'application/json'
  },           
  mode: 'no-cors',
  cache: 'default'
};


async function getAllDogs() {

  const response = await fetch(url, {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })

  
  console.log(response);

  if (response.status !== 200) {
    throw new Error('Invalid response: ' + response.status)
  }

  const data = await response.json()
  console.log(data)
  return data
}

getAllDogs()
  .then((data) => console.log(data))
  .catch((err)=> console.log(err))
