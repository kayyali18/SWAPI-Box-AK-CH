export const fetchData = async (category, page) => {
  try {
    const baseURL = `https://swapi.co/api/${category}/?page=${page}`
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

export const fetchSupp = async (residents) => {
  const names = residents.map(async url => {
    const response = await fetchByURL(url)
    return response
  })
  return Promise.all(names)
}

export const fetchByURL = async (url) => {
  try {
    const response = await fetch (url)
    const data = await response.json()
    return data
  }
  catch(error) {
    console.log (error)
  }
}