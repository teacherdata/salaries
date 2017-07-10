import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const setup = () => {
  return shallow(<App />)
}

it('renders without crashing', () => {
  setup()
})

it('renders with the correct attributes', () => {
  const wrapper = setup()
  const notice = <div className='App' />
  expect(wrapper.find('.App').length).toEqual(1)
})
