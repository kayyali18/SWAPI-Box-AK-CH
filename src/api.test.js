/* eslint-disable */
import React from "react"
import ReactDOM from "react-dom"
import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { createSerializer } from "enzyme-to-json"

import * as API from "./api"

configure({ adapter: new Adapter() })

describe("api", () => {
  let mockResults, mockCategories
  beforeEach(() => {
    mockResults = [{ blah: "blah" }, { blegh: "bluh" }]
    mockCategories = {
      categories: [
        { category: "planets", page: 1 },
        { category: "people", page: 1 },
        { category: "vehicles", page: 1 },
        { category: "films", page: 1 }
      ]
    }

    window.fetch = jest.fn(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockCategories)
    })
    )
  })

  it("should call fetch with the proper params", async () => {
    const url = `https://swapi.co/api/films/?page=1`
    //Execution
    await API.fetchData("films", 1)

    // Expectation
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it("fetchData should return some data", async () => {
    const url = `https://swapi.co/api/films/?page=1`

    //Execution
    const returned = await API.fetchData("films", 1)
    
    // Expectation
    expect(window.fetch).toHaveBeenCalled()
    expect(returned).toEqual(mockCategories)
  })
})
