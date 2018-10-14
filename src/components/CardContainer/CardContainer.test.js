import React from 'react'
import ReactDOM from 'react-dom'
import CardContainer from './CardContainer'
import {shallow, configure} from 'enzyme'

describe('Card Container', () => {
  let wrapper
  let mockProps

  beforeEach(() => {
    wrapper = shallow(<CardContainer />)
  })

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should fetch supplementary data and update state", () => {

  })
})