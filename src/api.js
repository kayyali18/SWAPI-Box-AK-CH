import fetch from 'node-fetch';

export const fetchData = async (category, page) => {
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

export const fetchAllData = (categories) => {
  const unresolvedPromises = categories.map(category => {
    return fetchData(category.category, category.page)
  })
  return Promise.all(unresolvedPromises)
}