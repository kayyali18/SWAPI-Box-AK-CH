import React from "react"
import ReactDOM from "react-dom"
import Card from "./Card"
import { shallow, mount } from "enzyme"

describe("App", () => {
  let wrapper

  beforeEach(() => {
  })

  it("renders the people cards based off of the category condition", () => {
    wrapper = shallow(<Card data={{ name: "Luke" }} category={"people"}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it("renders the planet cards based off of the category condition", () => {
    wrapper = shallow(<Card data={{ name: "Mars" }} category={"planets"}/>)

    expect(wrapper).toMatchSnapshot()
  })

  it("renders the vehicle cards based off of the category condition", () => {
    wrapper = shallow(<Card data={{ name: "car" }} category={"vehicles"}/>)

    expect(wrapper).toMatchSnapshot()
  })

})