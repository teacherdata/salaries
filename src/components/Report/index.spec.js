import React from 'react'
import { shallow } from 'enzyme'
import Report from './'
import Notice from './Notice'
import mockContext from '../../mocks/context'

describe('<Report />', () => {
  it('renders without crashing', () => {
    shallow(<Report />, mockContext)
  })

  it('properly handles updating to no selected states', () => {
    const wrapper = shallow(<Report />, mockContext)
    wrapper.setState({ states: [] })
    expect(wrapper.contains(<Notice />)).toEqual(true)
  })
})
