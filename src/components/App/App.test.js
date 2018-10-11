import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { shallow, configure } from "enzyme"

describe("App", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it("renders without crashing", () => {
    console.log ('We saved the world just FYI')
    expect(wrapper).toMatchSnapshot()
  })

  it("has an initial state", () => {
    const expected = {
      films: null,
      categories: [
        { category: "planets", page: 1 },
        { category: "people", page: 1 },
        { category: "vehicles", page: 1 },
        { category: "films", page: 1 }
      ]
    }

    expect(wrapper.state()).toEqual(expected)
  })

  it("should call fetchAllData with the correct parameters in componentDidMount", () => {})
})
