import React from 'react'
import { shallow } from 'enzyme'
import { stub } from 'sinon'
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

it('is able to properly delete states', () => {
  const expected = ['CA', 'NY']
  const wrapper = shallow(<Report />)
  wrapper.instance().handleDeleteState('AZ')
  expect(wrapper.state().states).toEqual(expect.arrayContaining(expected))
})
