import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { shallow, configure } from "enzyme"

describe("App", () => {
  let wrapper
  let mockCategories

  beforeEach(() => {
    wrapper = shallow(<App />)
    mockCategories = {
      categories: [
        {category: 'planets', page: 1}, 
        {category: 'people', page: 2}, 
        {category: 'vehicles', page: 1}, 
        {category: 'films', page: 1} 
      ]
    }
  })

  it("should set state with the correct data", async () => {
    await wrapper.instance().componentDidMount();

    expect(wrapper.state()).toMatchSnapshot()
    
  })
})
