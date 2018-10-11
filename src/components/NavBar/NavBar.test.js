import React from "react"
import ReactDOM from "react-dom"
import NavBar from "./NavBar"
import { shallow } from "enzyme"

describe("App", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<NavBar />)
  })

  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot()
  })
})