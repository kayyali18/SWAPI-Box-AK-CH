export const fetchData = async (category) => {
  const url = `https://swapi.co/api/${category}/`
  try {
    switch (category) {
      case 'people':
        const data = await fetchByURL(url)
        const suppData = await fetchPeopleExtras(data)
        const filteredData = filterData(data.results, suppData)
        
        return filteredData;
      break;
    default:
      console.log('Sorry.')
    }

  } catch(error) {
      console.log(error)
    }
}

  const filterData = (data, suppData) => {
    const filteredData = data.map((person, index) => {
      const combined = {main: person, supp: suppData[index], key: person.name}
      return combined;
    })
    return filteredData;
  }



// export const fetchData = async (category, page) => {
//   try {
//     const baseURL = `https://swapi.co/api/${category}/?page=${page}`
//     const response = await fetch(baseURL)
//     const data = await response.json()
//     if (category == 'planets') {
//       const planets = data.results.map (async entry => {
//         const response = await fetchSupp(entry.residents)
//         return response
//       })
//       return planets
//     } else if (category == 'people') {
//       const people = data.results.map (async entry => {
//         let species = entry.species
//         let homeworld = entry.homeworld
//         const params = [homeworld, species]
//         const response = await fetchSupp(params)
//         return response 
//       })
//       return people
//     }
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }

// export const fetchAllData = (categories) => {
//   const unresolvedPromises = categories.map(category => {
//     return fetchData(category.category, category.page)
//   })
//   return Promise.all(unresolvedPromises)
// }

export const fetchPeopleExtras = async (data) => {
  const extras = data.results.map(async entry => {
    let homeworld = await fetchByURL(entry.homeworld)
    let species = await fetchByURL(entry.species)
    let combined = {homeworld: homeworld.name, population: homeworld.population, species: species.name}
    return combined
  })

  return Promise.all(extras)
}

export const fetchByURL = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}