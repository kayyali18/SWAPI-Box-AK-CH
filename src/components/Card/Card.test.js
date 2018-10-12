import React from "react"
import ReactDOM from "react-dom"
import Card from "./Card"
import { shallow } from "enzyme"

describe("App", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Card />)
  })

  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot()
  })
})