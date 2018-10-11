import React from "react"
import ReactDOM from "react-dom"
import Landing from "./Landing"
import { shallow } from "enzyme"

describe("App", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Landing />)
  })

  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot()
  })
})