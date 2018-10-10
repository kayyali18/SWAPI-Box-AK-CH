import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

// should be in setupTests.js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('has an initial state', () => {
    const expected = {
        films: null,
        categories: [
          {category: 'planets', page: 1}, 
          {category: 'people', page: 1}, 
          {category: 'vehicles', page: 1}, 
          {category: 'films', page: 1} 
        ]
      }

    expect(wrapper.state()).toEqual(expected)
    })

  it('should call fetchAllData with the correct parameters in componentDidMount', () => {

  })
})
