import React from 'react'
import { shallow } from 'enzyme'
import PrimaryAppBar from './PrimaryAppBar'

it('renders without crashing', () => {
  shallow(<PrimaryAppBar />)
})
