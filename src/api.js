export const fetchData = async category => {
  const url = `https://swapi.co/api/${category}/`
  let data, suppData, filteredData
  let item = JSON.parse(localStorage.getItem(category))
  let favs = JSON.parse(localStorage.getItem("favourites"))
  if (favs === null) localStorage.setItem("favourites", JSON.stringify([]))

  if (item) return item
  try {
    switch (category) {
      case "people":
        data = await fetchByURL(url)
        suppData = await fetchPeopleExtras(data)
        filteredData = await filterData(data.results, suppData)
        localStorage.setItem("people", JSON.stringify(filteredData))

        return filteredData

      case "planets":
        data = await fetchByURL(url)
        suppData = await fetchPlanetExtras(data)
        filteredData = await filterData(data.results, suppData)
        localStorage.setItem("planets", JSON.stringify(filteredData))

        return filteredData

      case "films":
        data = await fetchByURL(url)
        localStorage.setItem("films", JSON.stringify(data))

        return data

      case "vehicles":
        data = await fetchByURL(url)
        filteredData = addKey([...data.results], category)
        localStorage.setItem("vehicles", JSON.stringify(filteredData))

        return filteredData

      default:
        return null
    }
  } catch (error) {
    return error
  }
}

const addKey = (data, category) => {
  let newData = []
  data.forEach(entry =>
    newData.push({ currCategory: category, key: entry.name, main: entry })
  )
  return newData
}

const filterData = (data, suppData) => {
  const filteredData = data.map((person, index) => {
    const combined = { main: person, supp: suppData[index], key: person.name }
    return combined
  })
  return filteredData
}

export const checkStorage = item => {
  const thing = localStorage.getItem(JSON.parse(item))

  if (thing) return thing

  return thing
}

export const fetchPeopleExtras = async data => {
  const extras = data.results.map(async entry => {
    let homeworld = await fetchByURL(entry.homeworld)
    let species = await fetchByURL(entry.species)
    let combined = {
      homeworld: homeworld.name,
      population: homeworld.population,
      species: species.name
    }

    return combined
  })

  return Promise.all(extras)
}

export const fetchPlanetExtras = async data => {
  const extras = data.results.map(async entry => {
    let residents = await entry.residents.map(async res => {
      let name = await fetchByURL(res)
      return name.name
    })
    return Promise.all(residents)
  })
  return Promise.all(extras)
}

export const fetchByURL = async url => {
  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch (error) {
    return error
  }
}

export const getFavs = () => {
  let favs = JSON.parse(localStorage.getItem("favourites"))
  return favs
}

export const updateFav = newFavs => {
  localStorage.setItem("favourites", JSON.stringify(newFavs))
}
