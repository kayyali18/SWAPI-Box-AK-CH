export const fetchData = async (category) => {
  console.log('works')
  try {
    switch (category) {
      case 'people':
      console.log('this is people')
      break;
    default:
      console.log('Sorry.')
    }

  } catch(error) {
      console.log(error)
    }
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

// export const fetchSupp = async (residents) => {
//   console.log (residents)
//   const names = residents.map(async url => {
//     const response = await fetchByURL(url)
//     return response
//   })
//   return Promise.all(names)
// }

// export const fetchByURL = async (url) => {
//   try {
//     const response = await fetch(url)
//     const data = await response.json()
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }