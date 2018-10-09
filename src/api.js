import fetch from 'node-fetch'

const fetchData = async (category, page) => {
  const baseURL = `https://swapi.co/api/${category}/?page=${page}`
  try {
    const response = await fetch(baseURL)
    const data = await response.json()
    return data

    
  }
  catch(error) {
    console.log(error)
  }
}

export default fetchData;