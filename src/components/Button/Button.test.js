import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button"
import { shallow } from "enzyme"

describe("App", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Button />)
    
  })

  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
    
  })

  it("should reset state after a click", async() => {
    await wrapper.instance().handleClick()

    expect(wrapper).toMatchSnapshot();
  })

  it('should call an anonymous function on click', () => {
    wrapper.find('button').prop('onClick')()
  })
})
