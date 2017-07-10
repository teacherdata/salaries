import React from 'react'
import { shallow } from 'enzyme'
import Report from './'
import Notice from './Notice'

it('renders without crashing', () => {
  shallow(<Report />)
})

it('properly handles updating to no selected states', () => {
  const wrapper = shallow(<Report />)
  wrapper.setState({ states: [] })
  expect(wrapper.contains(<Notice />)).toEqual(true)
})
