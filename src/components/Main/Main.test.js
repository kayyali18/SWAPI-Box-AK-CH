import React from "react"
import ReactDOM from "react-dom"
import Main from "./Main"
import { shallow } from "enzyme"

describe("App", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Main />)
  })

  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot()
  })
})